import Head from 'next/head'
import TableSection from '../components/TableSection'

import { useState, useEffect } from 'react'
import axios from 'axios';



const Home = () => {
  const [docs, setDocs] = useState({data:[], meta:{page:1}});
  const apiEndPoint = "https://express-doc.herokuapp.com/documents";

  useEffect(() => {
    const getDocs = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setDocs(res);
    }
    getDocs();
  }, []);

  return (
    <div>
      <Head>
        <title>file manager</title>
      </Head>

      <TableSection
        dataDocs={docs.data}
        page={docs.meta.page} />
    </div>
  )
}

export default Home;
