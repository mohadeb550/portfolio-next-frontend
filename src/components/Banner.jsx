
import Experience from "./Experience";

export default function Banner() {

    return (
     <div  className="hero md:h-[620px] lg:h-[800px] max-w-[1400px] mx-auto font-play flex flex-col-reverse md:flex-row justify-around items-center gap-8 px-10 md:px-16 pb-14 md:pb-36 relative " >
    
    <div className=" text-neutral-content flex-1 xl:pl-14  relative z-20 xl:border-l border-[#7F6AD4]/70 rounded-2xl"  data-aos="fade-right" data-aos-duration="1000">
      <div className="max-w-4xl space-y-2 lg:space-y-5">
        <h1 className=" text-2xl lg:text-4xl rowdies-regular gradient-text mb-3 text-right md:text-left"> Hello, I Am Mohadeb</h1>
        <h1 className=" text-4xl lg:text-7xl rowdies-regular whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">frontend developer</h1>

        <p className="inter-thin text-gray-400 text-sm lg:text-base text-right md:text-left">Frontend-focused MERN developer with expertise in Next.js, React, and TypeScript, creating dynamic, responsive website. Skilled in state management with Redux.</p>

      </div>
     <div className='flex items-center gap-3 mt-5 md:mt-10'>
     <a href='https://drive.google.com/uc?export=download&id=1VvI3kxUpt8bto3pNdxnCyRcVJ4xnRROx'>  <button className="px-6 py-3 md:py-4 rounded-full gradient-background text-white inter-medium text-xs md:text-sm shadow-lg shadow-[#23A3C8]/40 transition hover:brightness-110"> Download Resume </button></a>

     </div>
    </div>


    {/* circles */}
    {/* for mobile  */}
    {/* just for the line : 'fade left / fade' */}

      <div className="md:hidden md:relative gradient-border rounded-full w-[290px] h-[290px] md:w-80 xl:w-[440px] md:h-80 lg:w-[380px] lg:h-[380px] xl:h-[440px]  z-20 mt-8 md:mt-0"  data-aos="fade" data-aos-duration="1500">

      <img src='https://i.ibb.co.com/mbxXm7k/172934885366601111111111.png' className="absolute rounded-full w-[325px] h-[325px] md:w-full md:h-[350px] lg:h-[440px] xl:h-[520px]  object-contain md:object-cover  inset-0 md:-top-8 lg:-top-16 xl:-top-20  mx-auto bg-white/5 md:bg-transparent"  />  </div>

      {/* for large  */}
      <div className="hidden md:block md:relative gradient-border rounded-full w-[290px] h-[290px] md:w-80 xl:w-[440px] md:h-80 lg:w-[380px] lg:h-[380px] xl:h-[440px]  z-20 mt-8 md:mt-0"  data-aos="fade-left" data-aos-duration="1500">

      <img src='https://i.ibb.co.com/mbxXm7k/172934885366601111111111.png' className="absolute rounded-full w-[325px] h-[325px] md:w-full md:h-[350px] lg:h-[440px] xl:h-[520px]  object-contain md:object-cover  inset-0 md:-top-8 lg:-top-16 xl:-top-20  mx-auto bg-white/5 md:bg-transparent"  />  </div>





      {/* Experience section  */}
     <section className="absolute -bottom-20 md:bottom-24 z-30 left-0 right-0">
     <Experience/>
     </section>

  </div>
    )
  }
  