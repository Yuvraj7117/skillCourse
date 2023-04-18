import { createSlice } from "@reduxjs/toolkit";

let initialState={
    perPage:10,
    currentPage:1,
    numberOfPages:"",
    shownItem :"",
    numberOfPagination : [],
    lastPage : "",
    firstPage:""
}
const pageSlice = createSlice({
    name:"pagination",
    initialState:initialState,
    reducers:{
        pagination:(state,action)=>{
            return(
                state.currentPage=action.payload.currentPage
            )
        }
    }

})


export const {pagination} = pageSlice.actions;
export default pageSlice.reducer