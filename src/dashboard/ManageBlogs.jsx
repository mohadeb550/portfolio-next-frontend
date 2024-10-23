
import Container from '../components/Container';
import { toast } from 'sonner';
import { useCreateBlogMutation,useUpdateBlogMutation, useDeleteBlogMutation, useGetBlogsQuery } from '../redux/features/blogs/blogApi';
import { PiClockCounterClockwiseBold } from 'react-icons/pi';
import { useState } from 'react';


const UpdateBlogModal = ({blog, setOpen}) => {
  const [updateBlog ] = useUpdateBlogMutation();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form  = new FormData(e.target);

  const blogData = {
    title : form.get('title'),
    image :form.get('image'),
    description : form.get('description'),
  }

  console.log(blogData)

  try {
    const response =  await updateBlog({
      blogId : blog?._id,
      payload : blogData,
    }).unwrap();

  if(response?.success){
    // close the modal 
    setOpen(false)
    // show a toast 
    toast.success('Updated the blog')
  }
  }catch(error){
    toast.error('Something went wrong')
    console.log(error)
  }
  }

  return (
    <section className="w-screen fixed top-0 left-0 right-0 bottom-0 z-50  bg-black/20 backdrop-blur-sm flex justify-center py-10 overflow-y-auto px-4">  
       
       <form className="w-full md:w-[700px] h-fit md:p-2 bg-white rounded-md relative" onSubmit={onSubmit}>


<div className="p-6 space-y-6">
      {/* Title Input */}
      <div className="flex items-center space-x-3">
        <input name='title'
          type="text"
          defaultValue={blog?.title}
          placeholder="Post Title"
          className="w-full p-3 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    </div>

<div className="p-6 space-y-6">
      {/* Title Input */}
      <div className="flex items-center space-x-3">
        <textarea name='description'
          type="text"
          defaultValue={blog?.description}
          className="w-full p-3 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    </div>

<div className="p-6 space-y-6">
      {/* Title Input */}
      <div className="flex items-center space-x-3">
        <input name='image'
        defaultValue={blog?.image}
          type="text"
          className="w-full p-3 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    </div>
       


<button type="submit" className="px-8 text-sm lg:text-base mb-5 md:mb-4
 mx-3 py-2 md:py-2 font-semibold text-white rounded transition bg-blue-600 hover:bg-blue-700 ">Modify</button>

<button onClick={() => setOpen(false)} className="px-8 text-sm lg:text-base mr-3 py-2 md:py-2 font-semibold text-gray-600 rounded transition bg-gray-200 hover:bg-gray-300 "> Close </button>
</form>
       
       </section>
  )
}












const ManageBlogs = () => {
  const [ createBlog, { isLoading }] = useCreateBlogMutation();
  const [ deleteBlog ] = useDeleteBlogMutation();
  const [ updateModal, setUpdateModal ] = useState(false)
  const [ updatedBlog, setUpdatedBlog ] = useState({})
  const { data } = useGetBlogsQuery();
  const blogs = data?.data;
  

  const handleLogin = async (e) => {
    e.preventDefault();

    const form  = new FormData(e.target);

    const newBlog = {
        image :form.get('image'),
        title : form.get('title'),
        description : form.get('description'),
        time : new Date().toISOString()
    }

    try {
        const response =  await createBlog(newBlog).unwrap();
    
      if(response?.success){
        // show a toast 
        toast.success('You added a new blog')
      }
      }catch(error){
        toast.error('Something went wrong')
        console.log(error)
      }
}

 const handleDeleteBlog = (blogId) => {
      const result =   confirm('Decorated blog! ARe you sure to delete?')
      result && deleteBlog(blogId)
        
      }

  return (
  <Container>
      <div className=" bg-[#0F1724] text-white flex flex-col justify-center items-center px-10 md:px-16 mt-1 lg:mt-6">
      <h1 className=" text-xl md:text-2xl lg:text-3xl rowdies-regular gradient-text mb-2 text-right md:text-left mt-3 md:mt-0">Add a Blog</h1>
     

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row md:space-x-8 w-full bg-[#0F1724] rounded-lg shadow-lg">
        {/* Form */}
        <div className="w-full">
          <form onSubmit={handleLogin}  className="space-y-5">
          
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Title</label>
              <input
              name='title'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Image</label>
              <input
              name='image'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="URL"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Description</label>
              <textarea
              name='description' rows={7}
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Description"
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
      <h1 className=" text-xl md:text-2xl lg:text-3xl rowdies-regular gradient-text mb-2 text-right md:text-left mt-16">Manage Blogs </h1>
  {/* grid  */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-6 mt-16">
         
  {/* boxes  */}
  {blogs?.map(blog => 
                <div key={blog._id} className="box space-y-6  p-[1px] rounded-2xl relative group">

                   {/* call the modal  */}
        {updateModal && <UpdateBlogModal blog={updatedBlog} setOpen={setUpdateModal} />}

<div className='hidden group-hover:block absolute inset-0 h-full w-full bg-white/10 backdrop-blur-sm rounded-xl'>
        <button onClick={()=> {
          setUpdatedBlog(blog)
          setUpdateModal(true);
        }} className='bg-slate-700 p-2 mr-2'>Edit</button>

        <button className='bg-slate-700 p-2 mr-2' onClick={()=> handleDeleteBlog(blog._id)}>Delete</button>
        </div>
                       
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
                       </div>  )}

       </div>
    </div>
  </Container>
  );
};

export default ManageBlogs;
