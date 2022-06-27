import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=' absolute bottom-0 w-full bg-gray-900 font-sans font-semibold duration-500 hover:text-red-500 justify-center text-center h-12 pt-2 text-gray-300'>
      <a
        style={{ fontFamily: "Poppins-Bold", width: "400" }}
        href='https://www.divzoon.com/'
        className='text-xs sm:text-md text-white duration-500 hover:text-red-500'>
        Divzoon © {currentYear} - 2018 All Rights Reserved
      </a>
    </footer>
  );
}

export default Footer;
