import Link from "next/link";

function CallToAction() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section className='px-2 pt-32  md:px-0'>
        <div className=' items-center max-w-6xl px-5 mx-auto space-y-6 text-center'>
          <h1  style={{ fontFamily: "SfproText", width: "600" }} className='select-none text-4xl font-extrabold tracking-tight text-left text-gray-200 sm:text-5xl md:text-6xl md:text-center'>
            <span className='block'>
             
              رفع مستوى صفحات  
              <span> </span>
              <span
                key='coloredText'
                className='header block mt-1 text-red-700 lg:inline lg:mt-0'>
               موقع الويب 
               الخاص بك
              </span>

            </span>
          </h1>
          <p
          style={{ fontFamily: "SfproText", width: "200" }}
            className='w-full mx-auto text-base font-extralight text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl  md:text-center'>
قم بترقية موقع الويب او تطبيقك الحالي الخاص بك واجعله مناسباً لمعايير التصميم في {currentYear}
          </p>
          <div className='relative flex flex-col justify-center md:flex-row md:space-x-4'>
            <Link href='/ar/Contact'>
              <a
                style={{ fontFamily: "elwatanP", width: "400" }}
                className='flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-700 rounded-md md:mb-0 hover:bg-red-900 md:w-auto'>
                
              ابدأ الآن
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 ml-1'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points='12 5 19 12 12 19' />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className='  items-center max-w-6xl px-5 mx-auto mt-10 text-center'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/Cover.png' alt='Call to action' />
        </div>
      </section>
    </div>
  );
}

export default CallToAction;
