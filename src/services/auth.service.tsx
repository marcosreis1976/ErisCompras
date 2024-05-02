import axios from "axios";

import { API_URL } from '../constants/global'
import { UserType } from "../types/auth/auth";



export const register = (userName: string, password: string, filialUsuario: Number = 2) => {
  return axios.post(API_URL + "signup", {
    userName,
    password,
    filialUsuario,
  });
};

export const login = (userName: string, password: string, filialUsuario: any) => {
  return axios
    .post(API_URL + "/Usuarios/logarUsuario", {
        userName,
        password,
        filialUsuario,
    })
    .then((response) => {
      if (response.data.token) {
        const user:UserType = {
          userName: userName,
          filialUsuario: filialUsuario,
          token: response.data.token
        }
        localStorage.setItem("buy", JSON.stringify(user));
      }

      return response.data;
    });
}; 

export const logout = () => {

  localStorage.removeItem("buy");
 

};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("buy");
  if (userStr) return JSON.parse(userStr);

  return null;
}; 