import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';


@NgModule({
  declarations: [
    AddEditFormComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
