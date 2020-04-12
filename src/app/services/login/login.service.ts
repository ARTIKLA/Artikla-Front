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

  login(login : Login) {
    // let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    // let headers = new HttpHeaders();
    // headers.append('Content-Type','application/json');
    return this.httpClient.post<Login>(`${this.API_URL}/iniciarSesion`, 
        { nombreUsuario: login.NombreUsuario, passwordUsuario: login.PasswordUsuario })
      .pipe(map(response => {
        if(response != null) return response.Success;
        return false;
    }));
  }
}