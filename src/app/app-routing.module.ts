import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'home/about', component: HomeComponent , title: 'Portfolio'},
  { path: 'home/chat', component: ParentComponent , title: 'Chat'},
  { path: 'home/game', component: GameComponent, title: 'Game'},
  { path: 'home', component: NavbarComponent , title: 'Home'},
  { path: '', component: LoginComponent , title: 'Login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
