import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Login } from 'src/app/entidades/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*==== Formulario con validaciones ====*/
  public loginForm : FormGroup;
  public loginData:Login;
  public usuario:any;
  constructor(public formBuilder : FormBuilder, public authService : LoginService,private router:Router) { }
  ngOnInit(): void {
    this.loginData= new Login();
    
  }


  login() {
   // if(this.loginForm.valid) {
      // this.status.loading = true;
      this.authService.login(this.loginData).subscribe((data) => {   
        this.usuario=data;
        if(this.usuario != '' || this.usuario != null  ){
          this.router.navigate(['login']);
        }else{
          console.log('no existe');
        }
          }, 
      error => { console.log(error);  });
    //} else {
      //console.log("Formulario inválido");
    //}
  }

}
