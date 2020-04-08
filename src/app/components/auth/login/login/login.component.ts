import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*==== Formulario con validaciones ====*/
  public loginForm : FormGroup;
  constructor(public formBuilder : FormBuilder) { }

  ngOnInit(): void {
    //*===================== FORMULARIO ===================*/
    this.loginForm = this.formBuilder.group({
      NombreUsuario: ['', []],
      PasswordUsuario: ['', []],
    });

  }

}
