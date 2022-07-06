import Head from 'next/head'
import { useState } from "react";
import axios from 'axios';
import useSWR from 'swr';

import TableSection from "./TableSection";
import Spinner from './Spinner';
import Error from './Error';
import FilterSelect from './filterSelect';



const MyListBox = () => {
  const [pageConfig, setPageConfig] = useState({
    currentPage: 1,
    limit: 5
  });

  const { docs, isLoading, isError } = useDocs(
    pageConfig.currentPage,
    pageConfig.limit
  );

  const handleChangeLimit = (e) => {
    console.log(e.target.value);
    setPageConfig({
      ...pageConfig,
      currentPage: 1,
      limit: e.target.value,

    });
  };
  const onPageChange = (page) => {
    setPageConfig({
      ...pageConfig,
      currentPage: page,

    });
  }



  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <TableSection
                  dataDocs={docs.data}
                  page={docs.meta.page}
                  limit={docs.meta.limit}
                  baseUrlDocSrc={docs.meta.base_url}
                  handlePageClick={onPageChange}
                  handleChangeLimit={handleChangeLimit}
                  pageCount={docs.meta.page_count}
                  totalCount={docs.meta.total_count}
                />
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


export default MyListBox;
