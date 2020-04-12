import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { VALIDACIONES_USUARIO } from 'src/app/helpers/validacion_campos/user.validators';
import { GrupoValidaciones, MensajeCampo } from 'src/app/interfaces/interface.validators';
import { Login } from 'src/app/entidades/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*==== Formulario con validaciones ====*/
  public loginForm : FormGroup;
  public VAL : VALIDACIONES_USUARIO = new VALIDACIONES_USUARIO();

  constructor(public formBuilder : FormBuilder, public authService : LoginService) { }

  ngOnInit(): void {
    //*===================== FORMULARIO ===================*/
    this.loginForm = this.formBuilder.group({
      NombreUsuario: ['', [...this.VAL.NombreUsuarioVal.validators]],
      PasswordUsuario: ['', [...this.VAL.PasswordUsuarioVal.validators]],
    });


    /*=================== VALIDAR MENSAJES ASOCIADOS A CADA VALIDACIÓN ===================*/
    this.validarCampoMsg(this.loginForm.get("NombreUsuario"), this.VAL.NombreUsuarioVal);
    this.validarCampoMsg(this.loginForm.get("PasswordUsuario"), this.VAL.PasswordUsuarioVal);
  }

  validarCampoMsg(control : AbstractControl, val : GrupoValidaciones) {
    control.valueChanges.pipe().subscribe(
      value => {
        val.showMsg = MensajeCampo(control, val.validatorsMsg) || "";
      });
  }

  viewPass(eye, inputID) {
    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
    var input = document.getElementById(inputID);
    if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text");
    } else {
        input.setAttribute("type", "password");
    }
}

  login() {
    if(this.loginForm.valid) {
      // this.status.loading = true;
      this.authService.login(this.loginForm.getRawValue()).subscribe(
        (res : boolean) => {
          console.log(res);
        }, error => {
          console.log(error);
        });
    } else {
      for(let value in this.loginForm.value) {
        if(this.loginForm.get(value).invalid) {
          this.loginForm.get(value).markAsTouched();
          this.VAL[value+"Val"].showMsg = MensajeCampo(this.loginForm.get(value), this.VAL[value+"Val"].validatorsMsg);
        }
      }
    }
  }

}
