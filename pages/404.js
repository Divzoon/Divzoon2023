import React from "react";
import Header from "../components/Header";
 //arUrl={`${"/ar/" + router.pathname}`}
           
function Custom404() {
  return <div className='bg-[#0b1121]  overflow-hidden  box-content  relative  h-screen'>
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
              enUrl={""}
              arUrl=""
              />


       <div className=" grid place-items-center mt-60 p-2" >
           <div className=" justify-center mx-auto flex ">
           <h1 className='select-none text-slate-200   font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center  '>
           404 - Page Not Found            <span className=' text-red-500  font-extrabold  text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center '>
              .
            </span>
          </h1>
         
           </div>
           <a
              className='mt-6 select-none font-bold box-decoration-slice shadow-lg hover:shadow-red-500/50    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-100 focus:ring-offset-slate-800   h-12 px-6 rounded-lg w-full flex items-center text-white justify-center sm:w-auto bg-red-500  hover:bg-red-400'
              href={"/"}
              >
              Go Home
            </a>

      </div>

  </div>;
}

export default Custom404;
