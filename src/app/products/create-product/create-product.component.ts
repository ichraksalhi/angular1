import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from '../../shared/products.service';
import { ProductsComponent } from '../products.component';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  currentRate = 0;
  
  product: Product;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {


  }

  addNewProduct(form){
    console.log(form.value);

    let newProduct = {
        id: '',
        categoryId: form.value.product_category,
        productName: form.value.product_name,
        description: form.value.product_description,
        rating: form.value.product_rating,
        price: form.value.product_price,
        productImg: form.value.product_img,
        isAvailable: 1,     
        color: form.value.product_color,
        reviews: form.value.product_category,
    };

    console.log(newProduct);

    this.productsService.createProduct(newProduct).subscribe(data => {
      console.log(data);
      Swal.fire({
        title: 'Are you sure to add this product?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'added!',
            'Your file has been added.',
            'success'
          )
        }
      })
    });

  }
}
