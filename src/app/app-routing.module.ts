import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { InformationComponent } from "./information/information.component";
import {ListComponent} from "./demande/list/list.component";
import {CreateComponent} from "./demande/create/create.component";
import {ListCreateComponent} from "./demande/list-create/list-create.component";


const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'information', component: InformationComponent },
  { path: 'demande', component: ListComponent },
  { path: 'create', component: ListCreateComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Redirection par défaut vers la page de connexion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
