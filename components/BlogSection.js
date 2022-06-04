import React from 'react'
import BlogCard from './BlogCard'
import SidePanel from './SidePanel'

const BlogSection = () => {
  return (
    <div className="py-10">
        <div className="max-w-7xl px-5 mx-auto">
            <div className="grid gap-10 xl:grid-cols-3">
                <div className="col-span-2">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
                <div className="">
                    <SidePanel/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BlogSection