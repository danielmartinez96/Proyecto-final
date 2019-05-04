import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  logout() {
    throw new Error("Method not implemented.");
  }

  autenticado(){
    let usuario=localStorage.getItem("usuario");
     if(!usuario)return false;
     return true;
  }

  headers:HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers= new HttpHeaders({"Accept":"Application/json"});
   }

   login(email,password) {
     return this.http.post(environment.endpoint+"/user/login",{email:email,password:password},{headers:this.headers})
     .pipe(map(datos=>{return datos}));
   
   }

   token(){
    let usuario=localStorage.getItem("usuario");
    if(!usuario){
      return null;
  }

  let userJSON= JSON.parse(usuario)
  return userJSON["token_type"]+ " " +userJSON["access_token"];
  }
}
