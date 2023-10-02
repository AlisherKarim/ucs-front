import React from 'react'
import { DiscussionListItem } from '../components/discussions/DiscussionListItem'

const DiscussionsPage = () => {
  return (
    <div className="mt-5">
      <h5 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white">
        Welcome to Discussions page!
      </h5>
      <div className='grid grid-cols-3 gap-2 mt-10'>
        <div className='col-span-1'>
          Sidebar
        </div>
        <div className='col-span-2'>
          <h5 className="mb-4 text-lg font-base leading-none tracking-tight text-gray-900 dark:text-white">
            Discussions
          </h5>
          <div>
            <DiscussionListItem />
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <DiscussionListItem />
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <DiscussionListItem />
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <DiscussionListItem />
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <DiscussionListItem />
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <DiscussionListItem />
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default DiscussionsPage