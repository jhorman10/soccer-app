import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FindByDateComponent } from './find-by-date/find-by-date.component';
import { FindByIdComponent } from './find-by-id/find-by-id.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
  declarations: [
    TeamListComponent,
    FindByIdComponent,
    FindByDateComponent,
    LoginComponent,
  ],
  exports: [
    TeamListComponent,
    FindByIdComponent,
    FindByDateComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
  ],
})
export class PublicModule {}
