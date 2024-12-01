import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[4rem]">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/image/project3.png"
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Facebook Clone Page
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Facebook
            </h1>
            <p className="leading-relaxed">
              This is project I have created using NextJs
            </p>
            <Link href="https://facebook-log-in-page.vercel.app/">
            <p className="leading-relaxed title-font font-medium text-blue-500 mb-1">
              View
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/image/project.png"
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Shareable Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume Builder
            </h1>
            <p className="leading-relaxed ">
              This is project i have created using NextJs
            </p>
            <Link href="https://milestone-3-swart.vercel.app/">
            <p className="leading-relaxed title-font font-medium text-blue-500 mb-1">
              View
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/image/project4.png"
            width={500}
            height={500}          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Editable Resume
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Editable
            </h1>
            <p className="leading-relaxed">
              This is project i have created using NextJs
            </p>
            <Link href="https://milestone-4-sepia-sigma.vercel.app/">
            <p className="leading-relaxed title-font font-medium text-blue-500 mb-1">
              View
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects
