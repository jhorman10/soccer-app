import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './pages/public/team-list/team-list.component';

const routes: Routes = [
  {
    path: '',
    component: TeamListComponent,
  },
  {
    path: 'home',
    component: TeamListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
