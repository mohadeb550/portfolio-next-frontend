
import AccordionBox from "./AccordianBox";
import Container from '../Container'

const FaqSection = () => {

    return (
       <Container>
         <div className="px-7 md:px-12 lg:px-20"> 

         <h1 className=" text-[34px] lg:text-5xl text-gray-300 mb-16 rowdies-regular" data-aos="fade-right" data-aos-duration="1000">Frequently Asked Questions</h1>

{/* flex container  */}
<div className=" flex flex-col-reverse md:flex-row items-center justify-between gap-2 md:gap-5 lg:gap-7">

    <AccordionBox/>

    <div className="w-full md:w-[55%] xl:w-[47%] h-full">
        <img src="https://i.ibb.co.com/D7bCzyd/Png-Item-2377786-Recovered.png" className=" h-[200px] md:h-full w-full object-contain" />
    </div>
</div>

</div>
       </Container>
    );
};

export default FaqSection;