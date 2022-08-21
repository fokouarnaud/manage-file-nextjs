import React from 'react'
import Image from 'next/image'

const TrendingCard = () => {
  return (
    <div className="flex items-start justify-start space-x-5">
      <div className="text-3xl font-extrabold font-sans text-gray-200">01</div>
      <div className="space-y-2">
        <div className="flex items-center justify-start sapce-x-2">
          <div className="h-8 w-8 ">
            <Image className="h-full w-full object-cover object-center" src="/images/trend/1.webp" alt="image_trend1" />
          </div>
          <h3 className="text-xs text-gray-500 font-semibold">
            <a href="#" className="text-black">Nelly</a>{" "}
             in 
             {" "}
             <a href="#"  className="text-black">Discord Blog</a>
            </h3>
        </div>
        <h1 className="font-sans font-extrabold tracking-tight">Announcing our Lates Profile Badge: the Certified Discord Moderator</h1>
        <div className="flex items-center justify-start text-xs space-x-2">
          <p>May29</p>
          <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
          <p>6 min read</p>
        </div>

      </div>
    </div>
  )
}

export default TrendingCard