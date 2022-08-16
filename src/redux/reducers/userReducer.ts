import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { UserType } from "../../types";

const initialState: UserType = {
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

