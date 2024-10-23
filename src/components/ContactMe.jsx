import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { toast } from 'sonner'
import Container from './Container';
import { ImLocation2 } from "react-icons/im";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";

export default function ContactMe() {
  const [ loading , setLoading] = useState(false)

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if(e.target.user_name.value 
      && e.target.user_email.value 
      && e.target.phone.value 
      && e.target.message.value){

 emailjs.sendForm('service_i9rfsjq', 'template_7c10k5a', form.current, 'obvgqwmlKnS271e1n')
      .then((result) => {
        toast.success('Contact Information Send Successfully')
        setLoading(false);
      }, (error) => {
          console.log(error.text);
          setLoading(false);
      });
    }else{
      toast.error('Fill out all fields')
      setLoading(false);
    }

   
  };


    return (
    <Container>
       <section className="h-[850px] md:h-[500px] lg:h-[560px] xl:h-[600px] bg-auto md:bg-cover mt-[120px] md:mt-36 xl:mt-40 px-7 md:px-12 lg:px-20">
  
      <section className='flex flex-col md:flex-row'>

      <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-8 flex-1 inter-thin'>

          <section className='mb-5'>
          <h1 className="text-[34px] lg:text-5xl text-gray-300 lg:mb-2 rowdies-regular" data-aos="fade-right" data-aos-duration="1000">Contact Me</h1>
          <p  className=" text-gray-400/90 text-left p-1 md:pr-8 text-sm lg:text-base lg:max-w-sm xl:max-w-md">If you would like to work with me or just want to get in touch, Id love to hear from you!</p>
          </section>

            <div className='flex items-center gap-4 ' >
                <h4 className='text-[#7C6BD3] text-2xl'><ImLocation2/></h4>
                <p className='text-gray-300 text-sm lg:text-base xl:text-lg  gradient-hover'>Tangail, Bangladesh</p>
            </div>
            <div className='flex items-center gap-4  '>
                <h4 className='text-[#7C6BD3] text-2xl'><IoCallOutline/></h4>
                <p className='text-gray-300 text-sm lg:text-base xl:text-lg  gradient-hover'>+880 1875466519</p>
            </div>
            <div className='flex items-center gap-4  '>
                <h4 className='text-[#7C6BD3] text-2xl'><AiOutlineMail/></h4>
                <p className='text-gray-300 text-sm lg:text-base xl:text-lg  gradient-hover'>mohadebbhowmik7@gmail.com</p>
            </div>
            <div className='flex items-center gap-4  '>
                <h4 className='text-[#7C6BD3] text-2xl'><FaLinkedinIn/></h4>
                <a href='https://www.linkedin.com/in/mohadeb550' target='_blank' className='text-gray-300 text-sm lg:text-base xl:text-lg gradient-hover '>linkedin.com/in/mohadeb550</a>
            </div>
      </div>

      {/* form section  */}
      <div className="flex-1 mt-8 md:mt-0">
          <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col opacity-90 gap-5 inter-thin">

              <input   data-aos="fade-left" data-aos-duration="1000"  type="text" className="p-4 outline-none rounded-lg text-sm xl:text-base text-gray-300  bg-[#162030]" placeholder="Your Name" name='user_name' />
              <input   data-aos="fade-right" data-aos-duration="1000"  type="text" className="p-[18px] outline-none rounded-lg text-sm xl:text-base text-gray-300  bg-[#162030]" placeholder="Email Address"  name='user_email'/>
              <input   data-aos="fade-left" data-aos-duration="1000"  type="text" className="p-[18px] outline-none rounded-lg text-sm xl:text-base text-gray-300  bg-[#162030] " placeholder="Phone Number" name='phone'/>
              <textarea   data-aos="fade-right" data-aos-duration="1000"  className="p-4 outline-none rounded-lg  text-sm xl:text-base text-gray-300  bg-[#162030]" rows={7} placeholder="Message" name='message'  />
                  
          </div>
        
         <div className="flex justify-end items-center mt-6">
         <button className="px-4 lg:px-5 xl:px-6 py-3 md:py-3 lg:py-4 rounded-lg gradient-background text-white inter-medium text-xs xl:text-sm shadow-lg shadow-[#23A3C8]/40 transition hover:brightness-110 whitespace-nowrap">{loading? '.  . . .  .  .  . . . .. . .  .': 'Send Message'}</button>
         </div>

         </form>
      </div>
      </section>

     </section>
    </Container>
    )
  }
