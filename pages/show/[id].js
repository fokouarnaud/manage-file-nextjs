
import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';


const DetailPage = () => {
  const router = useRouter()
  const id = router.isReady ? router.query.id : 0;
  const { doc, isLoading, isError } = useDoc(id);


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
          <Link href={`/edit/1`}>
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


          <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
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