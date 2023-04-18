import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const skillsApi = createApi({
    reducerPath:"skill",
    tagTypes:["users"],
    baseQuery:fetchBaseQuery({
        baseUrl:"https://orchestra.maprecruit.com"
    }),
    endpoints:(builder)=>({
        getSkills:builder.query({
            query:()=>({
                    url:"/sampleskillsdata",
                    method:"GET"
            }),    
        }),
        provideTags:["users"]
       })  
})

export const {useGetSkillsQuery} = skillsApi
