import { createSlice } from "@reduxjs/toolkit"

const initialState={
    userData:{}
}as any

export const authSlice=createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        userLogin:(state,action)=>{
            state.userData=action.payload
        }
    }
})

export const {userLogin}=authSlice.actions
export default authSlice.reducer