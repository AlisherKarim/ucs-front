import Link from "next/link";
import React from "react";

export const BlogListItem = () => {
  return (
    <div className="block p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex justify-start items-center gap-2">
        <div className="w-8 h-8">
          <img
            className="w-8 h-8 rounded-full"
            src="https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg"
            alt="Rounded avatar"
          />
          {/* <svg className="w-8 h-8 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg> */}
        </div>
        <div className="flex gap-1 items-center">
          <h5 className="font-sans font-light text-gray-900 dark:text-white">
            John Doe
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            May 14
          </span>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-1">
        <div className="col-span-5 mt-2">
          <Link
            href="/blogs/some-random-blog"
            className="mb-1 text-xl font-bold tracking-tight text-gray-900 hover:text-gray-600 dark:text-white"
          >
            Random blog title: how to get started with NextJs and Tailwind CSS
          </Link>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            blandit sapien. Suspendisse eget justo risus. Etiam accumsan ipsum
            at lacus lacinia, eu mollis eros euismod. Sed nec lectus eros. Ut
            quis sagittis ex...
          </p>
        </div>
        <div className="col-span-1 w-36 flex items-center justify-center">
          {/* <img className="h-auto max-w-full" src="/docs/images/examples/image-1@2x.jpg" alt="image description" /> */}
          <svg
            className="h-auto max-w-full text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div>
        <div>
          {/* <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">TagName</span> */}
          <span className="whitespace-nowrap bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            News
          </span>
        </div>
      </div>
    </div>
  );
};
