import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../services/articulos/articulo.service'
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { Categoria } from 'src/app/entidades/Categoria';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  articulos:ArticuloDto[];
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getArticulos()
    .subscribe(data=>{
      this.articulos = data;
    });
    
  }
  
}
