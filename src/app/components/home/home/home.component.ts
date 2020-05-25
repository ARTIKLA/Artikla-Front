import { Component, OnInit } from '@angular/core';

import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  get MODULOS() { return MODULOS; };
  public modulo : MODULOS;
  public articuloDto:ArticuloDto;

  constructor() { }

  ngOnInit(): void {
    this.modulo = MODULOS.MATCH;
  }

  asignarModulo(modulo: MODULOS){
    console.log(modulo);
    this.modulo = modulo;
  }

  editarArticulo(modulo: MODULOS, articuloDto:ArticuloDto){
    this.modulo = modulo;
    this.articuloDto = articuloDto;

  }

}
