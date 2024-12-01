/** @format */

import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-blue-400'>
      <footer className='text-gray-600 body-font'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <span className='ml-3 text-xl'>Mohammad Aftab Mirani</span>
          </a>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
            © 2024 Mohammad Aftab Mirani
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <Link
              target='blank'
              href={
                "https://www.facebook.com/@meer.aftabmirani.7/?mibextid=ZbWKwL"
              }
              className='text-gray-500'
            >
              <FaFacebook className='text-3xl hover:text-[#0165E1]' />
            </Link>
            <Link
              target='blank'
              href={"https://www.linkedin.com/in/mohammad-aftab-4740792b5"}
              className='text-gray-500'
            >
              <FaLinkedin className='text-3xl hover:text-[#0A66C2]' />
            </Link>
            <Link
              target='blank'
              href={"https://www.instagram.com/muhammad_aftab_mirani/"}
              className='text-gray-500'
            >
              <FaInstagram className='text-3xl hover:text-[#E1306C]' />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
