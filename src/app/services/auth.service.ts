import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  setUserDetails(data:any){
    localStorage.setItem("token",data);
  }

  isUserLoggedIn(){
    return localStorage.getItem("token")
  }

 

}
