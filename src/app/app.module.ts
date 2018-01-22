import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { InputTextModule,ChartModule, ButtonModule, DataTableModule, DialogModule,TabViewModule,FieldsetModule,MessageModule }  from 'primeng/primeng';


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
    InputTextModule, 
    DialogModule,
    ButtonModule,
    ChartModule, // PrimeNG
    TabViewModule,
    FieldsetModule,
    MessageModule,
    RouterModule,
    routes,
    ChartsModule // ng2-Charts
    //TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
