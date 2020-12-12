import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';

import {OrdersModule} from './orders/orders.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SiteFrameworkModule} from './site-framework/site-framework.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ChartsModule} from 'ng2-charts';

//import { ModelModule } from './model/model.module';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    OrdersModule,
    SiteFrameworkModule,
    FormsModule,
    BrowserModule,
    NgbModule,
    ChartsModule,
    ReactiveFormsModule
    //ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
