
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const DrawerNav = () => {

  const navLinks = <>

{/* className={({isActive})=> isActive? 'inter-bold gradient-text px-3 py-[3px] rounded ': 'transition-all hover:text-[#3A94CB]' } */}

  <li ><NavLink to='/'className={({isActive})=> isActive? 'inter-bold gradient-text rounded ': 'text-gray-300 transition-all hover:text-[#3A94CB]' } >Home</NavLink></li>
  
  <li ><NavLink to='/' className={({isActive})=> isActive? ' rounded hover:text-[#3A94CB] text-gray-300 transition-all ': 'text-gray-300' } >About me</NavLink></li>

  <li ><NavLink to='/projects' className={({isActive})=> isActive? 'inter-bold gradient-text rounded ': 'text-gray-300 transition-all hover:text-[#3A94CB]' } >Projects</NavLink></li>

  <li ><NavLink to='/contact-me'className={({isActive})=> isActive? 'inter-bold gradient-text rounded ': ' text-gray-300 transition-all hover:text-[#3A94CB]' } >Contact me</NavLink></li>
 
 </>

    return (
        <>
          {/* daisy ui drawer  */}
    <div className="drawer z-40 ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
   
  <div className="drawer-side">
    {/* close button for drawer outside  */}
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

      {/* for blur  */}
      <section className="bg-white/5 backdrop-blur-sm fixed w-full h-full"></section>

    <div className={`menu p-4 w-52 md:w-60 min-h-full gradient-background-sidebar`}>
   {/* Drawer content here */}

         {/* for right border  */}
         <div className="gradient-background w-3 h-full fixed -right-2 lg:right-0 top-0 opacity-10"> </div>

      {/* close button inside drawer  */}
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay flex justify-end p-2 text-gray-300"><AiOutlineClose size={21}/> </label>

      <div className="flex items-center gap-2 mt-2 mb-6">
      <div className="flex items-center gap-1" >
<h2 className={`text-base inter-bold  md:text-lg whitespace-nowrap gradient-text`}>Never Lose Hope </h2>
</div>
    </div>
    
    <div className="flex flex-col gap-4 inter-thin">
     {navLinks}
    </div>

    </div>
  </div>
</div>
        </>
    );
};

export default DrawerNav;