import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ProductAddModule } from '../shared/product-add/product-add.module';
import { ProductEditModule } from '../shared/product-edit/product-edit.module';
import { ProductGetModule } from '../shared/product-get/product-get.module';
import { SharedModule } from '../shared/shared.module';
import { StockComponent } from '../shared/stock/stock/stock.component';
import { StockModule } from '../shared/stock/stock.module';


@NgModule({
  declarations: [

  ],

  imports: [
    SharedModule,
    ProductAddModule,
    ProductEditModule,
    ProductGetModule,
    StockModule
  ],

  exports: [
  ]
})
export class CoreModule {


  /*
     Permet de placer le CoreModule en parent de tous les autres modules, si un autre module est

     importé dans le appModule l'application rentrera en conflit (mesure de sécurité)
  */

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

    if (parentModule) {

      throw new Error('CoreModule is already loaded.');

    }

  }

}
