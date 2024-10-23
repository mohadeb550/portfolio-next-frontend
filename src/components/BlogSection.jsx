
import Container from './Container'
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { useGetBlogsQuery } from '../redux/features/blogs/blogApi';
import { Link } from 'react-router-dom';


const BlogSection = () => {
  const { data } = useGetBlogsQuery();
  const blogs = data?.data;

    return (
        <Container> 
             <section className="px-7 md:px-12 lg:px-20 mt-32  xl:mb-16  rounded-xl ">
              <h1 className=" text-[34px] lg:text-5xl text-gray-300 mb-16 rowdies-regular" data-aos="fade-right" data-aos-duration="1000">Latest Blogs</h1>
            {/* grid  */}
              <div className="grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-6 ">
         
                {/* boxes  */}
        {blogs?.map(blog => 
                <Link key={blog._id} to={`/blogs/${blog._id}`}>
                <div  className="box space-y-6  p-[1px] rounded-2xl">
                       
                       <section className="bg-[#0F1724] rounded-2xl  h-full">
                             {/* image part  */}
                        <div className="h-[200px] md:h-[190px] lg:h-[220px] xl:h-[300px] w-full rounded-lg">
                        <img src={blog?.image}  className=" w-full h-full rounded-xl object-cover object-top"/>
                        </div>

                           {/* text part  */}
                           <div className="py-5 lg:py-6 xl:py-7">
                                       <h3 className="text-gray-300 inter-regular lg:text-xl mb-3 ">{blog.title}</h3>
                                 
                                <time className="flex items-center gap-2 text-gray-400 "> <PiClockCounterClockwiseBold className="text-xl"/> {new Date(blog?.time).toDateString()} </time>
                           </div>
                       </section>
                       </div></Link>  )}

              </div>
        </section>
        </Container>
    );
};

export default BlogSection;



