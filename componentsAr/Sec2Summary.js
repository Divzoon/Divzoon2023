import Image from "next/image";
import React from "react";
import Link from "next/link";

function Sec2Summary(props) {
  return (
    <div style={{ fontFamily: "SfproText", width: "600" }}  className='  max-w-[1400px]  min-h-[600px] max-h-[680px] mx-auto flex  text-red-700 '>
     <div className='pt-32  hover:scale-95 duration-1000  md:pt-24 pl-10 text-white relative hidden lg:block'>
        <Image
          className='relative  bounce-2 box2 '
          src={props.sec2Image}
          alt='Developers Image'
          height='530'
          width='730'
          placeholder='blur'
          blurDataURL={`/_next/image?url=${props.sec2Image}&w=16&q=1`}
        />
      </div>
      <div className='sm:mr-7 m-auto  align-center justify-center content_bgSec2 text-center sm:text-right max-w-3xl mx-auto pt-16 sm:pt-32  lg:pt-24'>

        <h1 className='text-slate-200 tracking-tight select-none  font-extrabold text-4xl sm:text-4xl lg:text-5xl  text-center lg:text-right '>

          {props.MainText}
         
        
       
        </h1>
        <p
            style={{ fontFamily: "SfproText", width: "200" ,
          letterSpacing: "0.2px"
        }}
          className='mt-6 text-gray-400 font-extralight text-xl antialiased  mx-2 sm:mx-0 tracking-tight  text-center sm:text-right max-w-3xl  '>
          {props.MainPTexe}<span> </span><span>. </span>
          <Link href={"/ar/Hire"}  className="hover:underline underline-offset-1 select-none" passHref>راجع الشروط والأحكام  </Link>
        </p>
        <div className='mt-6  mx-12 sm:mx-0  sm:mt-10 sm:flex  justify-center sm:space-x-6 text-sm'>
          <a
            className=' box-decoration-slice shadow-lg hover:shadow-red-500/50    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-100 focus:ring-offset-slate-800  font-semibold h-12 px-6 rounded-lg w-full flex items-center text-white justify-center sm:w-auto bg-red-500  hover:bg-red-400'
            href={props.action}
            passHref>
            {props.ActionButton}
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Sec2Summary;
