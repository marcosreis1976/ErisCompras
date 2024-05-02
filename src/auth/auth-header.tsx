import { UserType } from "../types/auth/auth";
export const authHeader =() =>{
    const userStr = localStorage.getItem("buy");
    let user = null;
    if (userStr)
      user = JSON.parse(userStr);
  
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token }; 
    } else {
      return { Authorization: '' }; 
    }
  }

export const userData = ():UserType =>{

  let user:any = localStorage.getItem("buy");
  return JSON.parse(user)

}

