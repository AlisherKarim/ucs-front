import React from 'react'

export const SidebarBlogItem = () => {
  return (
    <div className="mb-2">
      <div className='flex justify-start items-center gap-2'>
        <div className='w-6 h-6'>
          <img className="w-6 h-6 rounded-full" src="https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg" alt="Rounded avatar" />
        </div>
        <div>
          <h5 className='text-sm font-sans font-light text-gray-900 dark:text-white'>John Doe</h5>
        </div>
      </div>
      <div>
        <div className='mt-1'>
          <h5 className="mb-1 text-base font-normal font-sans tracking-tight text-gray-900 dark:text-white">Random blog title: how to get started with NextJs and Tailwind CSS</h5>
        </div>
      </div>
    </div>
  )
}
