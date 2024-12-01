import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row items-center p-2 relative bg-fixed bg-cover bg-center custom-image'>
      <div className='md:w-1/2 mx-auto md:ml-16 md:mr-10 text-center md:text-left mb-6 pb-40 md:mb-0 relative z-10'>
        <h1 className='text-4xl sm:text-5xl md:text-5xl font-bold mb-3'>
          Mohammad Aftab Mirani
        </h1>
        <h2 className='text-2xl sm:text-2xl md:text-3xl font-semibold mb-5 mt-5 text-orange-600'>
          Frontend Developer
        </h2>
        <div className='relative inline-block mx-auto mt-5'>
          <div className='absolute -inset-1 rounded-full blur opacity-95 pointer-events-none'></div>
          <Link
            href='#Contact'
            className='relative bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded transition duration-300'
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className='mx-auto flex items-center mb-12'>
        <div className=' relative overflow-hidden]'>
          <Image
            className='w-[300px] h-[300] rounded-md'
            src='/image/profile.png'
            alt='profile'
            width={500}
            height={500}
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
