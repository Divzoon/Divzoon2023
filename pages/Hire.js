import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import HeaderC from "../components/HeaderC";
import { motion } from "framer-motion";
import ReactSVG from "../styles/svgs/HireDev";
function Hire() {
   const router = useRouter();
  const reactSVG = <ReactSVG />;
  return (
    <div
      style={{
        scrollBehavior: "smooth",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
      }}>
      <div className=' bg-[#090e1a]  overflow-hidden  box-content  relative  h-[900px] '>
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
              MainPTexe='Websites can be multifaceted enough to deliver million different services today. We build fully custom websites that are meticulously attuned to serve your business goals. From tactics of powerful brand explorations to appealing content, our website’s prime attention is given to user experience.

            '
              MainText={[


                " Hire ",
                <span key='coloredText' className=' header text-red-400'>
                professional
              </span>,
                <br key='coloredText' />,
                
                " Developers ",
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

export default Hire;
