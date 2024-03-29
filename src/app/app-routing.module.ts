import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FailComponent } from './fail/fail.component';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TablesComponent } from './tables/tables.component';
import { InscrireComponent } from './inscrire/inscrire.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'formulaire', component:FormulaireComponent},
  {path:'inscrire', component:InscrireComponent},
  {path:'tables', component:TablesComponent},
  {path:'**', component:FailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
