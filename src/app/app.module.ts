import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';

//=========================== Helpers =============================//

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MatchComponent } from './components/match/match/match.component';
import { ListarComponent } from './components/articulos/listar/listar.component'
//import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {ResponseInterceptor } from './helpers/http.interceptor';
import { HomeComponent } from './components/home/home/home.component';
import {ServiceService} from './services/articulos/articulo.service';
import { InsertarComponent } from './components/articulos/insertar/insertar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MatchComponent,
    HomeComponent,
    ListarComponent,
    InsertarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [FormBuilder
  ,{
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true
  }, [ServiceService]],
  bootstrap: [AppComponent],

})
export class AppModule { }