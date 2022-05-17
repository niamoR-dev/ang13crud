import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGetComponent } from './product-get/product-get.component';

const routes: Routes = [{
  path: '',
  component: ProductGetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductGetRoutingModule { }
