import Header from "../../componentsAr/Header";
import Sec1Header from "../../componentsAr/Sec1Header";
import Whatwedosec from "../../componentsAr/Whatwedosec";
import Sec2Summary from "../../componentsAr/Sec2Summary";
import Sec3Process from "../../componentsAr/Sec3Process";
import TechStack from "../../componentsAr/TechStack";
import TeamMembersHome from "../../componentsAr/TeamMembersHome";
import { useRouter } from "next/router";

import { motion, useViewportScroll, useTransform } from "framer-motion";

import CallToAction from "../../componentsAr/CallToAction";

export default function Home() {
  const router = useRouter();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  return (
    <div
      style={{
        scrollBehavior: "smooth",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
      }}
      className='  box-content  overflow-hidden relative  '>
      <div className='    bg-[#090e1a]   '>
        <div>
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
            <Header
              className='select-none'
              herfFacebook='https://www.facebook.com/divzoon'
              herfInsta='https://www.instagram.com/divzoon/'
              herfTwitter='https://twitter.com/divzoon'
              HerfDash='#'
              Herfabout='/ar/about'
              HerfContact='/ar/Contact'
              HerfService='/ar/Services'
              herflogoLink={"/ar/"}
              herflogo='/ico/1.png'
              imgFlagArabic='/Images/flags/Egypt.png'
              imgFlagEnglish='/Images/flags/Usa.png'
              enUrl={`${ router.pathname.replace('ar','')}`}
              arUrl={`${  router.pathname}`}
              />
          </motion.div>
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
            <Sec1Header
         
              MainPTexe='.نقدم خدمات تطوير تطبيقات الويب والجوال للشركات العالمية'
              MainText={[
                "شريكك ",
                <span key='coloredText' className=' header text-red-400'>
                  التقني
                </span>,
                " الموثوق به",
              ]}
              ActionButton='ابدأ الان'
              action='/ar/Contact'
              ActionButton2='خدماتنا'
              action2='/ar/Services'
              S1='/ico/S1Invert.png'
            />
          </motion.div>
        </div>
        <div className='z-30 relative'>
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
                  delay: 0.4,
                },
              },
            }}>
            <div className=' mx-2 flex text-right justify-center'>
              <motion.div style={{ scale }}>
                <Whatwedosec
                  hrefWebdev='/ar/Services/Webdevelopment'
                  hrefUiux='/ar/Services/UiUXDesign'
                  hrefAppdev='/ar/Services/Appdevelopment'
                  hrefHiredev='/ar/Hire'
                />
                <motion.div />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='relative h-6 sm:h-9  bglol  backdrop-blur-2xl  '></div>

      <div style={{ backgroundColor: "#0b1121", boxSizing: "border-box" }}>
        <div className='pt-24'>
          <Sec3Process
            MainText={[
              "نقوم بتبسيط ",
              <span key='coloredText' className=' header text-red-400'>
                عملية تطوير
              </span>,
              "  البرمجيات",
            ]}
            sec3Image='/Images/process1.png'
            sec3Image2='/Images/process2.png'
            sec3Image3='/Images/process3.png'
            sec3Image4='/Images/process4.png'
            arrow='/Images/arrow.png'
            arrowr='/Images/arrowr.png'
          />
        </div>
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
          <div
            style={{
              backgroundColor: "#090e1a",
              boxSizing: "border-box",
              filter: "drop-shadow(0px 0px 10px #121245)",
            }}>
            <Sec2Summary
MainPTexe="تتيح لك ديف زوون بتوظيف اي عدد من المطورين والمصممين للعمل علي مشاريعك بشكل دوام كامل او بالساعات , حيث تضمن لك ديف زوون الكفائة والالتزام  وتتيح لك هذا كله بأسعار تنافسية "
              MainText={[
                "وظف أفضل  ",
                <span key='coloredText' className=' header text-red-400'>
                  مطوري
                </span>,
                "  تطبيقات الويب والجوال",

              ]}
              sec2Image='/Images/devs.png'
              ActionButton='وظف أفضل المطورين'
              action='/ar/Hire'
            />
          </div>
        </motion.div>
      </div>
      {/*Technologies we work with  */}
      <div className='relative h-6 sm:h-9  bglol  backdrop-blur-2xl  '></div>
      <div style={{ backgroundColor: "#0b1121", boxSizing: "border-box" }}>
        <TeamMembersHome />
        <div className='pt-24 w-auto  relative'>
          <TechStack
            MainText={[
              <span key='coloredText' className=' header text-red-400'>
                التكنولوجيا 
              </span>,
              " التي نستعملها ",
            ]}
          />
        </div>
        <CallToAction />
      </div>
    </div>
  );
}
