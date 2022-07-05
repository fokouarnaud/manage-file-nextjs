import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';


const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
    
        onPageChange(parseInt(currentPage) + 1);
    };

    const onPrevious = () => {
        onPageChange(parseInt(currentPage) - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className="inline-flex items-center"
        >
            <li key={"-1"}
               
            >
                  <button disabled={currentPage == 1}  onClick={onPrevious} className={classnames("px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple", {
                            'cursor-not-allowed  disabled:opacity-25': currentPage == 1
                        })} aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
            </li>
            {paginationRange.map((pageNumber,index) => {
                if (pageNumber === DOTS) {
                    return <li key={index.toString()} className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li
                        key={index.toString()} 
                       
                    >
                         <button  onClick={() => onPageChange(pageNumber)}  className={classnames({'px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple': pageNumber != currentPage}, {
                            'px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple': pageNumber == currentPage
                        })}>
                        {pageNumber}
                        </button>
                    </li>
                );
            })}
            <li
              
               key={"-4"}
            >
                <button disabled={currentPage == lastPage} onClick={onNext} className={classnames("px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple", {
                            'cursor-not-allowed  disabled:opacity-25': currentPage == lastPage
                        })} aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
            </li>
        </ul>
    );
};

export default Pagination;