import { createSlice } from "@reduxjs/toolkit";


const token = localStorage.getItem("token")
console.log(token);

const initialState = {
    token : token !== null ? JSON.parse(token ) : ""
}
export const authToken = createSlice({
    name: "auth",
    initialState,
    reducers:{
        getToken: (state,action )=>{
            state.token = action.payload
        }
    }
})

export const {getToken} = authToken.actions;

export default authToken.reducer