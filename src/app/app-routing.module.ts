import { NgModule } from '@angular/core'; import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: 'product/create',
    loadChildren: () => import('./shared/product-add/product-add.module').then(m => m.ProductAddModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./shared/product-edit/product-edit.module').then(m => m.ProductEditModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./shared/product-get/product-get.module').then(m => m.ProductGetModule)
  },
  {
    path: 'stocks',
    loadChildren: () => import('./shared/stock/stock.module').then(m => m.StockModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
