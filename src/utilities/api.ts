
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const api = axios.create({ baseURL: "http://localhost:4001" });
export const signUp = (data: any) => api.post("/users/signup", data);
export const loginUser = async (data: any) => {


  try {
    const res = await api.post("/users/login", data);
    localStorage.setItem("token", (res?.data.token))
    console.log(res?.data.token);
    return res;
  } catch (e) {
    console.log(e);
    // alert("email or password not valid")
  }
};
export const authUser = (token: any) => api.get("/users/me", token);

