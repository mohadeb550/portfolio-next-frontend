import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";


export default function Footer() {
  return (
  
     <div className="pt-8 mt-10 lg:mt-20 xl:mt-28 bg-[#0F1724]">
        <section className="max-w-[1400px]  border-t border-[#8367D4]/30 mx-auto  px-7 md:px-12 lg:px-20  grid grid-cols-12 gap-8 py-8">

            <div className="space-y-5 col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4 ">
           {/* logo section  */}
    <div className="flex items-center gap-1" >
    <h2 className={`gradient-text text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap rowdies-light`}>@Me</h2>
    </div>
            <p className="text-gray-400 text-[15px]">Lorem ipsum dolor (Main branch)<br/> Kagmari bdrige, Tangail Sadar, Tangail, <br/>Dhaka division, Bangladesh</p>

            <div className="flex gap-4 text-gray-300 text-xl">
              <a href="/" className="transition-all rounded-full hover:text-[#8367D4] p-1"> <FaFacebookF/> </a>
              <a href="https://github.com/mohadeb550" target="_blank" className="transition-all rounded-full hover:text-[#8367D4] p-1">  <AiOutlineGithub/> </a>
              <a href="/" className="transition-all rounded-full hover:text-[#8367D4] p-1">  <FaXTwitter/> </a>
              <a href="https://www.linkedin.com/in/mohadeb550" target="_blank"  className="transition-all rounded-full hover:text-[#8367D4] p-1">  <FaLinkedinIn/> </a>
              <a href="/" className="transition-all rounded-full hover:text-[#8367D4] p-1">  <FaPinterestP/> </a>
            </div>
            </div>


            <div className="col-span-5 md:col-span-3 lg:col-span-2 xl:col-span-2">
            <h2 className="text-gray-400 font-semibold text-xl mb-5">Services</h2>

            <div className="flex flex-col gap-3 text-slate-700/70 ">
            <span className="font-medium text-gray-400 transition  hover:text-[#8367D4] cursor-pointer">UI / UX Implementation</span>
            <span className="font-medium text-gray-400 transition  hover:text-[#8367D4] cursor-pointer">Responsive Web Design</span>
          
            <span className="font-medium text-gray-400 transition  hover:text-[#8367D4] cursor-pointer">Frontend Development</span>
           
            </div>
            </div>

            <div className=" col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2">
            <h2 className="text-gray-400 font-semibold text-xl mb-5">Contact</h2>

            <div className="flex flex-col gap-2">
            <span className="font-medium text-gray-400 transition ">+880 1875466519</span>
            <span className="font-medium text-gray-400 transition ">mohadebbhowmik7@</span>
            <span className="font-medium text-gray-400 transition ">Tangail, Bangladesh</span>
           
            </div>
            </div>

            <div className= "col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4">
            <h2 className="gradient-text font-semibold text-xl mb-5">Get the latest information</h2>
              
            <div className="flex items-center justify-end gap-3 text-slate-700/70 relative ">
            <input type="text" className="px-4 w-full py-3 outline-none rounded-md text-sm xl:text-base text-gray-300  bg-[#162030]" placeholder="Your Name" name='user_name' />

            <div className="absolute right-5 md:right-2 xl:right-6">
            <button className="text-3xl text-[#8367D4]"><MdOutlineDoubleArrow/> </button>
            </div>
           
            </div>
            </div>

        </section>

    </div>
 
  )
}
