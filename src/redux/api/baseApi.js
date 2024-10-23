import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery : fetchBaseQuery({

        baseUrl : 'https://my-portfolio-backend-pearl.vercel.app',

        prepareHeaders: (headers, { getState }) => {
            const token = (getState()).auth.token;
        
            if (token) {
              headers.set('authorization', `Bearer ${token}`);
            }
        
            return headers;
          },
    }),
    
    tagTypes: ['Skills', 'Skill','Projects', 'Project','Blogs', 'Blog' ],
    endpoints: () => ({})
})

export default baseApi;