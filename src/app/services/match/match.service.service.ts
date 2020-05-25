import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Autor } from 'src/app/entidades/autor';
import { RespuestaWS } from 'src/app/interfaces/respueta.ws';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';

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

  posiblesMatchArticulos() : Observable<Array<ArticuloDto>> {
    return this.httpClient.get<Array<ArticuloDto>>(`${this.API_URL}/traerArticulos`)
      .pipe(map((response : Array<ArticuloDto>) => {
        return response;
    }));
  }

}
