import { Injectable } from '@angular/core';
import {HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
token:any;
  constructor(private http:HttpServiceService) { }

  register(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
  return this.http.postservice('https://localhost:44321/api/User/Register',data,false,header);
  }
  login(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
  return this.http.postservice('https://localhost:44321/api/User/Login',data,false,header);
  }
  resetpassword(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
  return this.http.postservice('https://localhost:44321/api/User/ResetPassword',data,true,header);
  }
  forgetpassword(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
  return this.http.postservice('https://localhost:44321/api/User/Forgetpassword?emailId='+data.emailId,data,false,header);
  }
}
