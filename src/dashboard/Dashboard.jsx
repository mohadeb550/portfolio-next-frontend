import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <ul className="flex items-center gap-5 justify-center bg-purple-950  max-w-[1400px] mx-auto p-5 rounded-md">

            <li  data-aos="fade-left" data-aos-duration="1000"  ><NavLink className={({isActive})=> isActive? 'inter-bold text-cyan-500 px-3 py-[3px] rounded ': 'transition-all text-gray-200' } to='/dashboard/projects'>Projects </NavLink></li>

   <li  data-aos="fade-left" data-aos-duration="1000"  ><NavLink className={({isActive})=> isActive? 'inter-bold text-cyan-500 px-3 py-[3px] rounded ': 'transition-all text-gray-200' } to='/dashboard/blogs'  >Blogs</NavLink></li>

   <li  data-aos="fade-left" data-aos-duration="1000"  ><NavLink className={({isActive})=> isActive? 'inter-bold text-cyan-500 px-3 py-[3px] rounded ': 'transition-all text-gray-200' } to='/dashboard/skills'  >Skills</NavLink></li>

            </ul>

            {/* content  */}
            <Outlet/>
        </div>
    );
};

export default Dashboard;