
import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/router'
import Link from 'next/link'
import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";
import { LoremIpsum } from "lorem-ipsum";

import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const DetailPage = () => {
  const router = useRouter()
  const id = router.isReady ? router.query.id : 0;
  const { doc, isLoading, isError } = useDoc(id);

  function headRows() {
    return [
      { id: 'ID', name: 'Name', email: 'Email', city: 'City', expenses: 'Sum' },
    ]
  }

  function footRows() {
    return [
      { id: 'ID', name: 'Name', email: 'Email', city: 'City', expenses: 'Sum' },
    ]
  }

  function columns() {
    return [
      { header: 'ID', dataKey: 'id' },
      { header: 'Name', dataKey: 'name' },
      { header: 'Email', dataKey: 'email' },
      { header: 'City', dataKey: 'city' },
      { header: 'Exp', dataKey: 'expenses' },
    ]
  }

  function data(rowCount) {
    rowCount = rowCount || 10
    var body = []
    for (var j = 1; j <= rowCount; j++) {
      body.push({
        id: doc.id,
        name: doc.matricule_etudiant,
        email: doc.matricule_etudiant,
        city: doc.departement_etudiant,
        expenses: doc.annee_soutenance,
      })
    }
    return body
  }

  function bodyRows(rowCount) {
    rowCount = rowCount || 10
    var body = []
    for (var j = 1; j <= rowCount; j++) {
      body.push({
        id: doc.id,
        name: doc.matricule_etudiant,
        email: doc.matricule_etudiant,
        city: doc.departement_etudiant,
        expenses: doc.annee_soutenance,
      })
    }
    return body
  }

  const handleGeneratePDF = () => {
    let base64Img = "data:image/jpeg;base64,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";
    let doc = new jsPDF('l')

  let head = headRows()
  head[0]['text'] = 'Text'
  let body = bodyRows(4)
  body.forEach(function (row) {
    row['text'] = lorem.generateSentences(7);
  })

  doc.text("Overflow 'ellipsize' with one column with long content", 14, 20)
  doc.autoTable({
    head: head,
    body: body,
    startY: 25,
    // Default for all columns
    styles: { overflow: 'ellipsize', cellWidth: 'wrap' },
    // Override the default above for the text column
    columnStyles: { text: { cellWidth: 'auto' } },
  })
  doc.text(
    "Overflow 'linebreak' (default) with one column with long content",
    14,
    doc.lastAutoTable.finalY + 10
  )
  doc.autoTable({
    head: head,
    body: body,
    startY: doc.lastAutoTable.finalY + 15,
    rowPageBreak: 'auto',
    bodyStyles: { valign: 'top' },
  })
    doc.save(`report.pdf`);
  }


  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (



    <section className="mb-6 p-6 max-w-5xl  text-gray-600 body-font container px-5 py-24 mx-auto">
      <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-gray-500 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-16 sm:h-16 w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{doc.nom_etudiant}</h2>
          <p className="leading-relaxed text-base"> {doc.matricule_etudiant}, {doc.departement_etudiant}, {doc.annee_soutenance}</p>

        </div>
      </div>
      <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Titre memoire</h2>
          <p className="leading-relaxed text-base">{doc.titre_doc}</p>
        </div>

      </div>
      <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Mots cles</h2>
          <p className="leading-relaxed text-base">{doc.mot_cle_doc}</p>
        </div>

      </div>
      <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Membres du jury</h2>
          <p className="leading-relaxed text-base">{doc.membre_jury_soutenance}</p>
        </div>

      </div>
      <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Directeur de memoire</h2>
          <p className="leading-relaxed text-base">{doc.directeur_soutenance}</p>
        </div>

      </div>
      <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Description</h2>
          <p className="leading-relaxed text-base">{doc.description_doc}</p>
        </div>

      </div>

      <div className="mt-2">
        <div className="flex flex-col items-center justify-center px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">

          <Link href={`/`}>
            <button className="flex items-center justify-between px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-graye">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>

              <span>  Retour a la liste</span>
            </button>
          </Link>
          <Link href={`/edit/${id}`}>
            <button className="flex items-center justify-between px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-graye">

              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>

              <span>  Editer informations</span>
            </button>
          </Link>

          <button className="flex items-center justify-between px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-graye">

            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>

            <span> Telecharger document</span>
          </button>


          <button onClick={handleGeneratePDF} className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>

            <span> Telecharger attestation depot</span>
          </button>

        </div>
      </div>
    </section>



  )
}


function useDoc(id) {

  const apiEndPoint = `https://express-doc.herokuapp.com/documents/${id}`;

  const fetcher = async (url) => {
    try {
      const { data: res } = await axios.get(url);

      return res.data[0];
    } catch (err) {
      throw err.response.data;
    }
  };

  const { data, error } = useSWR(apiEndPoint, fetcher)

  return {
    doc: data,
    isLoading: !error && !data,
    isError: error
  }
}




export default DetailPage;