import React from 'react'
import Image from 'next/image'

const BlogCard = () => {
    return (
        <div className="p-5">
            <div className="flex items-center justify-between space-x-5">
                <div className="flex flex-col items-start justify-start space-y-1">
                    <div className=" flex items-center justify-start space-x-2">
                        <span className="h-8 w-8">
                            <Image className="h-full w-full object-cover object-center"
                                src="/images/trend/2.webp" alt="img_profile" />
                        </span>
                        <h3 className="text-xs text-gray-500 font-semibold">
                            <a href="#" className="text-black"> Nelly</a>
                            {" "} in{" "}
                            <a href="#" className="text-black">Discord Blog</a>
                        </h3>
                    </div>
                    <h1 className="text-2xl font-extrabold">Orientalism for Asian America</h1>
                    <p className="text-gray-600 font-medium">Understanding the Asian American experience, including #StopAsianHate, is predicated on Understanding how Orientalis...</p>

                    <div className="flex items-center justify-between text-xs space-x-2  w-full">
                        <div className="flex items-center justify-start text-xs space-x-2 ">
                            <p>May29</p>
                            <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
                            <p>6 min read</p>
                        </div>
                        <a  href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="w-1/3">
                    <Image className="object-cover object-center w-full h-full" src="/images/trend/3.webp" alt="smal_img" />
                </div>

            </div>

        </div>
    )
}

export default BlogCard