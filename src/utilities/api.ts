import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
export const api = axios.create({ baseURL: "http://localhost:4001" });
export const signUp = (data: any) => api.post("/users/signup", data);
export const loginUser = async (data: any, navigate :NavigateFunction) => {
  try {
    const res = await api.post("/users/login", data);
    localStorage.setItem("token", (res?.data.token))
    console.log(res?.data.token);

    if (res.status === 200){
      navigate("/home",{replace:true})
      
    }else{
      navigate("/login")
    }
    return res;
  } catch (e) {
    console.log(e);

    alert("email or password not valid")
  }
};
export const authUser = (token: any) => api.get("/users/me", token);

