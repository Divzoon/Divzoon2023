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
    <div className={" max-w-[1400px] justify-center  mx-auto flex pt-12 re text-gray-300 "}>
        <div className='pt-32 md:pt-20 pl-10 text-white relative hidden lg:block'>
        <div className='bounce-2 box2  absolute z-20 opacity-60 rotate-3'>
          <Pagination total={20} initialPage={1} />
        </div>
        <div className='mt-36 z-20  relative'>
          <Tooltip
            content={"حبيبي ي باشا 😊 "}
            className='bounce-2 box absolute'
            rounded
            color='primary'>
            <Button style={{ fontFamily: "SfproText", width: "600" }}  auto flat>
              دوس هنا
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
            shadow
            color='primary'
            className=' bounce-2 box4 '
            checked={true}
            size='xl'

          />{" "}
        </div>{" "}
        <div className='absolute  rotate-3'>
          <Input
         style={{ fontFamily: "SfproText", width: "600" }} 
            aria-label='Divzoon'
            shadow
            
            placeholder=' "..اكتب "اهلا ديف زوون'
            className='  bounce-2 box3 '
            status='success'
          />
        </div>

</div>

       
      </div>
      <div  style={{ fontFamily: "SfproText", width: "600" }} className='relative overflow-hidden '>
        <div className='sm:mr-7  text-center sm:text-right max-w-3xl mx-auto pt-32 sm:pt-60 md:pt-96 lg:pt-60'>
          <h1 className='select-none text-slate-200 tracking-tight   font-extrabold text-4xl sm:text-5xl lg:text-6xl  text-center sm:text-right '>
 
            {props.MainText}
          </h1>
          <p     style={{ fontFamily: "elwatanP", width: "400" }} className=' mt-6 font-light   tracking-tight text-xl sm:text-xl  text-center sm:text-right max-w-3xl mx-7 text-slate-400'>
            {props.MainPTexe}
          </p>

          <div className='mt-6  mx-12 sm:mx-0  sm:mt-10 sm:flex  justify-end sm:space-x-6 text-sm'>
            <a
              className='select-none font-extrabold box-decoration-slice shadow-lg hover:shadow-red-500/50    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-100 focus:ring-offset-slate-800   h-12 px-6 rounded-lg w-full flex items-center text-white justify-center sm:w-auto bg-red-500  hover:bg-red-400'
              href={props.action}
              passHref>
              {props.ActionButton}
            </a>
            <a
              className='select-none font-extrabold bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12 px-3  sm:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 '
              href={props.action2}
              passHref>
              {props.ActionButton2}
            </a>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Sec1Header;
