import { configureStore} from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {skillsApi} from "./api/skillsApi";
import { pagination } from "./slices/slice";

export const store = configureStore({
    reducer:{
        value:pagination,
        [skillsApi.reducerPath]: skillsApi.reducer
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(skillsApi.middleware)
})

setupListeners(store.dispatch)
