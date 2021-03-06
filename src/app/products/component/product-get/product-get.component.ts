import { Component, OnInit } from '@angular/core';
import Product from '../../models/product.model';
import { ProductsService } from '../../web-services/products.webservice';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})

export class ProductGetComponent implements OnInit {

  products!: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {


    this.productsService.getProducts().subscribe(
      (data: Product[]) => {

        this.products = data;
      });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(res => {
      this.ngOnInit();
    });
  }
}
