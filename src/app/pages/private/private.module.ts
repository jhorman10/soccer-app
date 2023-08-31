import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [
    AddEditFormComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule
  ],
  exports: [
    AddEditFormComponent
  ]
})
export class PrivateModule { }
