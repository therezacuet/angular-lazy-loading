import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './users.component';
import {RouterModule} from '@angular/router';
import {UsersRoutes} from './users.routes';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [
    RouterModule.forChild(UsersRoutes),
    CommonModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
