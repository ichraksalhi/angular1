import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/products.service';
import { Product } from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  registerForm: FormGroup;

  productId = 0;

  currentRate = 0;
  
  productDetails: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
      ) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      productName: new FormControl('', [Validators.required, Validators.minLength(3)]) 
      })
    




    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productsService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData; // get the existing data of the product
        console.log(this.productDetails);
      });

    });
  }

  updateProduct(form){

    console.log(form);

    const updateProduct = {
      id: form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: form.value.product_img,
      isAvailable: 1,
      color: form.value.product_color,
      reviews: form.value.product_category,
  };

    this.productsService.updateProduct(this.productId, updateProduct).subscribe(data => {
        console.log(data);
    });

  }

}
