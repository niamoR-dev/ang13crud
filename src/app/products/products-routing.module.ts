import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './component/product-add/product-add/product-add.component';
/**
 * On part du chemin relatif : /products
 */
const routes: Routes = [

  {
    path: 'product/create',
    component: ProductAddComponent
  },
  {
    path: '',
    redirectTo: 'product/create',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes,
  )],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
