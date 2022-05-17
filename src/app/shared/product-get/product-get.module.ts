import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGetRoutingModule } from './product-get-routing.module';
import { ProductGetComponent } from './product-get/product-get.component';


@NgModule({
  declarations: [
    ProductGetComponent
  ],
  imports: [
    CommonModule,
    ProductGetRoutingModule
  ]
})
export class ProductGetModule { }
