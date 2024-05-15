import Link from 'next/link'
import React from 'react'

export const DiscussionListItem = () => {
  return (
    <div className="grid grid-cols-12 items-center">
      <div className="col-span-1 flex justify-center">
        <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      </div>
      <div className="col-span-9">
        <div>
          <Link href="/discussions/random-disscussion" className="font-sans font-bold text-gray-900 dark:text-white">
            How to get better at algorithms and data structures?
          </Link>
        </div>
        <div>
          <p className="text-sm font-sans font-light text-gray-500 dark:text-white">
            <Link href="/people/_random_user_" className="hover:text-gray-700">_random_user_</Link> asked on Apr 17 in Questions
          </p>
        </div>
      </div>
      <div className="col-span-1">
      <div class="flex -space-x-4 items-center">
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg" alt="" />
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
      </div>
      </div>
      <div className="col-span-1">
        <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
            Answered
        </span>
        {/* This one if for unanswered */}
        {/* <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
            Unanswered
        </span> */}
      </div>
    </div>
  )
}
