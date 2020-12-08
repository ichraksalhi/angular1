import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { Product } from '../../model/product';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
//import {ChartModule} from 'ng2-charts';




@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  productList: Product;
  constructor(private productsService: ProductsService) { }
  
  

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data=> {
      this.productList = data;
    });
  }

  


}
