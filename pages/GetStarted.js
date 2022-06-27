import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";

function GetStarted() {
  const router = useRouter();

  return (
    <div
      style={{
        scrollBehavior: "smooth",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
      }}>
      <div className=' bg-[#090e1a]   h-screen '>
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
        <div className=' relative '>
          <h1 className='flex items-center justify-center'>Select a Service</h1>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
