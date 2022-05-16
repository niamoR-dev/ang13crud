import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }

  addProduct(ProductName: any, ProductDescription: any, ProductPrice: any) {
    this.productsService.addProduct(ProductName, ProductDescription, ProductPrice);
  }
  ngOnInit() {
  }
}
