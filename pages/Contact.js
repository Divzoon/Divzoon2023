import Header from "../components/Header";
import { useRouter } from "next/router";
import Image from "next/image";
import imagesHeader from "../public/test.png";
import imagescontact from "../public/savetime.png";
import { motion} from "framer-motion";

import { useState, React } from "react";
function Contact() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [nameRing, setnameRing] = useState(false);
  const [emailRing, setemailRing] = useState(false);
  const [messageRing, setmessageRing] = useState(false);


  return (
    <div
>
      <div className=' bg-[#0b1121]    pb-12'>
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
          <div       style={{
        scrollBehavior: "smooth",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1.5",
        color: "#212529",
        textAlign: "center",

        outline: "0",
        verticalAlign: "baseline",
        position: "relative",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }} className=' max-w-7xl p-2 relative pt-20  m-auto  justify-center'>
            <div className=' md:grid md:grid-cols-2 w-full  rounded-md bg-gray-700/20 max-h-[320px] align-middle text-center items-center  '>
              <div className='relative pt-3 '>
                <h1
                  style={{ fontFamily: "Poppins-Bold", width: "400" }}
                  className='px-1 text-center text-white md:text-3xl lg:text-4xl text-xl font-bold'>
                  <span key='coloredText1' className=' select-none '>
                    Do You Have Any
                  </span>
                  <span key='coloredText2' className=' select-none '>
                    {" "}
                  </span>
                  <span
                    key='coloredText3'
                    className=' select-none  header text-red-400'>
                    Questions ?
                  </span>
                  <p
                    style={{ fontFamily: "Poppins-Bold", width: "400" }}
                    className=' ml-2 hidden md:block lg:text-xl  text-gray-400'>
                    Send us your queries and we will get back to you within 24
                    hours with all the help you need.
                  </p>
                </h1>
                <a
                  href='https://www.linkedin.com/company/divzoon'
                  style={{ fontFamily: "Poppins-Bold" }}
                  className='hover:underline active:scale-95   select-none ml-2 hidden md:block lg:text-xl  text-gray-500'>
                  Follow us on LinkedIn
                </a>
              </div>
              <div className='h-[150px] md:h-[240px] hover:scale-105 duration-1000  relative'>
                <Image
                  alt='Header'
                  layout='fill'
                  objectFit='contain'
                  src={imagesHeader}
                  priority
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=${imagesHeader}&w=16&q=1`}
                />
              </div>
            </div>

            <div className=' w-full px-2 pt-2 '>
              <div className='relative   rounded-md bg-red-500/20 '>
                <h1
                  style={{ fontFamily: "Poppins-Bold", width: "400" }}
                  className='text-center text-white text-3xl font-bold'>
                  <a href='mailto:support@divzoon.com'>
                    {" "}
                    <h1
                      key='coloredText4'
                      className='select-none cursor-pointer text-lg '>
                      <span className='text-gray-200'>
                        {" "}
                        You can contact us on :{"  "}
                      </span>{" "}
                      <span className='header  '>
                        support@divzoon.com
                      </span>
                    </h1>
                  </a>
                </h1>
              </div>
            </div>
            <div className=' w-full  mb-12 '>
              <div className='relative text-gray-200  min-h-[200px] rounded-md  '>
                <div className='grid md:grid-cols-2 mt-3   items-center justify-center'>
                  <div className='md:block hidden'>
                    <div className='h-[150px] hover:scale-105 duration-1000 md:h-[240px] mb-6 relative'>
                      <Image
                        alt='Header'
                        layout='fill'
                        objectFit='contain'
                        src={imagescontact}
                        placeholder='blur'
                        blurDataURL={`/_next/image?url=${imagescontact}&w=16&q=1`}
                      />
                    </div>
                    <div className='relative pt-3 '>
                      <h1
                        style={{ fontFamily: "Poppins-Bold", width: "400" }}
                        className='px-1 text-center text-white md:text-2xl lg:text-3xl text-lg font-bold'>
                        <span key='coloredText5' className=' select-none '>
                          Changing The Way People Do
                        </span>
                        <span key='coloredText6' className=' select-none '>
                          {" "}
                        </span>
                        <span
                          key='coloredText7'
                          className=' select-none  header text-red-400'>
                          Business.
                        </span>
                        <p
                          style={{ fontFamily: "Poppins-Bold", width: "400" }}
                          className='  ml-2 hidden md:block lg:text-xl  text-gray-400'>
                          Learn how to engage with your visitors and teach them
                          about your mission. We &apos; re revolutionizing the
                          way customers and businesses interact.
                        </p>
                      </h1>
                    </div>
                  </div>
                  <div>
                    <form
                    action="https://formsubmit.co/support@divzoon.com" 


                      className='flex  flex-col my-12  items-center justify-center'
                      method='POST'
                  >
                      <h4
                        style={{ fontFamily: "Poppins-Bold", width: "400" }}
                        className='px-1 pb-2 text-gray-400  text-center  md:text-xl lg:text-2xl text-lg font-bold'>
                        Simple Information To Get Started😊
                      </h4>
                      <div
                        style={{ fontFamily: "Poppins-Bold", width: "400" }}
                        className='flex flex-col lg:w-[400px] min-w-[300px] text-white rounded-md bg-gray-800/50 p-2 items-center justify-center'>
                        <div className='w-full'>
                          <p className='text-left ml-1 my-1'>Name </p>
                          <input
                            onClick={() => {
                              setnameRing(!nameRing);
                              setemailRing(false);
                              setmessageRing(false);
                            }}
                           
                            className={`
                            w-full  rounded-md h-8 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20
                            ${nameRing ? "ring-2 duration-100" : ""}`}
                            label='Name'
                            name='name'
                            type='text'
                            placeholder='Full Name'
                            maxLength='20'
                            required
                          />
                        </div>

                        <div className='w-full '>
                          <p className='text-left ml-1 my-1'>Email </p>

                          <input
                            onClick={() => {
                              setemailRing(!emailRing);
                              setnameRing(false);
                              setmessageRing(false);
                            }}
                          
                            className={`
                          w-full  rounded-md h-8 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20
                          ${emailRing ? "ring-2 duration-100" : ""}`}
                            label='Email'
                            name='email'
                            type='email'
                            maxLength='100'
                            placeholder='Email'
                            required
                          />
                        </div>
                        <div className=' w-full m-1 mt-2 select-none rounded-md text-center  px-2 gap-1 bg-gray-700/20'>
                          {" "}
                          <p className='my-2 font-semibold'>You Need :</p>
                          <div className='flex md:flex-none flex-wrap w-full relative mb-2 text-sm rounded-md  px-2 gap-1 bg-gray-700/20'>
                            <div className='hover:bg-gray-400/20  cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                              {" "}
                              <label
                                className='cursor-pointer font-semibold'
                                htmlFor='web'>
                                <input
                                  className='mt-[5px]'
                                  type='radio'
                                  name='Need'
                                  id='web'
                                  value='website'
                                
                                  required
                                />{" "}
                                Web development
                              </label>
                            </div>
                            <div className='hover:bg-gray-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                              {" "}
                              <label
                                className='cursor-pointer font-semibold'
                                htmlFor='app'>
                                <input
                                  className='mt-[5px]'
                                  type='radio'
                                  id='app'
                                  value='application'
                                  name='Need'
                               
                                />{" "}
                                App development
                              </label>
                            </div>

                            <div className='hover:bg-gray-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                              {" "}
                              <label
                                className='cursor-pointer font-semibold'
                                htmlFor='Hire'>
                                {" "}
                                <input
                                  className='mt-[5px]'
                                  type='radio'
                                  id='Hire'
                                  name='Need'
                                  value='Hire Dev'
                                
                                />{" "}
                                Hire Developers
                              </label>
                            </div>

                            <div className='hover:bg-gray-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                              {" "}
                              <label
                                className='cursor-pointer font-semibold'
                                htmlFor='other'>
                                {" "}
                                <input
                                  className='mt-[5px]'
                                  type='radio'
                                  id='other'
                                  name='Need'
                                  value='other'
                                  
                                />{" "}
                                Other{" "}
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className='w-full overflow-hidden relative'>
                          {" "}
                          <textarea
                            onClick={() => {
                              setmessageRing(!messageRing);
                              setnameRing(false);
                              setemailRing(false);
                            }}
                            className={`
                          w-full mt-2 z-50 rounded-md min-h-32 h-32  overflow-hidden duration-300 hover:overflow-y-scroll max-h-64 px-2 py-1 text-gray-400 bg-gray-700/20
                          ${messageRing ? "ring-2 duration-100" : ""}`}
                            label='Message'
                            name='message'
                            type='text'
                            rowws='5'
                            onChange={(e) =>  { 
                               setCount(e.target.value.length)
                            }}

                            maxLength='150'
                            placeholder='Message'
                          />
                          <div className='select-none hover:bg-gray-700 rounded p-1 duration-500 absolute text-gray-300/50 text-xs z-30 bottom-5 right-2'>
                            {count}/150
                          </div>
                        </div>

                        <button
                          className='w-full max-w-[200px] m-2 duration-300 select-none bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-400/90 focus:outline-none focus:shadow-outline'
                          type='submit'>
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
