import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
//import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
//import { DeleteProductComponent } from './delete-product/delete-product.component';

import { ChartsModule } from 'ng2-charts';
import { SearchComponent } from './search/search.component';
import { PiechartComponent } from './piechart/piechart.component';
//import { SeachComponent } from './seach/seach.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ViewProductComponent,
    ViewAllProductsComponent,
    //UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductsByDateComponent,
    ViewAllProductsByCategoryComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    SearchComponent,
    PiechartComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ChartsModule
  ]
})
export class ProductsModule { }
