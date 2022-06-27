import React from "react";
import Image from "next/image";

function Sec3Process(props) {
  //center a div

  return (
    <div style={{ fontFamily: "Poppins-Bold", width: "400" }} className='mx-auto px-4   max-w-[1400px] min-h-[1300px] pb-20 flex flex-wrap  justify-center    text-gray-200 '>
      <h1  className='text-slate-200 select-none tracking-tight mb-11   font-extrabold text-4xl sm:text-4xl lg:text-5xl  text-center '>
        {props.MainText}
        <span className=' text-red-500  font-extrabold  text-5xl sm:text-5xl lg:text-6xl tracking-tighttext-center sm:text-left '>
          .
        </span>
      </h1>
      <div className='flex flex-col w-full'>
        <div  className='min-h-[400px] relative sm:grid md:grid-cols-2  '>
          <div className='md:mt-[20%] md:ml-[20%]'>
            <div  className='flex'>
              <div className=''>
                <span
                  style={{ filter: "drop-shadow(0px 0px 10px #1b1b7d)" }}
                  className=' hover:ring-2 duration-500 select-none bg-gray-700/40  text-lg w-10 h-10 flex items-center justify-center rounded-full mt-3 '>
                  1
                </span>
              </div>
              <h1 style={{ fontFamily: "Poppins-Bold", width: "400" }} className='text-3xl select-none pl-2 pt-[10px] font-semibold font-sans'>
                The Planning Phase
              </h1>
            </div>
            <div className='ml-12 -mt-3 text-gray-400'>
              <p style={{ fontFamily: "Poppins-Bold", width: "400" }}>
                We shape brands through exploration, applying in-depth research
                to challenge assumptions at every turn.
              </p>
            </div>
          </div>

          <div
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
            }}
            className='sm:mt-8 select-none p-5 max-w-[360px] mx-auto pt-3'>
            {" "}
            <Image
              className='relative  bounce-2 box2 '
              src={props.sec3Image}
              alt=' The Planning Phase'
              height='350'
              width='402'
              placeholder='blur'
              blurDataURL={`/_next/image?url=${props.sec2Image}&w=16&q=1`}
            />
          </div>
        </div>

        <div className='max-h-[400px] w-20 justify-end hidden md:block '>
          <div className='absolute select-none  right-[40%]'>
            <Image
              className='  '
              src={props.arrow}
              alt=' arrow'
              height='102'
              width='100'
              loading='eager'
            />
          </div>
        </div>
        {/*process 2 */}
        <div className='min-h-[400px] relative sm:grid md:grid-cols-2 '>
          <div className='md:mt-[20%] order-last  md:ml-[20%]'>
            <div className='flex'>
              <div className=''>
                <span
                  style={{ filter: "drop-shadow(0px 0px 10px #1b1b7d)" }}
                  className=' hover:ring-2 duration-500  select-none bg-gray-700/40  text-lg w-10 h-10 flex items-center justify-center rounded-full mt-3 '>
                  2
                </span>
              </div>
              <h1 style={{ fontFamily: "Poppins-Bold", width: "400" }} className='text-3xl select-none pl-2 pt-[10px] font-semibold font-sans'>
                The Designing Phase
              </h1>
            </div>
            <div className='ml-12 -mt-3 text-gray-400'>
              <p style={{ fontFamily: "Poppins-Bold", width: "400" }}>
                Our design approach is to simplify. We embrace the joy in
                creating something unique that is easy for end users.
              </p>
            </div>
          </div>
          <div
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
            }}
            className='sm:mt-8 select-none   p-5  max-w-[360px] mx-auto pt-3'>
            {" "}
            <Image
              className='relative bounce-2 box2 '
              src={props.sec3Image2}
              alt=' The Design Phase'
              height='380'
              width='442'
              placeholder='blur'
              blurDataURL={`/_next/image?url=${props.sec2Image}&w=16&q=1`}
            />
          </div>
        </div>

        <div className='max-h-[400px] w-20 justify-end hidden md:block '>
          <div className='absolute select-none  left-[40%]'>
            <Image
              className='  '
              src={props.arrowr}
              alt=' arrow'
              height='102'
              width='100'
              loading='eager'
            />
          </div>
        </div>
        {/*process 3 */}
        <div className='min-h-[200px] relative sm:grid md:grid-cols-2 '>
          <div className='md:mt-[20%] md:ml-[20%]'>
            <div className='flex'>
              <div className=''>
                <span
                  style={{ filter: "drop-shadow(0px 0px 10px #1b1b7d)" }}
                  className='hover:ring-2 duration-500  select-none bg-gray-700/40  text-lg w-10 h-10 flex items-center justify-center rounded-full mt-3 '>
                  3
                </span>
              </div>
              <h1 style={{ fontFamily: "Poppins-Bold", width: "400" }} className='text-3xl select-none pl-2 pt-[10px] font-semibold font-sans'>
                The Development Phase
              </h1>
            </div>
            <div className='ml-12 -mt-3 text-gray-400'>
              <p style={{ fontFamily: "Poppins-Bold", width: "400" }} s>
                Using modern technologies, we build with efficiency and skill,
                creating flexible and scalable business-driven solutions.
              </p>
            </div>
          </div>
          <div
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
            }}
            className='sm:mt-8  p-5 select-none  max-w-[360px] mx-auto  pt-3'>
            {" "}
            <Image
              className='relative bounce-2  box2 '
              src={props.sec3Image3}
              alt='   The Development Phase'
              height='380'
              width='442'
              placeholder='blur'
              blurDataURL={`/_next/image?url=${props.sec2Image}&w=16&q=1`}
            />
          </div>
        </div>

        <div className='max-h-[400px] w-20 justify-end hidden md:block '>
          <div className='absolute select-none  right-[40%]'>
            <Image
              className='  '
              src={props.arrow}
              alt=' arrow'
              height='102'
              width='100'
              loading='eager'
            />
          </div>
        </div>

        {/*process 4 */}
        <div className='min-h-[200px] relative sm:grid md:grid-cols-2 '>
          <div className='md:mt-[20%] order-last md:ml-[20%]'>
            <div className='flex'>
              <div className=''>
                <span
                  style={{ filter: "drop-shadow(0px 0px 10px #1b1b7d)" }}
                  className='hover:ring-2 duration-500  select-none bg-gray-700/40  text-lg w-10 h-10 flex items-center justify-center rounded-full mt-3 '>
                  4
                </span>
              </div>
              <h1 style={{ fontFamily: "Poppins-Bold", width: "400" }} className='text-3xl select-none pl-2 pt-[10px] font-semibold font-sans'>
                The Testing & Delivering Phase
              </h1>
            </div>
            <div className='ml-12 -mt-3 text-gray-400'>
              <p style={{ fontFamily: "Poppins-Bold", width: "400" }}>
                We deliver your project just in time We take an agile approach
                to both our work and our practice.
              </p>
            </div>
          </div>
          <div
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
            }}
            className='sm:mt-8 select-none  p-5 max-w-[360px] mx-auto  pt-3'>
            {" "}
            <Image
              className='relative bounce-2 box2 '
              src={props.sec3Image4}
              alt=' The Planning Phase'
              height='380'
              width='442'
              placeholder='blur'
              blurDataURL={`/_next/image?url=${props.sec2Image}&w=16&q=1`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec3Process;
