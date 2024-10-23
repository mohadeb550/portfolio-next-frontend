
import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import {  persistReducer,  persistStore,  FLUSH,  REHYDRATE,  PAUSE,
    PERSIST,  PURGE, REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authentication/authSlice'


const persistConfig = {
    key: 'auth',
    storage,
  };
  
  const persistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer : {
        [baseApi.reducerPath] : baseApi.reducer,
        auth: persistedAuthReducer,
    },
    middleware : (getDefaultMiddlewares) =>  getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
    
})


export const persistor = persistStore(store);