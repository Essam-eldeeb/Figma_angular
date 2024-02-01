import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from './components/chart/chart.component';
import { CardComponent } from './components/card/card.component';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MiddleBarComponent } from './components/middle-bar/middle-bar.component';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CardComponent,
    HeaderComponent,
    MiddleBarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    QRCodeModule,
    BrowserModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    TooltipModule,
    TableModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
