import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindByDateComponent } from './find-by-date/find-by-date.component';
import { FindByIdComponent } from './find-by-id/find-by-id.component';

const routes: Routes = [
  {path: 'find-by-date', component: FindByDateComponent},
  {path: 'find-by-id', component: FindByIdComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
