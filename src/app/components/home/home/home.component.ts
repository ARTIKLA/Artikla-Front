import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { StatusPage } from 'src/app/helpers/status_page';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/entidades/user';
import { TIPO_USUARIO } from 'src/app/helpers/Constantes/Enums/usuarios';
=======
>>>>>>> 8c5f4d0692f14c8c5d0ff7728be6b9bf0a989ecd

import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  get MODULOS() { return MODULOS; };
  public modulo : MODULOS;
<<<<<<< HEAD
  public status : StatusPage;
  constructor(public router : Router, public authService : UsuarioService) { }
=======
  public articuloDto:ArticuloDto;

  constructor() { }
>>>>>>> 8c5f4d0692f14c8c5d0ff7728be6b9bf0a989ecd

  ngOnInit(): void {
    this.status = new StatusPage(this.router);
    this.buscarInfoUsuario();
  }

  buscarInfoUsuario() {
     console.log(this.status.obtenerUsuarioLocalStorage());
     this.authService.obtenerUsuarioPorId(this.status.obtenerUsuarioLocalStorage().id).subscribe(
      (usuario : Usuario) => {
        if(usuario == null) {
          alert("Se ha presentado un inconveniente al obtener el usuario");
        } else {
          this.status.guardarUsuarioLocalStorage(usuario);
          this.validarRolUsuario(usuario);
        }
      }, error => {
        console.log(error);
      });
  }

  validarRolUsuario(usuario : Usuario) {
    switch(usuario.rol) {
      case TIPO_USUARIO.AUTOR:
        this.modulo = MODULOS.MATCH_AUTOR;
      case TIPO_USUARIO.EDITOR:
        this.modulo = MODULOS.MATCH_AUTOR;
    }
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
