import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";
import { TokenType } from "../../types";


const token = localStorage.getItem("token")
console.log(token);

const initialState : TokenType= {
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