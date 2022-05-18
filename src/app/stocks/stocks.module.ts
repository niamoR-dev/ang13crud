import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StockComponent } from './components/stock/stock.component';


@NgModule({
  declarations: [
    StockComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    ReactiveFormsModule
  ]
})
export class StocksModule { }
