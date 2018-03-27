import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ChartModule, DataTableModule,MessageModule }  from 'primeng/primeng';


import { ChartsModule } from 'ng2-charts';
import { routes } from './app.router';


import { AppComponent } from './app.component';
import { RtgsComponent } from './rtgs/rtgs.component';
import { SsssComponent } from './ssss/ssss.component';



@NgModule({
  declarations: [
    AppComponent,
    RtgsComponent,
    SsssComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    HttpModule,

    ChartModule, // PrimeNG

    MessageModule,
    RouterModule,
    routes,
    ChartsModule // ng2-Charts
    //TableModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
