import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match/match.service.service';
import { Autor } from 'src/app/entidades/autor';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { StatusPage } from 'src/app/helpers/status_page';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { TIPO_USUARIO } from 'src/app/helpers/Constantes/Enums/usuarios';
import { Editor } from 'src/app/entidades/editor';

@Component({
  selector: 'app-match-autor',
  templateUrl: './match-autor.component.html',
  styleUrls: ['./match-autor.component.css']
})
export class MatchAutorComponent implements OnInit {
  public status : StatusPage;
  public editoresMatch: Array<Editor>;

  constructor(public _matchService : MatchService,  private router:Router) { }

  ngOnInit(): void {
    this.status = new StatusPage(this.router);
    this.obtenerMatchEditores();
  }

  obtenerMatchEditores(){
    this._matchService.getEditores().subscribe(data =>{
      console.log(data);
      this.editoresMatch = data;
    });
  }
}
