import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    // redirectTo: "results",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "results",
    loadChildren: () =>
      import("./result/result.module").then(m => m.ResultModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
