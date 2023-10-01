import { Blog } from '@/app/components/blogs/Blog'
import React from 'react'
import { BlogListItem } from '../components/blogs/BlogListItem'
import { Sidebar } from '../components/blogs/Sidebar'

export default function Blogs() {
  return (
    <div className='mt-5'>
      <h5 className="ml-7 mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white">Welcome to the blogs page!</h5>
      <div className='grid grid-cols-3 gap-4 mt-10'>
        <div className='col-span-2'>
          <BlogListItem />
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <BlogListItem />
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <BlogListItem />
        </div>
        <div className='col-span-1 flex gap-3'>
          <div
            className="inline-block min-h-[1em] w-px bg-gray-200 self-stretch opacity-100 dark:bg-gray-700">  
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
    
  )
}
