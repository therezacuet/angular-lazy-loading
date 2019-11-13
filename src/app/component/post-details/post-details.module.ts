import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDetailsComponent} from './post-details.component';
import {RouterModule} from '@angular/router';
import {PostDetailsRoute} from './post-details.routes';

@NgModule({
  declarations: [PostDetailsComponent],
  exports: [PostDetailsComponent],
  imports: [
    RouterModule.forChild(PostDetailsRoute),
    CommonModule
  ]
})
export class PostDetailsModule { }
