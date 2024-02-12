import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FailComponent } from './fail/fail.component';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TablesComponent } from './tables/tables.component';
import { InscrireComponent } from './inscrire/inscrire.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FailComponent,
    LoginComponent,
    FormulaireComponent,
    TablesComponent,
    InscrireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
