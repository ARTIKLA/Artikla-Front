import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../services/articulos/articulo.service'
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { Categoria } from 'src/app/entidades/Categoria';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Output() backHome = new EventEmitter();



  articuloDto:ArticuloDto;
  categorias:Categoria[];

  public modulo : MODULOS;
  get MODULOS() { return MODULOS; };
 
  
  articulos:ArticuloDto[];
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){

    this.cargarArticulos();
    this.modulo = MODULOS.ARTICULOS_LISTAR;
    
  }
  
  cargarArticulos(){
    this.service.getArticulos()
    .subscribe(data=>{
      this.articulos = data;
      console.log(this.articulos);
    });
  }
  
  editarArticulo(articuloDto:ArticuloDto, categorias:Categoria[]):void{
    //localStorage.setItem("id", articuloDto.id.toString());
    console.log("articulo seleccionado  :"+ articuloDto.descripcion);
    console.log(categorias);
    this.articuloDto = articuloDto;
    this.categorias = categorias;
    this.modulo = MODULOS.ARTICULOS_EDITAR;
  }


  asignarModulo(modulo:MODULOS){
    this.modulo = modulo;
  }

  cerrarModal(modulo:MODULOS){
    this.modulo = modulo;
    this.cargarArticulos();
  }
  
}
