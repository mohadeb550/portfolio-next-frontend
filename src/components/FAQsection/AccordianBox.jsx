import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { GoArrowDownRight } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";


//  customize accordian with dark and light mode :

const AccordionItem = ({ header, ...rest }) => {
  const darkMode = true;

  return <Item   {...rest} header={({ state: { isEnter } }) => (
      <>
      {/* header style  */}
       <h2 className={`text-base md:text-lg xl:text-xl  w-[80%] `}> {header}</h2>

       {/* arrow button style  */}
        <div  className={`absolute border border-[#2AA0CC]/10 right-5 top-2 p-1 rounded-2xl text-xl md:text-2xl xl:text-3xl ml-auto transition-transform duration-200 ease-out text-[#2AA0CC]`}>{isEnter? <FiMinus/> : <FiPlus/> } </div>
      </>
    )}

    // accrodian item style 
    className=''  buttonProps={{ className: ({ isEnter }) => ` relative flex w-full py-5 md:py-4 lg:py-5 xl:py-6 text-left rounded-lg xl:rounded-xl px-5 lg:px-6 mb-4 text-gray-300 ${isEnter? 'border border-[#299EC9]/10 gradient-background-faq-active' :"gradient-background-faq "}`
    }} 
    
      // inside content style 
    contentProps={{ className: `text-[15px] lg:text-base xl:text-lg px-5 lg:px-6 ${darkMode? 'text-gray-400': 'text-primary-gray'} transition-height duration-200 ease-out` }}  panelProps={{ className: "pb-5 lg:pb-6 xl:pb-7" }}
  />
};


export default function AccordianBox() {
  return (
    <div className="mx-2 my-4 w-full">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={200} >
        
        <div data-aos="fade-left" data-aos-duration="1000">
        <AccordionItem header="What technologies do you work with?"  >
        I specialize in the MERN stack, which includes MongoDB, Express, React, and Node.js. I also work with Next.js, TypeScript, Redux, and Tailwind CSS for building modern, responsive web applications.
        </AccordionItem>
        </div>


      <div data-aos="fade-right" data-aos-duration="1000">
      <AccordionItem header="What kind of projects have you worked on?"  initialEntered >
      I’ve built various projects, including full-stack applications, dashboards, and responsive websites. These projects involve everything from frontend UI/UX design to backend server creation using the MERN stack.
        </AccordionItem>
      </div >

      <div data-aos="fade-left" data-aos-duration="1000">
      <AccordionItem header="Why should we hire you for work?"  >
         I will try my best to work with you, just give me an opportunity to work. I will never make you disappointed, i got an offer to work before but that was scam. After getting the opportunity, i thought i would try my best but that didn't happen, so i am just looking for an opportunity to work not the salary.
        </AccordionItem>

      </div>

       <div data-aos="fade-right" data-aos-duration="1000">
       <AccordionItem header="What makes you a good fit for a frontend developer role?"  >
       As a frontend-focused MERN developer, I bring a strong foundation in building dynamic, responsive web applications. My skills in Next.js, React, and TypeScript allow me to create scalable and efficient UIs.
        </AccordionItem>
       </div>


      </Accordion>
    </div>
  );
}
