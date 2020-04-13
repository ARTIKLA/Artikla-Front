import { Component, OnInit } from '@angular/core';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  get MODULOS() { return MODULOS; };
  public modulo : MODULOS;
  constructor() { }

  ngOnInit(): void {
    this.modulo = MODULOS.MATCH;
  }

}
