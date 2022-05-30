import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListCoursComponent} from './list-cours/list-cours.component';
import {EnseigneUserComponent} from './enseigne-user/enseigne-user.component';
import {EnseigneCoursComponent} from './enseigne-cours/enseigne-cours.component';

const routes: Routes = [
  { path: '', component:AuthentificationComponent},
  {path : 'allUser', component:ListUserComponent},
  {path : 'add-user', component:AddUserComponent},
  {path : 'edit-user/:id', component:EditUserComponent},
  {path : 'allCours', component:ListCoursComponent},
  {path : 'getEnseigneCours/:id', component:EnseigneUserComponent},
  {path : 'getEnseigneUser/:id', component:EnseigneCoursComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
