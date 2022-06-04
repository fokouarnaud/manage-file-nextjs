import React from 'react'

const SidePanel = () => {
    return (
        <div>
            <h1 className="text-sm font-bold uppercase">
                discover more of what matters to you
            </h1>
            <div className="flex items-center justify-start flex-wrap ">
                <a href="#" className="p-2 text-gray-500 text-xs border m-2">
                    self
                </a> <a href="#" className="p-2 text-gray-500 text-xs border m-2">
                    Relationships
                </a> <a href="#" className="p-2 text-gray-500 text-xs border m-2">
                    Data sciene
                </a> <a href="#" className="p-2 text-gray-500 text-xs border m-2">
                    Programming
                </a> <a href="#" className="p-2 text-gray-500 text-xs border m-2">
                    Health
                </a>      
                <a href="#" className="p-2 text-gray-500 text-xs border m-2">
                    Productivity
                </a> 
                <a href="#" className="p-2 text-gray-500 text-xs border m-2">
                    Javascript
                </a>
            </div>
            <a href="#" className="text-green-600 text-sm ">
                    See all topics
                </a>
                <div className="flex items-center justify-start flex-wrap border-t">
                    <a href="#" className="text-gray-600 text-sm text-medium m-2">Help</a>
                    <a href="#" className="text-gray-600 text-sm text-medium m-2">Status</a>
                    <a href="#" className="text-gray-600 text-sm text-medium m-2">Writers</a>
                    <a href="#" className="text-gray-600 text-sm text-medium m-2">Blog</a>
                    <a href="#" className="text-gray-600 text-sm text-medium m-2">Careers</a>
                    <a href="#" className="text-gray-600 text-sm text-medium m-2">Privacy</a>
                    <a href="#" className="text-gray-600 text-sm text-medium m-2">Terms</a>
                    <a href="#" className="text-gray-600 text-sm text-medium m-2">About</a>
                   

                </div>
        </div>
    )
}

export default SidePanel