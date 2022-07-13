import Head from 'next/head'
import { useState } from "react";
import axios from 'axios';
import useSWR from 'swr';

import TableSection from "./TableSection";
import Spinner from './Spinner';
import Error from './Error';




const MyListBox = ({departement, type_doc, annee}) => {
 
  const [pageConfig, setPageConfig] = useState({
    currentPage: 1,
    limit: 5,
    searchBy:"matricule",
    searchValue:"",
  });

  const { docs, isLoading, isError } = useDocs(
    pageConfig.currentPage,
    pageConfig.limit,
    pageConfig.searchBy,
    pageConfig.searchValue,
    departement,
    type_doc,
    annee
  );

  const handleChangeLimit = (e) => {
    e.preventDefault();
    setPageConfig({
      ...pageConfig,
      currentPage: 1,
      limit: e.target.value,

    });
  };  
  
  const handleChangeSearchBy = (e) => {
    e.preventDefault();
    setPageConfig({
      ...pageConfig,
      searchBy: e.target.value,
      searchValue:""

    });
  };
  const handleChangeSearchValue = (val) => {
    setPageConfig({
      ...pageConfig,
      currentPage: 1,
      searchValue: val

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
                  page={pageConfig.currentPage}
                  limit={pageConfig.limit}
                  baseUrlDocSrc={docs.meta.baser_url}
                  handlePageClick={onPageChange}
                  handleChangeLimit={handleChangeLimit}
                  handleChangeSearchBy={handleChangeSearchBy}
                  handleChangeSearchValue={handleChangeSearchValue}
                  pageCount={docs.meta.page_count}
                  totalCount={docs.meta.total_count}
                  searchBy={pageConfig.searchBy}
                  searchValue={pageConfig.searchValue}
                />
  )
}

function useDocs(page, limit,searchBy,searchValue,departement="",type_doc="",annee="") {
 

  const apiEndPoint = `https://express-doc.herokuapp.com/documents?page=${page}&limit=${limit}&${searchBy}=${searchValue}${departement==""?"":`&departement=${departement}`}${type_doc==""?"":`&type_doc=${type_doc}`}${annee==""?"":`&annee=${annee}`}`;
  console.log(apiEndPoint);

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
