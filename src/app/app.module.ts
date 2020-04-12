import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*================== DEPENDENCIAS ==================*/
import {ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ResponseInterceptor } from './_helpers/http.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
// {
//   provide: HTTP_INTERCEPTORS,
//   useClass: ResponseInterceptor,
//   multi: true
// }