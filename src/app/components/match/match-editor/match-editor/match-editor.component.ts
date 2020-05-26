import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match/match.service.service';
import { ArticuloDto, ArticuloMatch } from 'src/app/entidades/ArticuloDto';
import { StatusPage } from 'src/app/helpers/status_page';
import { Router } from '@angular/router';
import { Editor } from 'src/app/entidades/editor';
import { TIPO_USUARIO } from 'src/app/helpers/Constantes/Enums/usuarios';
import { Autor } from 'src/app/entidades/autor';
import { RespuestasWS } from 'src/app/helpers/Constantes/respuestasWS';
import { Match } from 'src/app/entidades/match';

@Component({
  selector: 'app-match-editor',
  templateUrl: './match-editor.component.html',
  styleUrls: ['./match-editor.component.css']
})
export class MatchEditorComponent implements OnInit {
  public status : StatusPage;
  public articulosMatch : Array<ArticuloMatch> = [];

  public editor:Editor;
  public usuarios:TIPO_USUARIO;
  
  constructor(public _matchService : MatchService,  private router:Router) { }

  ngOnInit(): void {
    this.status = new StatusPage(this.router);
    this.obtenerMatchAutores(); 
  }

  obtenerMatchAutores() {
      this._matchService.posiblesMatchArticulos(this.status.obtenerUsuarioLocalStorage().id).subscribe((autores : Array<Autor>) => {
        console.log(autores);
        this.obtenerArticulosAutores(autores);
      }, error => {
        console.log(error);
      });
  }

  obtenerArticulosAutores(autores : Array<Autor>) {
    autores.forEach(autor => {
      autor.articulos.forEach(articulo => {
        let articuloMatch : ArticuloMatch = {
          id: articulo.id,
          titulo: articulo.titulo,
          descripcion: articulo.descripcion,
          categorias: articulo.categorias,
          autor: autor
        }
        this.articulosMatch.push(articuloMatch);
      });
    });
    this.reordenarArticulos();
  }
  
  reordenarArticulos() {
    for(let i = this.articulosMatch.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = this.articulosMatch[i]
      this.articulosMatch[i] = this.articulosMatch[j]
      this.articulosMatch[j] = temp
    }
    console.log(this.articulosMatch);
  }


  // solicitudMatch(articuloMatch : ArticuloMatch) {
  //   console.log(articuloMatch);
  //   let matchSolicitud : Match  = {
  //     id_editor: this.status.obtenerUsuarioLocalStorage().id,
      
  //   }
  //   this._matchService.solicitarMatch(arti).subscribe((respuesta : RespuestasWS) => {
  //     console.log(respuesta);
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
