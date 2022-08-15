import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { User } from "../../types";

const initialState: User = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state = action.payload;
    },
    logout:()=>{
    
    }
  },
});

export const { getUser } = userReducer.actions;
export default userReducer.reducer;

