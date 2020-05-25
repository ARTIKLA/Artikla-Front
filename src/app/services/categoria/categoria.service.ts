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


  constructor(private http:HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(`${this.API_URL}/obtenerCategorias`);
  }

}
