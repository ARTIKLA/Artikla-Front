import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticuloDto } from '../../entidades/ArticuloDto';
import { Categoria } from '../../entidades/Categoria';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL : string = "http://localhost:8080";
  articulo:ArticuloDto[];

  constructor(private http:HttpClient) { }

  getArticulos(){
    return this.http.get<ArticuloDto[]>(`${this.API_URL}/traerArticulos`);
  }

  crearArticulo(articulo:ArticuloDto){
    console.log(articulo);
    return this.http.post<boolean>(`${this.API_URL}/agregarArticulo`, articulo).pipe(map((response : boolean) => {
      return response;
  }));
  }

  eliminarArticulo(articulo:ArticuloDto){

  }



}
