import React from "react";
import Header from "../../components/Header";
import Whatwedosec from "../../components/Whatwedosec";
import { motion } from "framer-motion";
import Sec3Process from "../../components/Sec3Process";

function index() {


  return (
    <div
      style={{
        scrollBehavior: "smooth",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
      }}>
      <div className='  box-content   relative '>
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
            herflogoLink='/'
            herflogo='/ico/1.png'
            imgFlagArabic='/Images/flags/Egypt.png'
            imgFlagEnglish='/Images/flags/Usa.png'
            enUrl={"Services"}
            arUrl={`${"/ar/Services"}`}
          />
        </div>
        <div className=' relative  '>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                scale: 1,
                opacity: 0.0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
            }}>

          </motion.div>
        </div>
        <div className="flex bglol pb-12 justify-center pt-20 relative  mx-auto ">
<div>
<div className=" m-3 md:m-12" >
            <h1 className='select-none text-slate-200   font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center  '>
Our Main Services
            <span className=' text-red-500  font-extrabold  text-4xl sm:text-5xl lg:text-6xl tracking-tighttext-center sm:text-left '>
              .
            </span>
          </h1>
            </div>
        <Whatwedosec className='  '
                  hrefWebdev='/Services/Webdevelopment'
                  hrefUiux='Services/UiUXDesign'
                  hrefAppdev='/Services/Appdevelopment'
                  hrefHiredev='Hire'

/>



</div>

        
        </div>
        <div style={{ backgroundColor: "#0b1121", boxSizing: "border-box" }}>
        <div className='pt-24'>
        <Sec3Process
            MainText={[
              "We Simplify ",
              <span key='coloredText' className=' header text-red-400'>
                Software Development
              </span>,
              " Process",
            ]}
            sec3Image='/Images/process1.png'
            sec3Image2='/Images/process2.png'
            sec3Image3='/Images/process3.png'
            sec3Image4='/Images/process4.png'
            arrow='/Images/arrow.png'
            arrowr='/Images/arrowr.png'
          />
        </div></div>
      </div>
      <div className='relative h-6 sm:h-9  bglol  backdrop-blur-2xl  '></div>
    </div>
  );
}

export default index;
