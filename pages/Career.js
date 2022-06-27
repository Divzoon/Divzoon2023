import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Image from "next/image";
import imagesHeader from "../public/test.png";
function Career() {
  const router = useRouter();

  return (
    <div
      style={{
        scrollBehavior: "smooth",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
      }}>
      <div className=' bg-[#0b1121]   h-screen '>
        <div>
        <Header
              className='select-none'
              herfFacebook='https://www.facebook.com/divzoon'
              herfInsta='https://www.instagram.com/divzoon/'
              herfTwitter='https://twitter.com/divzoon'
              HerfDash='#'
              Herfabout='/about'
              HerfContact='/Contact'
              HerfService='/Services'
              herflogoLink={"/"}
              herflogo='/ico/1.png'
              imgFlagArabic='/Images/flags/Egypt.png'
              imgFlagEnglish='/Images/flags/Usa.png'
              enUrl={router.pathname}
              arUrl={`${"/ar/" + router.pathname}`}
            />
        </div>
        <div className=' max-w-7xl p-2 relative pt-20  m-auto  justify-center'>
          <div className=' w-full  rounded-md bg-gray-700/20 min-h-[320px] align-middle text-center items-center  '>
            <div className='relative pt-3 '>
              <h1
                style={{ fontFamily: "Poppins-Bold", width: "400" }}
                className='select-none text-center text-white text-3xl font-bold'>
                Find your next job at
                <span key='coloredText' className=' header text-red-400'>
                  {" "}
                </span>
                <span key='coloredText' className='select-none header text-red-400'>
                  Divzoon
                </span>
              </h1>
            </div>
            <div className='h-[240px] relative'>
              <Image
                alt='Header'
                layout='fill'
                objectFit='contain'
                src={imagesHeader}
              />
            </div>
          </div>

          <div className=' w-full p-2 min-h-[120px] '>
            <div className='relative  rounded-md bg-gray-700/20 '>
              <h1
                style={{ fontFamily: "Poppins-Bold", width: "400" }}
                className='text-center text-white text-3xl font-bold'>
                <span key='coloredText' className=' header text-red-400'>
                  {" "}
                </span>
                <span key='coloredText' className='select-none header text-red-400'>
                  Soon ...
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
