import Head from 'next/head'
import { useEffect, useState } from "react";
import axios from 'axios';
import useSWR from 'swr';

import TableSection from "../components/TableSection";
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import FilterBox from './filterBox';
import FilterSelect from '../components/filterSelect';



const Home = () => {
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
    <div >
      <Head>
        <title>Documents</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Documents</h1>
          <div className='flex flex-col md:flex-row md:items-center'>
            <div className='flex flex-col mt-6 md:mt-0 mr-6'>
              <FilterSelect key={1} />
            </div>
            <div className='flex flex-col mt-6 md:mt-0 mr-6 '>
              <FilterSelect key={2} />
            </div>
            <div className='flex flex-col mt-6 md:mt-0 mr-6'>
              <FilterSelect key={3} />
            </div>
          </div>



        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
         
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">

            {/* Product grid */}
            <div className="lg:col-span-12">
              {/* Replace with your content */}
              <div className=" pb-6 border-4 border-dashed border-gray-200 rounded-lg h-full">

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
              </div>
              {/* /End replace */}
            </div>
          </div>
        </section>
      </main>


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
