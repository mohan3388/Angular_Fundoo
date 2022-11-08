import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TrashComponent } from './components/trash/trash.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'signin',component:LoginComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
  {path:'notes',component:GetAllNotesComponent},
  {path:'archieve',component:ArchiveComponent},
  {path:'trash',component:TrashComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
