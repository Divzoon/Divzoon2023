import React from "react";
import Header from "../../../componentsAr/Header";
import { useRouter } from "next/router";
import HeaderC from "../../../componentsAr/HeaderC";
import { motion } from "framer-motion";
import Image from "next/image";
function UiUXDesign() {

  const router = useRouter();
  const reactSVG = (<div className='h-[530px] width-[630px]  '>
                    <Image
            className='relative  bounce-2 box2  '
            src="/Ui.png"
            alt='Header Image'
            objectFit='contain'
            layout='fill'            
            priority
          /></div>);
  return (
    <div
      style={{
        scrollBehavior: "smooth",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
      }}>
      <div className='bg-[#090e1a]  overflow-hidden  box-content  relative  h-[900px] '>
        <div>
        <Header
              className='select-none'
              herfFacebook='https://www.facebook.com/divzoon'
              herfInsta='https://www.instagram.com/divzoon/'
              herfTwitter='https://twitter.com/divzoon'
              HerfDash='#'
              Herfabout='/ar/about'
              HerfContact='/ar/Contact'
              HerfService='/ar/Services'
              herflogoLink={"/ar"}
              herflogo='/ico/1.png'
              imgFlagArabic='/Images/flags/Egypt.png'
              imgFlagEnglish='/Images/flags/Usa.png'
              enUrl={`${ router.pathname.replace('ar','')}`}
              arUrl={`${  router.pathname}`}
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
            <HeaderC
              MainPTexe="Next-Gen Design Prototyping Beside Professional Excellence ,For any idea the inception of development is always rooted in risk and uncertainty. We are armed with strong prototyping principles and processes that will push you with confidence for your next big leap.
              "
              MainText={[
               <span key='coloredText' className=' header text-red-400'>
                Lower Your Risk
              </span>,

                " With Design Prototyping",
 <span key="blank" >{" "}</span>
              
              ]}
              ActionButton=' Get Started'
              action='/Contact'
              ActionButton2='Other Services'
              action2='/Services'
              svg={reactSVG}
            />{" "}
          </motion.div>
        </div>
      </div>
      <div className='relative h-6 sm:h-9  bglol  backdrop-blur-2xl  '></div>
    </div>
  );
}

export default UiUXDesign;
