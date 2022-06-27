import { React } from "react";
import {
  Input,
  Switch,
  Loading,
  Pagination,
  Tooltip,
  Button,
} from "@nextui-org/react";

function HeaderC(props) {
  return (
    <div className={" max-w-[1400px]  mx-auto flex pt-12 re text-gray-300 "}>
      <div className='relative overflow-hidden '>
        <div className='sm:ml-7  text-center sm:text-left max-w-3xl mx-auto pt-24 sm:pt-52 md:pt-60 lg:pt-44'>
          <h1 className='select-none text-slate-200 tracking-tight   font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tighttext-center sm:text-left '>
            {props.MainText}
            <span className=' text-red-500  font-extrabold  text-4xl sm:text-5xl lg:text-6xl tracking-tighttext-center sm:text-left '>
              .
            </span>
          </h1>
          <p className='mt-6 font-medium  tracking-tight text-md sm:text-xl  text-center sm:text-left max-w-3xl mx-7 text-slate-400'>
            {props.MainPTexe}
          </p>

          <div className='mt-6 mx-12 sm:mx-0  sm:mt-10 sm:flex  justify-left sm:space-x-6 text-sm'>
            <a
              className='select-none font-bold box-decoration-slice shadow-lg hover:shadow-red-500/50    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-100 focus:ring-offset-slate-800   h-12 px-6 rounded-lg w-full flex items-center text-white justify-center sm:w-auto bg-red-500  hover:bg-red-400'
              href={props.action}
              passHref>
              {props.ActionButton}
            </a>
            <a
              className='select-none font-bold bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12 px-2  sm:px-14 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 '
              href={props.action2}
              passHref>
              {props.ActionButton2}
            </a>
          </div>
        </div>
      </div>
      <div className='pt-20 md:pt-10 lg:pt-4 pl-10 text-white relative hidden lg:block'>
        <div className='bounce-2 box2  absolute z-20 opacity-60 rotate-3'>
          <Pagination total={20} initialPage={1} />
        </div>
        <div className='mt-24 z-20  relative'>
          <Tooltip
            content={"Thank you 😊 "}
            className='bounce-2 box absolute'
            rounded
            color='primary'>
            <Button auto flat>
              Hover me
            </Button>
          </Tooltip>
        </div>
        {props.svg}
        <div className='relative -mt-20 '>
          <Loading className=' bounce-2 box3 ' size='md' />
        </div>{" "}
        <div className='relative  -mt-60 ml-96 pl-32 rotate-12'>
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
            shadow
            placeholder='Write "I love Divzoon" ..'
            className='  bounce-2 box3 '
            status='success'
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderC;
