import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginE } from 'src/app/entidades/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL : string = "http://localhost:8080";
  
  constructor(private httpClient : HttpClient) {}

  login(user : LoginE){
    return this.httpClient.put<LoginE>(`${this.API_URL}/iniciarSesion`, user);
  }
}
