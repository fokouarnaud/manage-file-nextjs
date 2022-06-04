import React from 'react'
import TrendingCard from './TrendingCard'

const TrendingList = () => {
  return (
    <div className="border-b py-10">
    <div  className="max-w-7xl mx-auto ">
      <div className="flex items-center justify-start space-x-2">
        <span >
          <svg xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 rounded-full  border-black border" 
          fill="none" viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={1.2}>
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>

        </span>
        <h1 className="text-sm font-bold uppercase">Trending on medium</h1>
      </div>
      <div className="grid gap-10 mt-5 xl:grid-cols-3">
        <TrendingCard/>
        <TrendingCard/>
        <TrendingCard/>
        <TrendingCard/>
        <TrendingCard/>
        <TrendingCard/>
      </div>

    </div>

  </div>
  )
}

export default TrendingList