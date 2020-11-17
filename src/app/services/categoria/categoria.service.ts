import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticuloDto } from '../../entidades/ArticuloDto';
import { Categoria } from '../../entidades/Categoria';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL : string = "https://artikla-back-end.azurewebsites.net";


  constructor(private http:HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(`${this.API_URL}/obtenerCategorias`);
  }

}
