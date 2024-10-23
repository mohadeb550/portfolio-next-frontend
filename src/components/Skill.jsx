import { useGetSkillsQuery } from '../redux/features/skills/skillApi';
import Container from './Container'


const Skill = () => {
    const { data } = useGetSkillsQuery();
    const skills = data?.data;

    return (
      <Container>
          <section className=" px-7 md:px-12 lg:px-20 lg:my-7 xl:my-16">

<h1 className=" text-[34px] md:text-4xl lg:text-5xl pb-14  text-gray-300 mb-3 rowdies-regular" data-aos="fade" data-aos-duration="1000">Technologies</h1>

    <section className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-y-14 gap-x-3 mt-6" data-aos="fade-up" data-aos-duration="500">

    {skills?.map((skill, index) => 

<div key={index} className="flex flex-col justify-between gap-4" data-aos={skill?.transition} data-aos-duration="1000">
    <img src={skill?.logo} className='w-14 md:w-14 lg:w-16 xl:w-20 mx-auto ' />
    <p className=" text-gray-300 text-sm md:text-base xl:text-lg text-center uppercase inter-medium">{skill?.name}</p>
   
</div>)}
    </section>
</section>
      </Container>
    );
};

export default Skill;




[
    {
        "name": "Next JS",
        "logo": "https://i.ibb.co.com/VCmGCdR/Screenshot-903-removebg-preview-1.png",
        "transition": "fade-right"
    },
    {
        "name": "Typescript",
        "logo": "https://i.ibb.co/zmRydb5/pngegg-16.png",
        "transition": "fade-up"
    },
    {
        "name": "Redux",
        "logo": "https://i.ibb.co/rvxvQk6/pngwing-com-45.png",
        "transition": "fade-down"
    },
    {
        "name": "React",
        "logo": "https://i.ibb.co.com/C1Hbk6j/pngwing-com-31.png",
        "transition": "fade-down"
    },
    {
        "name": "Javascript",
        "logo": "https://i.ibb.co/MMGGN8y/pngegg-6.png",
        "transition": "fade-up"
    },
    {
        "name": "Tailwind Css",
        "logo": "https://i.ibb.co.com/XDbcJnG/pngwing-com-24.png",
        "transition": "fade-up"
    },
    {
        "name": "CSS3",
        "logo": "https://i.ibb.co.com/MPcLZL2/pngwing-com-25.png",
        "transition": "fade-up"
    },
    {
        "name": "Node js",
        "logo": "https://i.ibb.co/cN8F01y/pngwing-com-27.png",
        "transition": "fade-up"
    },
    {
        "name": "Express",
        "logo": "https://i.ibb.co/yY5Jrx5/102express.png",
        "transition": "fade-down"
    },
    {
        "name": "Mongo db",
        "logo": "https://i.ibb.co/8Y1Fn1y/mongodb-original-logo-icon-146424.png",
        "transition": "fade-up"
    },
    {
        "name": "Firebase",
        "logo": "https://i.ibb.co/P1DMyZS/pngwing-com-30.png",
        "transition": "fade-up"
    },
    {
        "name": "jwt token",
        "logo": "https://i.ibb.co/JsTdnwZ/image.png",
        "transition": "fade-down"
    }
]