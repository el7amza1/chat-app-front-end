import React from 'react'
import axios from 'axios'
export const api = axios.create({baseURL: "http://localhost:4000"})
export const signUp = (data:any)=> api.post("/users/signup", data )
export const loginUser = (data:any)=> api.post("/users/login",data)
export const authUser = (token:any)=> api.get('/users/me',token)