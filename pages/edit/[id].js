import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import useSWR from 'swr';

import EditSection from '../../components/EditSection';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

const EditPage = () => {
  const router = useRouter()
  const id = router.isReady ? router.query.id : 0;

  const { doc, isLoading, isError } = useOneDoc(id);
 


  if (isLoading) return <Spinner/>
  if (isError) return <Error/>

  return (
   
    <div><EditSection data={doc}/></div>
  )
}

function useOneDoc (id) {

  const apiEndPoint = `https://express-doc.herokuapp.com/documents/${id}`;

  const fetcher = async (url) => {
    try {
      const {data:res} = await axios.get(url);
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

export default EditPage;