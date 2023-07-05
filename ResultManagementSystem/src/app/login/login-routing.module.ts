import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { TeacherLoginComponent } from "./teacher-login/teacher-login.component";
import { StudentLoginComponent } from "./student-login/student-login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "teacher-login",
    component: TeacherLoginComponent
  },
  {
    path: "student-login",
    component: StudentLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
