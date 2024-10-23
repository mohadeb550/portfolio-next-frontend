import CountUp from 'react-countup';
const Experience = () => {
    return (
     
       <section className="gradient-background-card px-[1px]  rounded-xl md:rounded-2xl w-[87%] xl:max-w-[1250px] mx-auto overflow-hidden"  data-aos="fade" data-aos-duration="1000">
       <div className=" flex items-center gap-3 justify-around rounded-xl md:rounded-2xl py-2 lg:py-3 xl:py-4 px-4 md:px-10 gradient-experience ">
             
                <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl inter-semibold gradient-text">0<CountUp end={1} duration={3} />+</h2>
                    <h5 className="hidden md:block text-sm md:text-base lg:text-xl text-gray-500">Years Experiences</h5>
                    <h5 className="md:hidden text-sm md:text-base lg:text-xl text-gray-500">Experiences</h5>
                </div>
                <div className="flex flex-col items-center" data-aos="fade-left" data-aos-duration="1000">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl inter-semibold gradient-text"><CountUp end={20} duration={6} />+</h2>
                    <h5 className="text-sm md:text-base lg:text-xl text-gray-500">Projects completed</h5>
                </div>
        </div>
       </section>
    
    );
};

export default Experience;