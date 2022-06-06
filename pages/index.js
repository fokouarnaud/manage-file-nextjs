import Head from 'next/head'
import TableSection from '../components/TableSection'

import axios from 'axios';

import useSWR from 'swr';
import Spinner from '../components/Spinner';
import Error from '../components/Error';



const Home = () => {
  const { docs, isLoading, isError } = useDocs();

  if (isLoading) return <Spinner/>
  if (isError) return <Error/>
 

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

function useDocs () {

  const apiEndPoint = "https://express-doc.herokuapp.com/documents";

  const fetcher = async (url) => {
    try {
      const {data:res} = await axios.get(url);
     
      return res;
    } catch (err) {
      throw err.response.data;
    }
  };
 
  const { data, error } = useSWR(apiEndPoint, fetcher)

  return {
    docs: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default Home;
