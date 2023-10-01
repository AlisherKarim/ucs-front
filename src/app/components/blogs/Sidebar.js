import React from 'react'
import { SidebarBlogItem } from './SidebarBlogItem'

export const Sidebar = () => {
  return (
    <div>
      <div>
        <h5 className="font-sans font-bold text-gray-900 dark:text-white">Top picks</h5>
        <div className="flex flex-col gap-2 mt-3 mb-3">
          <SidebarBlogItem />
          <SidebarBlogItem />
          <SidebarBlogItem />
          <SidebarBlogItem />
        </div>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div>
        <div className="flex flex-wrap items-center gap-1">
          <span className="whitespace-nowrap bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">News</span>
          <span className="whitespace-nowrap bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Experience</span>
          <span className="whitespace-nowrap bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Computer Science</span>
          <span className="whitespace-nowrap bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Technology</span>
          <span className="whitespace-nowrap bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Development</span>
        </div>
      </div>
    </div>
  )
}
