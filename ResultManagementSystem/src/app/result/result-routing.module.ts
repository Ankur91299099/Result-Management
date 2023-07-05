import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllResultsComponent } from './all-results/all-results.component';
import { AddResultComponent } from './add-result/add-result.component';
import { EditResultComponent } from './edit-result/edit-result.component';
import { FindResultComponent } from './find-result/find-result.component';
import { DisplayResultComponent } from './display-result/display-result.component';

const routes: Routes = [
  //   {
  //   path: "",
  //   component: HomeComponent
  // },
  {
    path: "all-results",
    component: AllResultsComponent
  },
   {
    path: "add-result",
    component: AddResultComponent
  },
  {
    path: "edit-result/:roll_no", 
    component: EditResultComponent
  },
  {
    path: "find-result", 
    component: FindResultComponent
  },
  {
    path: "display-result/:roll_no/:name", 
    component: DisplayResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
