import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Autor } from 'src/app/entidades/autor';
import { RespuestaWS } from 'src/app/interfaces/respueta.ws';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  private API_URL : string = "http://localhost:8080";
  
  constructor(private httpClient : HttpClient) {}

  registrarAutor(autor : Autor) : Observable<RespuestaWS> {
    return this.httpClient.post<RespuestaWS>(`${this.API_URL}/crearAutor`, autor)
      .pipe(map((response : RespuestaWS) => {
        return response;
    }));
  }

  registrarEditor(editor) : Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.API_URL}/crearEditor`, editor)
      .pipe(map((response : boolean) => {
        return response;
    }));
  }

}
