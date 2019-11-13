import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsComponent} from './details.component';
import {RouterModule} from '@angular/router';
import {DetailsRoutes} from './details.routes';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [DetailsComponent],
  exports: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DetailsRoutes),
    AgmCoreModule
  ]
})
export class DetailsModule { }
