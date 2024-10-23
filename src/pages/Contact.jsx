import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';
import Container from '../components/Container';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
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
      <div className=" bg-[#0F1724] text-white flex flex-col justify-center items-center px-10 md:px-16 mt-1 lg:mt-6">
      <h1 className=" text-2xl md:text-3xl lg:text-4xl rowdies-regular gradient-text mb-2 text-right md:text-left mt-3 md:mt-0">Get In Touch</h1>
      <p className="mb-8 text-center text-base lg:text-lg text-gray-400 hidden md:block">I’d love to hear from you! Let’s create something amazing together.</p>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row md:space-x-8 w-full bg-[#0F1724] rounded-lg shadow-lg">
        {/* Form */}
        <div className="w-full md:w-2/3">
          <form ref={form} onSubmit={sendEmail}  className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Your Name</label>
              <input
                type="text"
                name='user_name'
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Your Email</label>
              <input
              name='user_email'
                type="email"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Phone Number</label>
              <input
              name='phone'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Enter the subject"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
              name='message'
                rows="5"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-[#9071E9] to-[#2DAEDD] rounded-lg font-semibold hover:from-[#2DAEDD] hover:to-[#9071E9]  ">
             {loading?'Sending...': ' Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 mt-7 border p-4 rounded-xl border-[#299EC9]/10">
          <div className="space-y-6 text-gray-300">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl" />
              <span className='hidden md:block lg:hidden'>mohadebbhowmik7<br/>@gmail.com</span>
              <span className='md:hidden lg:block'>mohadebbhowmik7@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-gradient" />
              <span>+880 1875466519</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-gradient" />
              <span>Tangail Sadar, Bangladesh</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-8  text-gray-300">
            <a href='https://www.linkedin.com/in/mohadeb550' target='_blank' className="transition hover:text-[#2FADDE] "><AiFillLinkedin className="text-3xl" /></a>
            <a href="https://github.com/mohadeb550" className="transition hover:text-[#2FADDE] "><AiFillGithub className="text-3xl" /></a>
            <a href="/" className="transition hover:text-[#2FADDE] "><AiFillFacebook className="text-3xl" /></a>
          </div>
        </div>
      </div>
    </div>
  </Container>
  );
};

export default Contact;
