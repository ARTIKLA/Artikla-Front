import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL : string = "";
  
  constructor(private httpClient : HttpClient) {}

  login(user : Login){
    return this.httpClient.post<Login>(`${this.API_URL}/Api/Login`, user)
    .pipe(map(response => {
      if(response.Success)
        return response;
    }))
  }
}
