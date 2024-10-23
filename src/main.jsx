import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx';
import { Toaster } from 'sonner'
import Login from './pages/Login.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux'
import Dashboard from './dashboard/Dashboard.jsx';
import ManageBlogs from './dashboard/ManageBlogs.jsx';
import ManageProjects from './dashboard/ManageProjects.jsx';
import ManageSkills from './dashboard/ManageSkills.jsx';
import BlogDetails from './pages/BlogDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children : [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'projects',
        element: <Projects/>
      },
      {
        path: 'about-me',
        element: <Projects/>
      },
      {
        path: 'contact-me',
        element: <Contact/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'blogs/:id',
        element: <BlogDetails/>
      },
      {
        path: 'dashboard',
        element: <Dashboard/>,
        children : [
          {
            path :'blogs',
            element : <ManageBlogs/>
          },
          {
            path :'projects',
            element : <ManageProjects/>
          },
          {
            path :'skills',
            element : <ManageSkills/>
          },
        ]
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-center"/>
    
    <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
     
  </React.StrictMode>,
)
