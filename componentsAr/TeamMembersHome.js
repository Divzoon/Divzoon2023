import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';

function TeamMembersHome() {

  const employees=[
    ( <div key="s" className='flex flex-col items-center justify-center col-span-1'>
    <div className='hover:scale-105  duration-300  relative '>
      <div className='absolute z-10 border-0 hover:scale-105 sm:hover:scale-110 duration-300 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-red-200' />
      <Image
        className='relative z-20 w-full rounded-full'
        height='200'
        width='200'
        src='/ava/3.png'
        alt='avatar'
        placeholder='blur'
        blurDataURL={`/_next/image?url=/ava/3.png&w=16&q=1`}
      />
    </div>
    <div className='mt-3 space-y-2 text-center'>
      <div className='space-y-1 text-lg font-medium leading-6'>
        <h3>إسراء عفيفي</h3>
        <p  style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='font-extralight text-xl antialiased text-gray-500'>مطور فلاتر</p>
      </div>
    </div>
  </div>),
    (
      <div  key="s1" className='flex flex-col items-center justify-center col-span-1'>
        <div className='hover:scale-105 duration-500  relative '>
          <div className='absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-100' />
          <Image
            className='relative  z-20 w-full rounded-full'
            height='200'
            width='200'
            src='/ava/2.png'
            alt='avatar'
            placeholder='blur'
            blurDataURL={`/_next/image?url=/ava/2.png&w=16&q=1`}
          />
        </div>
        <div className='mt-3 space-y-2 text-center'>
          <div className='space-y-1 text-lg font-medium leading-6'>
            <h3>حمدي سعد</h3>
            <p style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='  text-gray-500  font-extralight text-xl antialiased'>
          مطور واجهات أمامية خبير          </p>
          </div>
        </div>
      </div>
      ),
      (
        <div  key="s2" className='flex flex-col items-center border-0 justify-center col-span-1'>
        <div className=' hover:scale-105 border-0 duration-300   relative '>
          <div className='absolute  z-10 w-full h-full hover:scale-105 sm:hover:scale-110 duration-300 -mt-5 -ml-5 rounded-full rounded-tr-none bg-yellow-100' />
          <Image
            className='relative z-20 w-full  rounded-full'
            height='200'
            width='200'
            src='/ava/1.png'
            alt='avatar'
            placeholder='blur'
            blurDataURL={`/_next/image?url=/ava/1.png&w=16&q=1`}
          />
        </div>
        <div className='mt-3 space-y-2 text-center'>
          <div className='space-y-1 text-lg font-medium leading-6'>
            <h3>مصطفي حسن</h3>
            <p style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='text-gray-500 font-extralight text-xl antialiased'>مطور أندرويد </p>
          </div>
        </div>
      </div>
      ),
      (
        <div  key="s3" className='flex flex-col items-center justify-center col-span-1'>
        <div className='hover:scale-105 duration-500  relative '>
          <div className='absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-100' />
          <Image
            className='relative z-20 w-full rounded-full'
            height='200'
            width='200'
            src='/ava/4.png'
            alt='avatar'
            placeholder='blur'
            blurDataURL={`/_next/image?url=/ava/4.png&w=16&q=1`}
          />
        </div>
        <div className='mt-3 space-y-2 text-center'>
          <div className='space-y-1 text-lg font-medium leading-6'>
            <h3>توني مصباح</h3>
            <p style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='text-gray-500 font-extralight text-xl antialiased'>
            مصمم جرافيك و نماذج 3D
            </p>
          </div>
        </div>
      </div>
      ),
      (
        <div  key="s12" className='flex flex-col items-center justify-center col-span-1'>
        <div className='hover:scale-105 duration-500  relative '>
          <div className='absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-400' />
          <Image
            className='relative z-20 w-full rounded-full'
            height='200'
            width='200'
            src='/ava/10.png'
            alt='avatar'
            placeholder='blur'
            blurDataURL={`/_next/image?url=/ava/10.png&w=16&q=1`}
          />
        </div>
        <div className='mt-3 space-y-2 text-center'>
          <div className='space-y-1 text-lg font-medium leading-6'>
            <h3>ندى احمد</h3>
            <p style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='text-gray-500  font-extralight text-xl antialiased'>
              تسويق الكتروني
            </p>
          </div>
        </div>
      </div>
      
      ),
      (
        <div  key="s4" className='flex flex-col items-center justify-center col-span-1'>
        <div className='hover:scale-105 duration-500  relative '>
          <div className='absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-indigo-200' />
          <Image
            className='relative z-20 w-full rounded-full'
            height='200'
            width='200'
            src='/ava/5.png'
            alt='avatar'
            placeholder='blur'
            blurDataURL={`/_next/image?url=/ava/5.png&w=16&q=1`}
          />
        </div>
        <div className='mt-3 space-y-2 text-center'>
          <div className='space-y-1 text-lg font-medium leading-6'>
            <h3> دينا الأموري</h3>
            <p style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='text-gray-500 font-extralight text-xl antialiased'>
              مصممة واجهات أمامية
            </p>
          </div>
        </div>
      </div>
      
      ),
      (
        <div  key="s5" className='flex flex-col items-center justify-center col-span-1'>
              <div className='hover:scale-105 duration-500  relative '>
                <div className='absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-100' />
                <Image
                  className='relative z-20 w-full rounded-full'
                  height='200'
                  width='200'
                  src='/ava/6.png'
                  alt='avatar'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=/ava/6.png&w=16&q=1`}
                />
              </div>
              <div className='mt-3 space-y-2 text-center'>
                <div className='space-y-1 text-lg font-medium leading-6'>
                  <h3>حاتم علي</h3>
                  <p style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='text-gray-500 font-extralight text-xl antialiased'>مطور فلاتر</p>
                </div>
              </div>
            </div>
           
      ),
      (
        <div  key="s6" className=' flex flex-col items-center justify-center col-span-1'>
              <div className=' hover:scale-105 duration-500 relative '>
                <div className=' absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-100' />
                <Image
                  className='relative z-20 w-full rounded-full'
                  height='200'
                  width='200'
                  src='/ava/7.png'
                  alt='avatar'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=/ava/7.png&w=16&q=1`}
                />
              </div>
              <div className='mt-3 space-y-2 text-center'>
                <div className='space-y-1 text-lg font-medium leading-6'>
                  <h3>جوناثان ريتشاردز</h3>
                  <p style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='text-gray-500 font-extralight text-xl antialiased'>مدير المبيعات</p>
                </div>
              </div>
            </div>
      ),
      (
        <div  key="s13" className='flex flex-col items-center justify-center col-span-1'>
        <div className='hover:scale-105 duration-500  relative '>
          <div className='absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-indigo-400' />
          <Image
            className='relative z-20 w-full rounded-full'
            height='200'
            width='200'
            src='/ava/11.png'
            alt='avatar'
            placeholder='blur'
            blurDataURL={`/_next/image?url=/ava/11.png&w=16&q=1`}
          />
        </div>
        <div className='mt-3 space-y-2 text-center'>
          <div className='space-y-1 text-lg font-medium leading-6'>
            <h3>محمود ابو المجد</h3>
            <p  style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='text-gray-500  font-extralight text-xl antialiased'>
            مهندس حوسبة سحابية 
            </p>
          </div>
        </div>
      </div>
      
      ),
      (
        
        <div  key="s8" className=' flex flex-col items-center justify-center col-span-1'>
              <div className=' hover:scale-105 duration-500 relative '>
                <div className=' absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-emerald-200' />
                <Image
                  className='relative z-20 w-full rounded-full'
                  height='200'
                  width='200'
                  src='/ava/9.png'
                  alt='avatar'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=/ava/7.png&w=16&q=1`}
                />
              </div>
              <div className='mt-3 space-y-2 text-center'>
                <div className='space-y-1 text-lg font-medium leading-6'>
                  <h3>مصطفي محمد</h3>
                  <p style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }} className='text-gray-500 font-extralight text-xl antialiased'>مطور أندرويد خبير</p>
                </div>
              </div>
            </div>
      ),
      (
        <div  key="s7" className='flex flex-col items-center justify-center col-span-1'>
          <div className='hover:scale-105 duration-500  relative '>
            <div className='absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-gray-700 ' />
            <Image
              className='relative  z-20 w-full rounded-full'
              height='200'
              width='200'
              src='/ava/8.png'
              alt='avatar'
              placeholder='blur'
              blurDataURL={`/_next/image?url=/ava/2.png&w=16&q=1`}
            />
          </div>
          <div className='mt-3 space-y-2 text-center'>
            <div className='space-y-1 text-lg font-medium leading-6'>
              <h3>إسلام محمد</h3>
              <p style={{ fontFamily: "elwatanP", width: "200" ,
                letterSpacing: "0.2px"
              }} className='  text-gray-500  font-extralight text-xl antialiased'>
            مهندس الأمن السيبراني  </p>
            </div>
          </div>
        </div>
        ),
    
  ]
  const [empState, setEmpState] = useState( employees);
 
  function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  return (
    <div  dir="rtl"
      style={{
        fontFamily: "SfproText",
        width: "400",
        fontSize: "1.5rem",
        fontWeight: "bold",
        border: "0px",

        backgroundColor: "#0b1121",
        boxSizing: "border-box",
      }}>
      <section className='relative pt-20 overflow-hidden  text-gray-200'>
        <span className='absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60'>
          <span className='container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full  md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-gray-700/10' />
        </span>

        <span className='absolute bottom-0 left-0'> </span>
        <div className=' relative sm:px-16 px-8 mx-auto max-w-7xl'>
          <p className='subpixel-antialiased select-none font-medium tracking-wide text-red-500 uppercase'>
            فريقنا من الرائعين
          </p>
          <h2
 style={{ fontFamily: "SfproText", width: "600" }}
            className='subpixel-antialiased flex relative select-none max-w-lg pb-20 mt-5  mb-10 text-4xl font-semibold leading-tight lg:text-5xl'>
 <span className="ml-12">          مجموعة من المميزين <br />
        مع كل 
        <span className="header"> نقرة </span> <span> </span>
      
        </span>
        <span className="text-red-500"> </span>
      <div onClick={()=>{
       
       setEmpState( randomArrayShuffle(employees).slice(0,7))}
      } className=" cursor-pointer">
      <svg  className="mt-3 spinner spinnerHW" fill="#f56565" hight="40px" width="40px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.533 489.533" style={{enableBackground: 'new 0 0 489.533 489.533'}} xmlSpace="preserve">
        <g>
          <path  d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9
		l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6
		c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6
		C49.575,418.961,150.875,501.261,268.175,488.161z" />
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </svg>
      </div>
         </h2>
          <div className='grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4'>



{empState.slice(0,7)}
          
           
          
            
            <Link href='/Career' passHref>
              <div className=' cursor-pointer flex flex-col items-center justify-center col-span-1'>
                <div className=' hover:scale-105 duration-500 relative '>
                  <div className=' absolute border-0 hover:scale-105 sm:hover:scale-110 duration-300 z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-100' />
                  <Image
                    className='relative z-20 w-full rounded-full'
                    height='200'
                    width='200'
                    src='/ava/plus.png'
                    alt='avatar'
                    placeholder='blur'
                    blurDataURL={`/_next/image?url=/ava/plus.png&w=16&q=1`}
                  />
                </div>
                <div className='mt-3 space-y-2 text-center'>
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h3 className='text-red-400'>انضم إلينا</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamMembersHome;
