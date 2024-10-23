
import Container from './Container'
import { HiArrowUpRight } from "react-icons/hi2";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosTabletPortrait } from "react-icons/io";
import { SiArtixlinux } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Services = () => {
    return (
       <Container>
            <div className='px-7 md:px-12 lg:px-20 mb-20 lg:mb-32 mt-20 lg:mt-20'>
            <h1 className=" text-[34px] lg:text-5xl text-gray-300 mb-16 rowdies-regular" data-aos="fade-down" data-aos-duration="1000">MY Services</h1>

            <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 lg:gap-y-8'>


            <div className='gradient-service-card rounded-2xl p-[1px]' data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
               <div className='rounded-2xl bg-[#0F1724] py-4 px-5 flex items-center justify-center gap-6 xl:gap-7'>

                       <div className='gradient-icon-box p-[1px] rounded-2xl'  >
                       <div className='bg-[#0F1724] rounded-2xl p-5 md:p-10 xl:p-11'>
                            <div className='border border-[#299ec9]/20 rounded-full p-2'>
                               <div className='gradient-icon rounded-full p-[1px]'>
                               <h3 className='text-zinc-100 custom-shadow  text-3xl bg-[#0F1724]/90 rounded-full p-3'><BsCodeSlash/> </h3>
                               </div>
                            </div>
                        </div>
                       </div>

                        <div className='space-y-1 md:space-y-3'>
                        <p className=" text-gray-300 text-sm md:text-base xl:text-lg xl:text-center uppercase inter-medium flex items-center gap-3">Frontend Development<span className='text-xl text-white'><HiArrowUpRight/></span> </p>

                        <p className=" text-gray-400 text-left text-sm lg:text-[15px] xl:text-base lg:max-w-sm xl:max-w-md  line-clamp-2 lg:line-clamp-3">
                        Highlight your general frontend development services, including building modern, interactive, and dynamic web applications your general frontend development services, including building modern, interactive, and dynamic web applications .</p>

                    
       
                        </div>
                </div>
               </div>

               <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500" className='gradient-service-card rounded-2xl p-[1px]' >
               <div className='rounded-2xl bg-[#0F1724] py-4 px-5 flex items-center justify-center gap-6 xl:gap-7'>

                       <div className='gradient-icon-box p-[1px] rounded-2xl'  >
                       <div className='bg-[#0F1724] rounded-2xl p-5 md:p-10 xl:p-11'>
                            <div className='border border-[#299ec9]/20 rounded-full p-2'>
                               <div className='gradient-icon rounded-full p-[1px]'>
                               <h3 className='text-zinc-100 custom-shadow  text-3xl bg-[#0F1724]/90 rounded-full p-3'><IoIosTabletPortrait/> </h3>
                               </div>
                            </div>
                        </div>
                       </div>

                        <div className='space-y-1 md:space-y-3'>
                        <p className=" text-gray-300 text-sm md:text-base xl:text-lg xl:text-center uppercase inter-medium flex items-center gap-3">Responsive Web Design<span className='text-xl text-white'><HiArrowUpRight/></span> </p>

                        <p className=" text-gray-400 text-left text-sm lg:text-[15px] xl:text-base lg:max-w-sm xl:max-w-md  line-clamp-2 lg:line-clamp-3">
                        Emphasize your ability to create websites that look great and function smoothly on any device (mobile, tablet, desktop).</p>
       
                        </div>
                </div>
               </div>

               
               <div className='gradient-service-card rounded-2xl p-[1px]' data-aos-duration="1000" data-aos="fade-up" >
               <div className='rounded-2xl bg-[#0F1724] py-4 px-5 flex items-center justify-center gap-6 xl:gap-7'>

                       <div className='gradient-icon-box p-[1px] rounded-2xl'>
                       <div className='bg-[#0F1724] rounded-2xl p-5 md:p-10 xl:p-11'>
                            <div className='border border-[#299ec9]/20 rounded-full p-2'>
                               <div className='gradient-icon rounded-full p-[1px]'>
                               <h3 className='text-zinc-100 custom-shadow  text-3xl bg-[#0F1724]/90 rounded-full p-3'><SiArtixlinux/> </h3>
                               </div>
                            </div>
                        </div>
                       </div>

                        <div className='space-y-1 md:space-y-3'>
                        <p className=" text-gray-300 text-sm md:text-base xl:text-lg xl:text-center uppercase inter-medium flex items-center gap-3"> UI/UX Design Implementation<span className='text-xl text-white'><HiArrowUpRight/></span> </p>

                        <p className=" text-gray-400 text-left text-sm lg:text-[15px] xl:text-base lg:max-w-sm xl:max-w-md  line-clamp-2 lg:line-clamp-3">
                        Provide services related to integrating third-party APIs or building custom connections between frontend and backend systems.</p>
       
                        </div>
                </div>
               </div>
               
               <div className='gradient-service-card rounded-2xl p-[1px]' data-aos-duration="1000" data-aos="fade-up" >
               <div className='rounded-2xl bg-[#0F1724] py-4 px-5 flex items-center justify-center gap-6 xl:gap-7'>

                       <div className='gradient-icon-box p-[1px] rounded-2xl'>
                       <div className='bg-[#0F1724] rounded-2xl p-5 md:p-10 xl:p-11'>
                            <div className='border border-[#299ec9]/20 rounded-full p-2'>
                               <div className='gradient-icon rounded-full p-[1px]'>
                               <h3 className='text-zinc-100 custom-shadow  text-3xl bg-[#0F1724]/90 rounded-full p-3'><TbApi/> </h3>
                               </div>
                            </div>
                        </div>
                       </div>

                        <div className='space-y-1 md:space-y-3'>
                        <p className=" text-gray-300 text-sm md:text-base xl:text-lg xl:text-center uppercase inter-medium flex items-center gap-3">API Integration<span className='text-xl text-white'><HiArrowUpRight/></span> </p>

                        <p className=" text-gray-400 text-left text-sm lg:text-[15px] xl:text-base lg:max-w-sm xl:max-w-md  line-clamp-2 lg:line-clamp-3">
                        Highlight your general frontend development services, including building modern, interactive, and dynamic web applications your general frontend development services, including building modern, interactive, and dynamic web applications .</p>
       
                        </div>
                </div>
               </div>
                  
            </section>
            </div>

            


       </Container>
    );
};

export default Services;