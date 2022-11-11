import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';

import { TrashComponent } from './components/trash/trash.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [

    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    GetAllNotesComponent,
   ArchiveNotesComponent,
    TrashComponent,
    DisplayNotesComponent,
    IconsComponent,
    CreateNotesComponent,
    UpdateNotesComponent,
    ArchiveNotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
