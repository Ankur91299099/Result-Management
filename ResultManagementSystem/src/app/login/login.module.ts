import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from './login-routing.module';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { LoginComponent } from './login/login.component';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';

@NgModule({
  declarations: [
    TeacherLoginComponent,
    LoginComponent,
    HeaderLoginComponent,
    StudentLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
