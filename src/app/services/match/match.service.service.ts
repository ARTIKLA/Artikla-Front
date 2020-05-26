import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Autor } from 'src/app/entidades/autor';
import { RespuestaWS } from 'src/app/interfaces/respueta.ws';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { Editor } from 'src/app/entidades/editor';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private API_URL : string = "http://localhost:8080";
  
  constructor(private httpClient : HttpClient) {}

  // posiblesMatchAutores() : Observable<Array<Autor>> {
  //   return this.httpClient.get<Array<Autor>>(`${this.API_URL}/posiblesMatchT`)
  //     .pipe(map((response : Array<Autor>) => {
  //       return response;
  //   }));
  // }

  posiblesMatchArticulos(idEditor : number) : Observable<Array<Autor>> {
    return this.httpClient.post<Array<Autor>>(`${this.API_URL}/obtenerPosiblesMatchAutores`, idEditor)
      .pipe(map((response : Array<Autor>) => {
        return response;
    }));
  }

  getEditores() {
    return this.httpClient.get<Editor[]>(`${this.API_URL}/obtenerEditores`);
  }


}
