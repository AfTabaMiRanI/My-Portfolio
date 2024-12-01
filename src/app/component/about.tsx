import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image className="w-[300px] h-[300] rounded-md"
            src="/image/profile.png"
            alt='profile'
            width={500}
            height={500}
            objectFit='cover'
        />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed">
        I am From Kandhkot sindh Pakistan. I have completed my Bachlor's from Shah Abdul Latif University of Khairpur.
        I am Also Frontend Developer.
        In my spare time I enjoy reading novels and watching TV Programms
      </p><br />
      <p>
        <b>Phone No:</b> 0300-0111945
        <br />
        <b>Gmail:</b> meeraniaftab7@gmail.com
      </p>
      <br />
      <div className="flex justify-center">
        <Link href='/image/cv.png'>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Download CV
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
