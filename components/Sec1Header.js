import { React } from "react";
import Image from "next/image";
import {
  Input,
  Switch,
  Loading,
  Pagination,
  Tooltip,
  Button,
} from "@nextui-org/react";


function Sec1Header(props) {
  return (
    <div     style={{ fontFamily: "Poppins, sans-serif" }} className={" max-w-[1400px] justify-center mx-auto flex pt-12 re text-gray-300 "}>
      <div className='relative  '>
        <div className='sm:ml-7  text-center  md:text-left max-w-3xl mx-auto pt-32 sm:pt-60 md:pt-96 lg:pt-60'>
          <h1 className='select-none  text-slate-200 tracking-tight   font-extrabold text-4xl sm:text-5xl lg:text-6xl  text-center lg:text-left '>
            {props.MainText}
            <span className=' text-red-500  font-extrabold  text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center  lg:text-left '>
              .
            </span>
          </h1>
          <p style={{ fontFamily: "Poppins-Bold", width: "400" }} className='mt-6 font-medium  tracking-tight text-md sm:text-xl  text-center  lg:text-left  max-w-3xl mx-7 text-slate-400'>
            {props.MainPTexe}
          </p>

          <div className='mt-6  mx-12 sm:mx-0   sm:mt-10  sm:flex justify-center  md:justify-center lg:justify-start  sm:space-x-6 text-sm'>
            <a
              className='select-none max-w-sm font-bold box-decoration-slice shadow-lg hover:shadow-red-500/50     focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-100 focus:ring-offset-slate-800   h-12 px-6 rounded-lg w-full flex items-center text-white justify-center sm:w-auto bg-red-500  hover:bg-red-400'
              href={props.action}
              passHref>
              {props.ActionButton}
            </a>
            <a
              className='select-none font-bold max-w-sm  bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12 px-3  sm:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 '
              href={props.action2}
              passHref>
              {props.ActionButton2}
            </a>
          </div>
        </div>
      </div>
      <div className='pt-32 md:pt-20 pl-10 text-white relative hidden lg:block'>
        <div className='bounce-2 box2  absolute z-20 opacity-60 rotate-3'>
          <Pagination total={20} initialPage={1} />
        </div>
        <div className='mt-36 z-20  relative'>
          <Tooltip
           aria-hidden="true"
            content={"Thank you 😊 "}
            className='bounce-2 box absolute'
            rounded
            color='primary'>
            <Button auto flat   aria-hidden="true">
              Hover me
            </Button>
          </Tooltip>
        </div>        <div className='absolute -mt-20 '>
          <Loading className=' bounce-2 box3 ' size='md' />
        </div>{" "}
<div className='h-[530px] width-[630px]  '>
<Image
          className='relative  bounce-2 box2  '
          src={props.S1}
          alt='Header Image'
objectFit='contain'
layout='fill'
          placeholder='blur'
          blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
          
          priority
        />

<div className='relative  pt-60 ml-96 pl-32 rotate-12'>
          <Switch
           aria-hidden="true"
            shadow
            color='primary'
            className=' bounce-2 box4 '
            checked={true}
            size='xl'

          />{" "}
        </div>{" "}
        <div className='absolute  rotate-3'>
          <Input
            aria-label='Divzoon'
            shadow
            placeholder='Write "I love Divzoon" ..'
            className='  bounce-2 box3 '
            status='success'
          />
        </div>

</div>

       
      </div>
    </div>
  );
}

export default Sec1Header;
