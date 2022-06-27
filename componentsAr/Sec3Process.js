import React from "react";
import Image from "next/image";

function Sec3Process(props) {
  //center a div

  return (
    <div className='mx-auto px-4   max-w-[1400px] min-h-[1300px] pb-20 flex flex-wrap  justify-center    text-gray-200 '>
      <h1      style={{ fontFamily: "SfproText", width: "600" }} className='text-slate-200 select-none tracking-tight mb-11   font-extrabold text-4xl sm:text-4xl lg:text-6xl  text-center '>
      <span className=' text-red-500  font-extrabold  text-5xl sm:text-5xl lg:text-6xl tracking-tighttext-center sm:text-left '>
          .
        </span>
      <span> </span>
        {props.MainText}
      </h1>
      <div className='flex flex-col text-right w-full'>
        <div className='min-h-[400px] relative sm:grid md:grid-cols-2  '>
          <div className='md:mt-[20%] '>
            <div className='flex justify-end'>

              <h1 style={{ fontFamily: "SfproText", width: "600" , letterSpacing:"0.2px"}}  className='text-3xl select-none  pt-[10px] font-semibold font-sans'>
                مرحلة التخطيط
              </h1>
              <div className='pl-2'>
                <span
                  style={{ filter: "drop-shadow(0px 0px 10px #1b1b7d)" }}
                  className=' hover:ring-2 duration-500 select-none bg-gray-700/40  text-lg w-10 h-10 flex items-center justify-center rounded-full mt-3 '>
                  1
                </span>
              </div>
            </div>
            <div className='ml-12 mt-3 '>
              <h4 className="text-gray-400 font-extralight text-xl antialiased"     style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }}>
              {/* نشكل العلامات التجارية من خلال الاستكشاف ، ونطبق بحثًا معمقًا لتحدي الافتراضات في كل منعطف. */}
              نقوم بتشكيل العلامات التجارية حيث نقوم بتحليل المتطلبات والتعرف علي الأهداف والمشاكل التي يقوم بحلها , وعمل تدقيق كامل لمتطلبات العميل ومن ثم وضع خطة العمل علي المشروع
              <br/>
              كل هذا بعد الجلوس مع العميل والتعرف علي متطلباته
              </h4>
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

















        <div className='min-h-[200px] relative  mr-16 sm:grid md:grid-cols-2 '>
     
    
<div className="flex justify-start  order-last">

<div className='  md:mt-[20%]  md:mr-[20%]'>
       
         <div className='flex justify-end '>
           
           <h1 style={{ fontFamily: "SfproText", width: "600" , letterSpacing:"0.2px"}}  className='text-3xl select-none  pt-[10px] font-semibold font-sans'>
           مرحلة التصميم
           </h1>
           <div className='pl-2'>
             <span
               style={{ filter: "drop-shadow(0px 0px 10px #1b1b7d)" }}
               className='hover:ring-2 duration-500  select-none bg-gray-700/40  text-lg w-10 h-10 flex items-center justify-center rounded-full mt-3 '>
               2
             </span>
           </div>
         </div>
         <div className=' mt-3 text-gray-400'>
           <h4 className="text-gray-400 font-extralight text-xl antialiased"     style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }}>
        يعتبر التصميم من اهم مميزاتنا حيث انه يلامس العميل مباشراً, واي خطأ به قد يسبب في فشل او نجاح المشروع 
        <br/>
        لهذا فنحن نقوم بعمل اكثر من تصميم في البداية ومن ثم تحديد الافضل للعميل النهائي و مناسب للمشروع 
        <br/>
     ويكون عميلنا "رائد الاعمال" جزئ من عملية التصميم
              </h4>
         </div>
       </div>

</div>

<div
         style={{
           filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
         }}
         className='sm:mt-8  select-none  p-5 max-w-[360px] mx-auto  pt-3'>
         {" "}
         <Image
           className='relative bounce-2 box2 '
           src={props.sec3Image2}
           alt=' The Planning Phase'
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
          <div className='md:mt-[20%] '>
            <div className='flex justify-end'>

              <h1 style={{ fontFamily: "SfproText", width: "600" , letterSpacing:"0.2px"}}  className='text-3xl select-none  pt-[10px] font-semibold font-sans'>
                مرحلة البرمجة
              </h1>
              <div className='pl-2'>
                <span
                  style={{ filter: "drop-shadow(0px 0px 10px #1b1b7d)" }}
                  className='hover:ring-2 duration-500  select-none bg-gray-700/40  text-lg w-10 h-10 flex items-center justify-center rounded-full mt-3 '>
                  3
                </span>
              </div>
            </div>
            <div className='ml-12 mt-3 text-gray-400'>
              <h4 className="text-gray-400 font-extralight text-xl antialiased"     style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }}>
نقوم بتشكيل فريقاً من المطورين لتنفيذ خطة العمل بإستخدام تقنيات حديثة تضمن الكفائة
<br/>
حيث نتبع نهجاً قوياً ومرناً لضمان الجودة والتسليم في الوقت المناسب        
              </h4>
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








        <div className='min-h-[200px] relative  mr-16 sm:grid md:grid-cols-2 '>
     
    
<div className="flex justify-start  order-last">

<div className='  md:mt-[20%]  md:mr-[20%]'>
       
         <div className='flex justify-end '>
           
           <h1 style={{ fontFamily: "SfproText", width: "600" , letterSpacing:"0.2px"}} className='text-3xl select-none  pt-[10px] font-semibold font-sans'>
           مرحلة الاختبار و التسليم
           </h1>
           <div className='pl-2'>
             <span
               style={{ filter: "drop-shadow(0px 0px 10px #1b1b7d)" }}
               className='hover:ring-2 duration-500  select-none bg-gray-700/40  text-lg w-10 h-10 flex items-center justify-center rounded-full mt-3 '>
               4
             </span>
           </div>
         </div>
         <div className=' mt-3 text-gray-400'>
           <h4 className="text-gray-400 font-extralight text-xl antialiased"     style={{ fontFamily: "elwatanP", width: "200" ,
              letterSpacing: "0.2px"
            }}>
         يتم التسليم قبل الموعد وهذا بسبب الخطة السليمة التي تم وضعها في البداية والتي عمل عليها موظفينا لضمان الشفافية و ثقة عملائنا
         <br/>
مما لا شك فيه أن بعد الإحتكاك بالواقع العملي تظهر الحاجة الملحة إلي إدخال مزيد من التعديلات و التحديثات إلي التطبيق 
ولهذا فسوف يتم إطلاق التطبيق لمجموعة صغيرة من العملاء لتجربة التطبيق ومتابعة التحليلات بإستخدام ادواتنا المميزة 
للحصول علي أفضل تجربة لعملائك النهائيين بدون مشاكل
                   </h4>
         </div>
       </div>

</div>

<div
         style={{
           filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
         }}
         className='sm:mt-8  select-none  p-5 max-w-[360px] mx-auto  pt-3'>
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
