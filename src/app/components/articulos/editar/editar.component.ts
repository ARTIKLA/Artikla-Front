import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/articulos/articulo.service';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { Categoria } from 'src/app/entidades/Categoria';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() articuloEditar : ArticuloDto;
  @Input() categoriasEditar:Categoria[];

  @Output() backHome = new EventEmitter();
   modulo:MODULOS;

  
  get MODULOS() { return MODULOS; };

  articuloDto:ArticuloDto;
  categorias:Categoria[];

  ArticuloDto : FormGroup;
  categoriasActualizar: Categoria[];
  

  constructor(public formBuilder: FormBuilder, private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    console.log(this.modulo);
    console.log("modulo :" +this.modulo)
    window.scrollTo(0,0);
    
    this.ArticuloDto = this.formBuilder.group({
      titulo: [this.articuloEditar.titulo,[]],
      descripcion: [this.articuloEditar.descripcion, []],
      categorias: [this.formBuilder.group({
        
      }), []]
    });

    this.service.getCategorias().subscribe(categorias =>{
      this.categorias = categorias;
    });

  }
  


filtrarCategoriasSeleccionadas(categoria:Categoria){
  
  if(this.categoriasEditar.find(a => a.id == categoria.id) == undefined){
    return false;
  }else{

    return true;
  }

}


  cerrarModalEditar(modulo:MODULOS){
    this.modulo= modulo;
   // this.backHome.emit(2);
   this.backHome.emit(MODULOS.ARTICULOS_LISTAR);
  }

  actualizarArticulo(articuloEditar:ArticuloDto):void{

    this.service.editarArticulo(articuloEditar).subscribe(data=>{
      this.articuloDto = data;
    });
    this.cerrarModalEditar(MODULOS.ARTICULOS_LISTAR);
    alert("Se actualizo el articulo correctamente");

  }

}
