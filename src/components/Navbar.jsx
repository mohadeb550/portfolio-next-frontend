import { NavLink, useNavigate } from "react-router-dom"
import logo from '../assets/my-logo.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import DrawerNav from "./DrawerNavbar";
import { TbMenuDeep } from "react-icons/tb";
import { BiLogInCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { MdDashboardCustomize } from "react-icons/md";
import { IoArrowRedoOutline } from "react-icons/io5";
import { logout } from "../redux/features/authentication/authSlice";
import { toast } from "sonner";
import { FaUserLock } from "react-icons/fa6";



export default function Navbar() {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutUser = () => {
    dispatch(logout())
    toast.success('Logout Successfully!');
     navigate('/')
     }
    

  
  const navLinks = <>
   <li  data-aos="fade-left" data-aos-duration="1000"  ><NavLink className={({isActive})=> isActive? 'inter-bold gradient-text px-3 py-[3px] rounded ': 'transition-all hover:text-[#3A94CB]' } to='/'>Home </NavLink></li>
   <li  data-aos="fade-left" data-aos-duration="1000"  ><NavLink className={({isActive})=> isActive? 'inter-bold gradient-text px-3 py-[3px] rounded ': 'transition-all hover:text-[#3A94CB]' } to='/projects'  >Projects</NavLink></li>
   <li  data-aos="fade-right" data-aos-duration="1000"  ><NavLink className='px-3 py-[3px] rounded text-gray-300' to='/' >About me </NavLink></li>
   <li  data-aos="fade-right" data-aos-duration="1000"  ><NavLink className={({isActive})=> isActive? 'inter-bold gradient-text px-3 py-[3px] rounded ': 'transition-all hover:text-[#3A94CB]' } to='/contact-me'  >Contact </NavLink></li>

  </>

  return (
    <div className={`navbar max-w-[1400px] mx-auto  flex justify-between p-6 md:p-7`}>
      
  <div className="navbar-start z-50 w-fit" >
    <div  data-aos="fade-right" data-aos-duration="1000"  className="dropdown z-50">
    
      {/* label for opening daisy ui drawer that component has another file  */}
    <label htmlFor="my-drawer" className={`lg:hidden text-[22px] md:text-2xl`}> <TbMenuDeep className="text-gray-200"/> </label>
    <DrawerNav/>


    </div>
    <div className="flex items-center gap-4 px-8 " data-aos="fade-right" data-aos-duration="1000">
    {/* <img src={logo} className="w-10 md:w-12 lg:w-[55px]"/> */}
    <p className="text-[20px]  md:text-xl lg:text-2xl gradient-text rowdies-light  whitespace-nowrap border-r border-[#7F6AD4]/80 rounded pr-4"> Mohadeb </p>
    </div>
  </div>

  <div className="navbar-center hidden lg:flex gap-24 px-10" >
    <ul className="flex items-center gap-6 lg:gap-10 xl:gap-14 menu-horizontal px-1 text-white/80 inter-thin">
      {navLinks}
    </ul>
 
  </div>

 
  {/* logo  */}
  <div className="flex text-xl md:text-2xl gap-3 md:gap-4 xl:gap-6" data-aos="fade-left" data-aos-duration="1000">
    <a href="https://www.linkedin.com/in/mohadeb550" target="_blank" className="text-gray-200"> <FaLinkedin/> </a>
    <a href="https://github.com/mohadeb550" target="_blank" className="text-gray-200"> <FaGithub/> </a>

    <div className="dropdown dropdown-end flex items-center justify-center gap-2">
    
    {!user && <a href="/login" className="text-gray-200"> <BiLogInCircle/> </a>}
    

    <div className={`z-50 w-8 md:w-9 rounded-full p-[2px]  ${!user && 'hidden'}`}>
      {user && <img alt="profile" tabIndex={0} src={user?.image || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="dropdown size-8 lg:size-8 object-cover cursor-pointer rounded-full border border-zinc-400 p-[1px]" />}

      {user && 
     <ul tabIndex={0} className={`dropdown-content z-50 p-3 mt-1 shadow-2xl bg-[#162030] rounded-lg w-60`}>
      {user && <li className="text-lg p-2 border-b font-semibold  gradient-text flex items-center gap-2"> {user?.name || 'User'}  <img alt="profile" tabIndex={0} src={user?.image || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="w-8 h-8 object-cover rounded-full border border-gray-300 p-[1px]" /></li>}
    
     <a href={'/dashboard/projects'}>
     <li className="text-base font-semibold cursor-pointer transition-all text-gray-200 p-1 rounded hover:text-cyan-500 flex items-center gap-2" ><MdDashboardCustomize /> Dashboard</li> </a>
    

     <li onClick={logoutUser} className="text-base font-semibold cursor-pointer transition-all text-gray-200 p-1 rounded hover:text-cyan-500 flex items-center gap-2" > <IoArrowRedoOutline/> Log out</li> 

    </ul>}
    </div>
 
</div>
  </div>

</div>
  )
}
