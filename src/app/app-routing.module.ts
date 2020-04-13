import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { MatchComponent } from './components/match/match/match.component';


const routes: Routes = [
  { path: '', redirectTo:'auth/login', pathMatch: 'full'},
  { path: 'auth/login' , component: LoginComponent },
  { path: 'home' , component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
