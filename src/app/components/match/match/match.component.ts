import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match/match.service.service';
import { Autor } from 'src/app/entidades/autor';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  public articulosMatch : Array<ArticuloDto>;
  public mostrarMatch : boolean = false;
  
  constructor(public _matchService : MatchService) { }

  ngOnInit(): void {
    this.obtenerMatchAutores();
  }

  obtenerMatchAutores() {
      this._matchService.posiblesMatchArticulos().subscribe((autores : Array<ArticuloDto>) => {
        this.articulosMatch = autores;
        console.log(this.articulosMatch);
        this.mostrarMatch = true;
      }, error => {
        console.log(error);
      });
  }
}
