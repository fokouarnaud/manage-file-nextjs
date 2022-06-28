import React, { useContext } from "react";


import { CountContext } from "./FormStep";
import TableSection from "./TableSection";
import Spinner from './Spinner';
import Error from './Error';
import axios from 'axios';
import useSWR from 'swr';


const StepTwo = () => {
  const { count, setCount } = useContext(CountContext);
  const { docs, isLoading, isError } = useDocs();

  if (isLoading) return <Spinner/>
  if (isError) return <Error/>


  return (
    <>
      <h2 className="text-2xl font-bold my-4">This is Step Two</h2>
      <p className="my-4">
        Your user is now on the second step of the form. You can add more
        elements here.
      </p>
      <TableSection
        dataDocs={docs.data}
        page={docs.meta.page} />
     

      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="btn-primary-outline btn-lg mr-1"
      >
        Previous Step
      </button>

   
    </>
  );
};

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
  
export default StepTwo;