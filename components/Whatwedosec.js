import React from "react";
import Link from "next/link";

function Whatwedosec(props) {
  return (
    <div style={{ fontFamily: "Poppins-Bold", width: "400" }} className=' justify-center pb-12   md:gap-12  grid sm:grid-cols-2 max-w-[1500px]  lg:grid-cols-3 xl:grid-cols-4 gap-6 '>
      <Link href={props.hrefWebdev} passHref>
        <div className='min-h-[190px] select-none active:scale-95 cursor-pointer duration-300 hover:scale-105  max-w-[340px] bg-gray-800/40 backdrop-blur-md shadow-lg rounded-xl'>
          <div className='gap-2 p-3 flex h-[70px]'>
            <div className='rounded-full  bg-[#EF4444]/20 h-10 w-10'>
              <div className='m-2   justify-center '>
                <svg
                  className='hover:scale-110 opacity-70 duration-500 hover:brightness-150 justify-center my-2 mx-auto'
                  width={24}
                  height={24}
                  viewBox='0 0 76 77'
                  fill='#EF4444'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M34.7241 6.63413C33.4652 6.74662 32.2275 6.93301 31.0152 7.18895C29.447 9.76685 28.0576 13.1434 26.9554 17.1249H34.7241V6.63413ZM23.2762 9.91936C19.7269 11.7226 16.5603 14.1764 13.9318 17.1249H20.9874C21.6359 14.5397 22.4028 12.1237 23.2762 9.91936ZM9.81984 22.9238C7.72525 26.7099 6.37529 30.9694 5.9689 35.5024H18.5737C18.7006 31.1135 19.1143 26.8808 19.7808 22.9238H9.81984ZM5.9689 41.3014C6.32916 45.3198 7.4309 49.1232 9.13556 52.5725H19.5713C19.0273 48.9957 18.6868 45.2105 18.5737 41.3014H5.9689ZM12.8275 58.3715C15.654 61.9053 19.2144 64.8209 23.2762 66.8844C22.2572 64.3124 21.383 61.4522 20.6728 58.3715H12.8275ZM31.0152 69.6148C32.2275 69.8708 33.4652 70.0572 34.7241 70.1697V58.3715H26.6094C27.7603 62.9237 29.2781 66.7593 31.0152 69.6148ZM40.4934 70.1627C41.7258 70.0496 42.9379 69.8656 44.1255 69.6148C45.8626 66.7593 47.3804 62.9237 48.5313 58.3715H40.4934V70.1627ZM51.8644 66.8844C55.9262 64.8209 59.4866 61.9053 62.3131 58.3715H54.4678C53.7577 61.4522 52.8835 64.3124 51.8644 66.8844ZM65.9701 52.643C67.6947 49.1751 68.809 45.3472 69.1717 41.3014H56.567C56.4539 45.2105 56.1134 48.9957 55.5693 52.5725H65.3349C65.5532 52.5725 65.7657 52.5969 65.9701 52.643ZM75.0703 38.4019C75.0703 17.5845 58.281 0.708599 37.5703 0.708599C16.8596 0.708599 0.0703125 17.5845 0.0703125 38.4019C0.0703125 59.2193 16.8596 76.0952 37.5703 76.0952C58.281 76.0952 75.0703 59.2193 75.0703 38.4019ZM69.1717 35.5024H56.567C56.44 31.1135 56.0264 26.8808 55.3598 22.9238H65.3208C67.4154 26.7099 68.7653 30.9694 69.1717 35.5024ZM61.2088 17.1249C58.5803 14.1764 55.4138 11.7226 51.8644 9.91939C52.7378 12.1237 53.5048 14.5398 54.1533 17.1249H61.2088ZM44.1255 7.18896C42.9379 6.93822 41.7258 6.75424 40.4934 6.6411V17.1249H48.1853C47.0831 13.1434 45.6937 9.76686 44.1255 7.18896ZM50.7953 41.3014C50.6731 45.2905 50.3015 49.076 49.7284 52.5725H40.4934V41.3014H50.7953ZM34.7241 41.3014V52.5725H25.4123C24.8392 49.076 24.4675 45.2905 24.3453 41.3014H34.7241ZM25.6384 22.9238C24.9368 26.7772 24.4829 31.0108 24.3453 35.5024H34.7241V22.9238H25.6384ZM40.4934 22.9238V35.5024H50.7953C50.6577 31.0108 50.2039 26.7772 49.5023 22.9238H40.4934Z'
                    fill='url(#paint0_linear)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear'
                      x1='37.5703'
                      y1='0.708599'
                      x2='37.5703'
                      y2='76.0952'
                      gradientUnits='userSpaceOnUse'>
                      <stop offset={1} stopColor='#EF4444' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>{" "}
            </div>

            <div className='mt-1 text-lg text-gray-200 font-bold '>
              Web Development
            </div>
          </div>
          <div 
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
            className='px-3 -mt-3 font-medium text-gray-400'>
            Our web developers create custom web application solutions we
            deliver web presence to help you grow your business using the best
            web technologies .
          </div>
        </div>
      </Link>
      <Link href={props.hrefUiux} passHref>
        <div className='min-h-[190px] select-none active:scale-95 cursor-pointer duration-300 hover:scale-105  max-w-[340px] bg-gray-800/40 backdrop-blur-md shadow-lg rounded-xl'>
          <div className='gap-2 p-3 flex h-[70px]'>
            <div className='rounded-full  bg-[#EF4444]/20   h-10 w-10'>
              <div className='m-2 justify-center '>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='hover:scale-110 opacity-70 duration-500 hover:brightness-150 justify-center my-2 mx-auto'>
                  <path
                    d='M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3'
                    stroke='#EF4444'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z'
                    stroke='#EF4444'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <div className='mt-1 text-lg text-gray-200 font-bold '>
              Ui/Ux Design
            </div>
          </div>
          <div
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
            className='px-3 -mt-3 font-medium text-gray-400'>
            Starting from concept, information architecture, visual identity and
            UI/UX design, our team delivers dazzling experiences for maximum
            user engagement.
          </div>
        </div>
      </Link>
      <Link href={props.hrefAppdev} passHref>
        <div className='min-h-[190px] select-none active:scale-95 cursor-pointer duration-300 hover:scale-105  max-w-[340px] bg-gray-800/40 backdrop-blur-md shadow-lg rounded-xl'>
          <div className='gap-2 p-3 flex h-[70px]'>
            <div className='rounded-full  bg-[#EF4444]/20  h-10 w-10'>
              <div className='m-2 justify-center '>
                <svg
                  className='hover:scale-110 opacity-70 duration-500 hover:brightness-150 justify-center my-2 mx-auto'
                  width={24}
                  height={24}
                  viewBox='0 0 46 76'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M33.209 6.125H12.209C10.016 6.125 8.70951 6.12937 7.74105 6.2085C7.14999 6.25679 6.90154 6.32051 6.83495 6.34118C6.50016 6.51758 6.22656 6.79117 6.05016 7.12597C6.0295 7.19256 5.96578 7.441 5.91748 8.03207C5.83836 9.00052 5.83398 10.307 5.83398 12.5V63.5C5.83398 65.693 5.83836 66.9995 5.91748 67.9679C5.96578 68.559 6.0295 68.8075 6.05016 68.874C6.22656 69.2088 6.50016 69.4824 6.83496 69.6588C6.90155 69.6795 7.15 69.7432 7.74105 69.7915C8.7095 69.8706 10.016 69.875 12.209 69.875H33.209C35.402 69.875 36.7085 69.8706 37.6769 69.7915C38.2679 69.7432 38.5164 69.6795 38.583 69.6588C38.9178 69.4824 39.1914 69.2088 39.3678 68.874C39.3885 68.8075 39.4522 68.559 39.5005 67.9679C39.5796 66.9995 39.584 65.693 39.584 63.5V12.5C39.584 10.307 39.5796 9.00052 39.5005 8.03207C39.4522 7.44101 39.3885 7.19257 39.3678 7.12597C39.1914 6.79118 38.9178 6.51758 38.583 6.34118C38.5164 6.32051 38.268 6.25679 37.6769 6.2085C36.7085 6.12937 35.402 6.125 33.209 6.125ZM1.02644 4.59507C0.208984 6.19941 0.208984 8.29961 0.208984 12.5V63.5C0.208984 67.7004 0.208984 69.8006 1.02644 71.4049C1.74549 72.8161 2.89284 73.9635 4.30406 74.6825C5.90839 75.5 8.00859 75.5 12.209 75.5H33.209C37.4094 75.5 39.5096 75.5 41.1139 74.6825C42.5251 73.9635 43.6725 72.8161 44.3915 71.4049C45.209 69.8006 45.209 67.7004 45.209 63.5V12.5C45.209 8.29961 45.209 6.19941 44.3915 4.59507C43.6725 3.18386 42.5251 2.0365 41.1139 1.31745C39.5096 0.5 37.4094 0.5 33.209 0.5H12.209C8.00859 0.5 5.90839 0.5 4.30406 1.31745C2.89284 2.0365 1.74549 3.18386 1.02644 4.59507Z'
                    fill='#EF4444'
                  />
                  <path
                    d='M26.8982 61.8717C26.8982 64.1854 25.0226 66.061 22.709 66.061C20.3953 66.061 18.5197 64.1854 18.5197 61.8717C18.5197 59.5581 20.3953 57.6825 22.709 57.6825C25.0226 57.6825 26.8982 59.5581 26.8982 61.8717Z'
                    fill='#EF4444'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear'
                      x1='22.709'
                      y1='0.5'
                      x2='22.709'
                      y2='75.5'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FBD87F' />
                      <stop offset={1} stopColor='#EB860F' />
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear'
                      x1='22.709'
                      y1='0.5'
                      x2='22.709'
                      y2='75.5'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#FBD87F' />
                      <stop offset={1} stopColor='#EB860F' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className='mt-1 text-gray-200 text-lg font-bold '>
              Mobile Apps
            </div>
          </div>
          <div
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
            className='px-3  -mt-3 font-medium text-gray-400'>
            we build intuitive and engaging Android,iOS and cross-platform apps
            for businesses, consumers and enterprises that end users love and
            adapt to them very quickly.
          </div>
        </div>
      </Link>
      <Link href={props.hrefHiredev} passHref>
        <div className='min-h-[190px] select-none active:scale-95 cursor-pointer duration-300 hover:scale-105  max-w-[340px] bg-gray-800/40 backdrop-blur-md shadow-lg rounded-xl'>
          <div className='gap-2 p-3 flex h-[70px]'>
            <div className='rounded-full  bg-[#EF4444]/20 h-10 w-10'>
              <div className='m-2 justify-center '>
                <svg
                  className='hover:scale-110 opacity-70 duration-500 hover:brightness-150 justify-center my-2 mx-auto'
                  width={24}
                  height={24}
                  viewBox='0 0 77 63'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M24.6465 0.201218C20.3989 0.201218 16.3252 1.88857 13.3217 4.89209C10.3182 7.8956 8.63086 11.9692 8.63086 16.2168C8.63086 20.4645 10.3182 24.5381 13.3217 27.5416C16.3252 30.5451 20.3989 32.2325 24.6465 32.2325C28.8941 32.2325 32.9677 30.5451 35.9712 27.5416C38.9748 24.5381 40.6621 20.4645 40.6621 16.2168C40.6621 11.9692 38.9748 7.8956 35.9712 4.89209C32.9677 1.88857 28.8941 0.201218 24.6465 0.201218ZM17.7411 9.3115C19.5726 7.48009 22.0565 6.45122 24.6465 6.45122C27.2365 6.45122 29.7204 7.48009 31.5518 9.3115C33.3832 11.1429 34.4121 13.6268 34.4121 16.2168C34.4121 18.8068 33.3832 21.2908 31.5518 23.1222C29.7204 24.9536 27.2365 25.9825 24.6465 25.9825C22.0565 25.9825 19.5726 24.9536 17.7411 23.1222C15.9097 21.2908 14.8809 18.8068 14.8809 16.2168C14.8809 13.6268 15.9097 11.1429 17.7411 9.3115ZM11.9407 46.5446C15.3105 43.1748 19.8809 41.2817 24.6465 41.2817C29.4121 41.2817 33.9825 43.1748 37.3523 46.5446C40.7221 49.9144 42.6152 54.4848 42.6152 59.2504C42.6152 60.9763 44.0143 62.3754 45.7402 62.3754C47.4661 62.3754 48.8652 60.9763 48.8652 59.2504C48.8652 52.8272 46.3136 46.6671 41.7717 42.1252C37.2298 37.5833 31.0697 35.0317 24.6465 35.0317C18.2233 35.0317 12.0631 37.5833 7.52124 42.1252C2.97935 46.6671 0.427734 52.8272 0.427734 59.2504C0.427734 60.9763 1.82684 62.3754 3.55273 62.3754C5.27862 62.3754 6.67774 60.9763 6.67774 59.2504C6.67774 54.4848 8.57087 49.9144 11.9407 46.5446ZM46.9384 12.3386C49.5024 9.77458 52.9799 8.33415 56.6059 8.33415C60.2319 8.33415 63.7094 9.77458 66.2734 12.3386C68.8373 14.9025 70.2778 18.38 70.2778 22.006C70.2778 25.632 68.8373 29.1095 66.2734 31.6735C63.7094 34.2375 60.2319 35.6779 56.6059 35.6779C52.9799 35.6779 49.5024 34.2375 46.9384 31.6735C44.3744 29.1095 42.934 25.632 42.934 22.006C42.934 18.38 44.3744 14.9025 46.9384 12.3386ZM56.6059 14.5842C54.6375 14.5842 52.7497 15.3661 51.3578 16.758C49.966 18.1498 49.184 20.0376 49.184 22.006C49.184 23.9744 49.966 25.8622 51.3578 27.2541C52.7497 28.646 54.6375 29.4279 56.6059 29.4279C58.5743 29.4279 60.4621 28.646 61.8539 27.2541C63.2458 25.8622 64.0278 23.9744 64.0278 22.006C64.0278 20.0376 63.2458 18.1498 61.8539 16.758C60.4621 15.3661 58.5743 14.5842 56.6059 14.5842ZM51.7052 45.9889C53.8426 45.2011 56.1386 44.9413 58.398 45.2314C60.6574 45.5216 62.8133 46.3532 64.6823 47.6555C66.5512 48.9578 68.078 50.6922 69.1327 52.7113C70.1875 54.7303 70.7389 56.9742 70.7402 59.2522C70.7411 60.9781 72.141 62.3764 73.8669 62.3755C75.5928 62.3745 76.9911 60.9746 76.9902 59.2487C76.9883 55.9642 76.1932 52.7287 74.6724 49.8174C73.1517 46.9062 70.9502 44.4053 68.2553 42.5275C65.5605 40.6498 62.4519 39.4507 59.1942 39.0324C55.9364 38.614 52.6257 38.9886 49.5438 40.1245C47.9244 40.7214 47.0955 42.518 47.6923 44.1374C48.2892 45.7568 50.0858 46.5857 51.7052 45.9889Z'
                    fill='url(#paint0_linear)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear'
                      x1='50.2472'
                      y1='1.83949'
                      x2='37.2577'
                      y2='68.5432'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#59B9FF' />
                      <stop offset={1} stopColor='#39FFDB' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className='mt-1  text-lg text-gray-200 font-bold '>
              Hire Developers
            </div>
          </div>
          <div
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
            className='px-3 -mt-3 font-medium text-gray-400'>
            Create your team for your software development project on short
            the term, long term, or permanent basis with guaranteed project
            delivery at affordable prices.
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Whatwedosec;
