import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { AddResultComponent } from './add-result/add-result.component';
import { AllResultsComponent } from './all-results/all-results.component';
import { ReactiveFormsModule } from "@angular/forms";
import { EditResultComponent } from './edit-result/edit-result.component';
import { FindResultComponent } from './find-result/find-result.component';
import { DisplayResultComponent } from './display-result/display-result.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    AddResultComponent,
    AllResultsComponent,
    EditResultComponent,
    FindResultComponent,
    DisplayResultComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ResultModule { }
