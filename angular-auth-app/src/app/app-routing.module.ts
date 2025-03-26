import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserInformationComponent} from './pages/user-information/user-information.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UsersListComponent} from './pages/users-list/users-list.component';


const routes: Routes = [
  {path :"", component:DashboardComponent},
  {path :"user-information", component:UserInformationComponent},
  {path :"users-list", component:UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
