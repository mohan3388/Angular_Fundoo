import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { AuthenticationGuard } from './components/authguard/authentication.guard';

import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'createnotes',component:CreateNotesComponent},

  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
  {path:'notes',component:GetAllNotesComponent},
  {path:'archive',component:ArchiveNotesComponent},
  {path:'trash',component:TrashComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

