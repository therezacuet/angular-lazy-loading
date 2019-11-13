import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbG_18Ovy8f8B7v1mZjhi-nQatD7-3D_4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
