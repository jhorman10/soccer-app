import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';

const routes: Routes = [
  { path: 'create-team', component: AddEditFormComponent },
  { path: 'edit-team/:id', component: AddEditFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
