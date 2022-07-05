import Head from 'next/head'
import { useEffect, useState } from "react";
import axios from 'axios';
import useSWR from 'swr';

import TableSection from "../components/TableSection";
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import FilterBox from './filterBox';



const Home = () => {
  const [pageConfig, setPageConfig] = useState({
    currentPage: 1,
    limit: 2
  });

  const { docs, isLoading, isError } = useDocs(
    pageConfig.currentPage,
    pageConfig.limit
  );

  const handlePageClick = async (data) => {
    console.log(data.selected+1);

    setPageConfig({
      ...pageConfig,
      currentPage:data.selected+1,
     
    });

  };
  const onPageChange=(page)=>{
    setPageConfig({
      ...pageConfig,
      currentPage:page,
     
    });
  }

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <div >
      <Head>
        <title>Documents</title>
      </Head>

      <TableSection
        dataDocs={docs.data}
        page={docs.meta.page}
        limit={docs.meta.limit}
        baseUrlDocSrc={docs.meta.base_url}
        handlePageClick={onPageChange}
        pageCount={Math.ceil(docs.meta.total_count/ docs.meta.limit)}
        totalCount={docs.meta.total_count}

      />
     

    </div>
  )
}

function useDocs(page, limit) {

  const apiEndPoint = `https://express-doc.herokuapp.com/documents?page=${page}&limit=${limit}`;

  const fetcher = async (url) => {
    try {
      const { data: res } = await axios.get(url);
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
