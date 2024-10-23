
import Container from '../components/Container';
import { toast } from 'sonner';
import { useCreateSkillMutation, useDeleteSkillMutation, useGetSkillsQuery } from '../redux/features/skills/skillApi';


const ManageSkills = () => {
  const [ createSkill, { isLoading }] = useCreateSkillMutation();
  const [ deleteSkill ] = useDeleteSkillMutation();
  const { data } = useGetSkillsQuery();
  const skills = data?.data;
  

  const handleLogin = async (e) => {
    e.preventDefault();

    const form  = new FormData(e.target);
    const name = form.get('name')
    const logo = form.get('logo')
    const transition = form.get('transition')


    try {
        const response =  await createSkill({
            name, logo, transition
        }).unwrap();
    
      if(response?.success){
        // show a toast 
        toast.success('You added a new skill')
      }
      }catch(error){
        toast.error('Something went wrong')
        console.log(error)
      }
}

const handleDeleteSkill = (skillId) => {
  const result =   confirm('Decorated skill! ARe you sure to delete?')
  result && deleteSkill(skillId)
    
  }


  return (
  <Container>
      <div className=" bg-[#0F1724] text-white flex flex-col justify-center items-center px-10 md:px-16 mt-1 lg:mt-6">
      <h1 className=" text-xl md:text-2xl lg:text-3xl rowdies-regular gradient-text mb-2 text-right md:text-left mt-3 md:mt-0">Add a skill</h1>
     

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row md:space-x-8 w-full bg-[#0F1724] rounded-lg shadow-lg">
        {/* Form */}
        <div className="w-full">
          <form onSubmit={handleLogin}  className="space-y-5">
          
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Technology Name</label>
              <input
              name='name'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Logo URL</label>
              <input
              name='logo'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="URL"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">AOS transition</label>
              <input
              name='transition'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="AOS Transition"
              />
            </div>
    
            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-[#9071E9] to-[#2DAEDD] rounded-lg font-semibold hover:from-[#2DAEDD] hover:to-[#9071E9]  ">
             {isLoading?'Adding...': 'Add'}
            </button>
          </form>
        </div>

      </div>


        {/* Manage */}
      <h1 className=" text-xl md:text-2xl lg:text-3xl rowdies-regular gradient-text mb-2 text-right md:text-left mt-16">Manage Skills </h1>
      <section className="w-full px-7 md:px-12 lg:px-20 lg:my-7 xl:my-16">


    <section className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-y-14 gap-x-3 mt-6" >

    {skills?.map((skill, index) => 

<div key={index} className="flex flex-col justify-between gap-4 relative group" >

        <div className='hidden group-hover:block absolute inset-0 h-full w-full bg-white/10 backdrop-blur-sm rounded-xl'>
        <button className='bg-slate-700 p-2 mr-2' onClick={()=> toast.error('Something went wrong')} >Edit</button>
        <button className='bg-slate-700 p-2 mr-2' onClick={()=> handleDeleteSkill(skill?._id)}>Delete</button>
        </div>

    <img src={skill?.logo} className='w-14 md:w-14 lg:w-16 xl:w-20 mx-auto ' />
    <p className=" text-gray-300 text-sm md:text-base xl:text-lg text-center uppercase inter-medium">{skill?.name}</p>
   
</div>)}
    </section>
</section>
    </div>
  </Container>
  );
};

export default ManageSkills;
