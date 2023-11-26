import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState={
    themeMode:'light'
}as any

export const themeSlice=createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        themeReducer:(state,action:PayloadAction<string|undefined>)=>{
            state.themeMode=action?.payload
        }
    }
})

export const {themeReducer}=themeSlice.actions
export default themeSlice.reducer