import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/articulos/articulo.service';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { Categoria } from 'src/app/entidades/Categoria';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {


  public ArticuloDto : FormGroup;
  constructor(public formBuilder : FormBuilder, private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.ArticuloDto = this.formBuilder.group({
      titulo: ['',[]],
      descripcion: ['', []],
    });
  }

  guardarArticulo(){
    console.log(this.ArticuloDto);
    this.service.crearArticulo(this.ArticuloDto.getRawValue()).subscribe(data=>{
      alert("Articulo agregado con éxito");
      this.router.navigate(["articulos/listar"]);
    }, e   =>{
      console.log(e);
    });
  }
}
