import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../services/articulos/articulo.service'
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { Categoria } from 'src/app/entidades/Categoria';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { StatusPage } from 'src/app/helpers/status_page';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  @Output() backHome = new EventEmitter();
  articuloDto:ArticuloDto;
  categorias:Categoria[];
  public status : StatusPage;

  public modulo : MODULOS;
  get MODULOS() { return MODULOS; };
 
  
  articulos:ArticuloDto[];
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.status = new StatusPage(this.router);
    this.cargarArticulos();
    this.modulo = MODULOS.ARTICULOS_LISTAR;
  }
  
  cargarArticulos(){
    this.service.getArticulosAutor(this.status.obtenerUsuarioLocalStorage().id).subscribe(data=>{
      this.articulos = data;
      console.log(this.articulos);
    }, error => {
      console.log(error);
    });
  }
  
  editarArticulo(articuloDto:ArticuloDto, categorias:Categoria[]):void{
    console.log(categorias);
    this.articuloDto = articuloDto;
    this.categorias = categorias;
    this.modulo = MODULOS.ARTICULOS_EDITAR;
  }


  asignarModulo(modulo:MODULOS){
    this.modulo = modulo;
  }

  eliminarArticulo(articuloEliminar : ArticuloDto) {
    this.status.modalInfo.listaMensajes = ["¿Estás seguro de que deseas eliminar tú artículo?", 
    "<strong>"+articuloEliminar.titulo+"</strong>"]
    this.status.modalInfo.confirmacion = true;
    this.status.showModal();
    
    console.log(articuloEliminar);
  }

  cerrarModal(modulo:MODULOS){
    this.modulo = modulo;
    this.cargarArticulos();
  }
  
}

