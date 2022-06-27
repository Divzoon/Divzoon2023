import Header from "../components/Header";
import Sec1Header from "../components/Sec1Header";
import Whatwedosec from "../components/Whatwedosec";
import Sec2Summary from "../components/Sec2Summary";
import Sec3Process from "../components/Sec3Process";
import TechStack from "../components/TechStack";
import TeamMembersHome from "../components/TeamMembersHome";

import { motion, useViewportScroll, useTransform } from "framer-motion";

import { useRouter } from "next/router";
import CallToAction from "../components/CallToAction";

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
              MainPTexe='We deliver web and mobile app development services to global businesses.'
              MainText={[
                "Your ",
                <span key='coloredText' className=' header text-red-400'>
                  Trusted
                </span>,
                " Development Partner",
              ]}
              ActionButton='Get Started'
              action='/Contact'
              ActionButton2='Our Services'
              action2='/Services'
              S1='/ico/S1.png'
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
            <div className=' mx-2 flex justify-center'>
              <motion.div style={{ scale }}>
                <Whatwedosec
                  hrefWebdev='/Services/Webdevelopment'
                  hrefUiux='Services/UiUXDesign'
                  hrefAppdev='/Services/Appdevelopment'
                  hrefHiredev='Hire'
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
              MainPTexe='Divzoon allows you to hire any number of developers and designers to work on your projects on a full-time or hourly basis, as Divzoon guarantees you efficiency and commitment and provides you with all this at competitive prices.'
              MainText={[
                "Hire the Best ",
                <span key='coloredText' className=' header text-red-400'>
                  Web and Mobile
                </span>,
                "  App Developers",
              ]}
              sec2Image='/Images/devs.png'
              ActionButton='Hire a Top Developer'
              action='/Hire'
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
                Technologies
              </span>,
              " We Work With ",
            ]}
          />
        </div>
        <CallToAction />
      </div>
    </div>
  );
}
