import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PostRoutes} from './post.routes';
import {PostComponent} from './post.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({declarations: [PostComponent],
  exports: [PostComponent],
  imports: [
    RouterModule.forChild(PostRoutes),
    CommonModule,
    NgxPaginationModule
  ]
})
export class PostModule { }
