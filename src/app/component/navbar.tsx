
import React from "react";
import Link from "next/link";
import { PiDownloadSimpleFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className='bg-fixed bg-cover bg-center custom-image z-50 sticky top-0'>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <span className='ml-3 text-xl'>Mohammad Aftab Mirani</span>
          </a>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link href={"/"} className='mr-5 hover:text-black '>
              Home
            </Link>
            <Link href={"#about"} className='mr-5 hover:text-black'>
              About Me
            </Link>
            <Link href={"#skill"} className='mr-5 hover:text-black'>
              Skills
            </Link>
            <Link href={"#projects"} className='mr-5 hover:text-black'>
              Projects
            </Link>
            <Link href={"#Contact"} className='mr-5 hover:text-black'>
              Contact Me
            </Link>
          </nav>
          <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
            <a href='/image/cv.png'>Download CV</a>
            <PiDownloadSimpleFill className='text-xl ml-2' />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
