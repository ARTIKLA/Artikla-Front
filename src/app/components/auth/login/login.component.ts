import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Login } from 'src/app/interfaces/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*==== Formulario con validaciones ====*/
  public loginForm : FormGroup;
  constructor(public formBuilder : FormBuilder, public authService : LoginService) { }

  ngOnInit(): void {
    //*===================== FORMULARIO ===================*/
    this.loginForm = this.formBuilder.group({
      NombreUsuario: ['', []],
      PasswordUsuario: ['', []],
    });

  }


  login() {
    if(this.loginForm.valid) {
      // this.status.loading = true;
      this.authService.login(this.loginForm.getRawValue()).subscribe(
        (res : Login) => {
          console.log(res);
        }, error => {
          console.log(error);
        });
    } else {
      console.log("Formulario inválido");
    }
  }

}
