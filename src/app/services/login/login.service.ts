import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Login } from 'src/app/entidades/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL : string = "http://localhost:8080";
  
  constructor(private httpClient : HttpClient) {}

  login(login : Login) : Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.API_URL}/iniciarSesion`, login)
      .pipe(map((response : boolean) => {
        return response;
    }));
  }
}