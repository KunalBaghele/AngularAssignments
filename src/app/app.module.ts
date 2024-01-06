import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CertificationComponent } from './home/certification/certification.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameComponent } from './game/game.component';
import { MatListModule } from '@angular/material/list';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CertificationComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent,
    LoginComponent,
    GameComponent,

  ],
  imports: [
    BrowserModule,MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSelectModule,
    MatInputModule,MatFormFieldModule,MatButtonModule,
    FormsModule,ReactiveFormsModule,MatCardModule,MatListModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
