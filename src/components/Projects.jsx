import { GoArrowRight } from "react-icons/go";
import Container from './Container'
import { useGetProjectsQuery } from "../redux/features/projects/projectApi";


const Projects = () => {
  const { data } = useGetProjectsQuery();
  const projects = data?.data;

    return (
        <Container> 
             <section className="px-7 md:px-12 lg:px-20 mb-28">
              <h1 className=" text-[34px] lg:text-5xl text-gray-300 mb-16 rowdies-regular" data-aos="fade-right" data-aos-duration="1000">Latest Projects</h1>
            {/* grid  */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-6 ">
         
                {/* boxes  */}
        {projects?.map(project => 
                <div key={project._id} className="box space-y-6 gradient-project-card p-[1px] rounded-2xl">
                       
                       <section className="bg-[#0F1724] rounded-2xl  h-full">
                             {/* image part  */}
                        <div className="h-[200px] md:h-[190px] lg:h-[220px] xl:h-[280px] w-full rounded-lg">
                        <img src={project?.image}  className=" w-full h-full rounded-t-2xl object-cover object-top"/>
                        </div>

                           {/* text part  */}
                           <div className="p-5 lg:p-6 xl:p-7">
                                       <h3 className="gradient-text inter-bold text-[22px] mb-3">{project.title}</h3>
<h5 className="text-white/70 inter-thin-extra mt-2 text-sm">{project?.description} Technology : <b> {project?.technologies}</b></h5>
                                 
                                   {/* buttons  */}
                                   <section className="flex items-center gap-3 justify-between mt-6 md:mt-5 lg:mt-8 xl:mt-10">
                                  <a target="_blank" href={project?.live}>
                                  <div className=" rounded-full w-32 h-11 text-xl flex justify-center items-center gap-3 text-gray-200 gradient-background inter-medium shadow-lg shadow-[#23A3C8]/40 transition-all hover:brightness-110">
                                      <span className="text-xs lg:text-sm">Live preview</span> 
                                   </div>
                                  </a>

                                  <div className="rounded-full w-32 h-11 text-xl flex justify-center transition items-center gap-3 text-gray-200 hover:border-gray-400  inter-medium border border-gray-500 relative ">



                                  <div className="dropdown" >
       <span  tabIndex={0} role="button" className="text-xs lg:text-sm flex items-center gap-3">GitHub <GoArrowRight className="text-xl"/></span> 

<div tabIndex={0} className="dropdown-content rounded-full bg-[#0F1724] w-full h-full flex absolute inset-0 items-center justify-center gap-2">
                                        <a href={project?.client_code} target="_blank" className="text-gray-200 text-xs md:text-sm border-r pr-2 hover:text-cyan-500">Client</a>

                                        <a href={project?.server_code} target="_blank" className="text-gray-200 text-xs md:text-sm hover:text-cyan-500">Server</a>
                                      </div></div>

                                      
                                   </div>
                                
                                   </section>
                           </div>
                       </section>
                       </div>  )}

              </div>
        </section>
        </Container>
       

    );
};

export default Projects;



