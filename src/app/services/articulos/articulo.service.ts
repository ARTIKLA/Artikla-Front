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

  getArticulosAutor(id : Number){
    console.log(id);
    return this.http.post<Array<ArticuloDto>>(`${this.API_URL}/obtenerArticulosAutor`, id)
    .pipe(map((articulosAutor : Array<ArticuloDto>) => {
      return articulosAutor;
    }));
  }

  crearArticulo(articulo:ArticuloDto){
   
    return this.http.post<string>(`${this.API_URL}/agregarArticulo`, articulo)
    .pipe(map((response : string) => {
      console.log(articulo);
      return response;
      
  }));
  }

  getArticuloById(id:number){
       return this.http.get<ArticuloDto>(`${this.API_URL}/buscarArticulo/${id}` )
  }

  editarArticulo(articulo:ArticuloDto){
    return this.http.put<ArticuloDto>(this.API_URL+"/editarArticulo/", articulo);
  }

  eliminarArticulo(articulo:ArticuloDto){
  }

  getCategorias() {
    return this.http.get<Categoria[]>(`${this.API_URL}/obtenerCategorias`);
  }



}
