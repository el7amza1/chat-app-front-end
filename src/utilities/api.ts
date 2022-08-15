
import React from "react";
import axios from "axios";
export const api = axios.create({ baseURL: "http://localhost:4001" });
export const signUp = (data: any) => api.post("/users/signup", data);
export const loginUser = async (data: any) => {
  try {
    const res = await api.post("/users/login", data);
    return res;
  } catch (e) {
    console.log(e);
    alert("email or password not valid")

  }
};
export const authUser = (token: any) => api.get("/users/me", token);

