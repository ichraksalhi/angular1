import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
//import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchComponent } from './search/search.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
    
  { path: '', component: ViewAllProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'list-product', component: ViewAllProductsComponent },
  { path: 'searsh', component: ViewAllProductsByDateComponent},     
  { path: 'product', component: ViewProductComponent},
  //{ path: 'ajout-product', component: CreateProductComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent},
  { path: 'product/:id', component: ViewProductComponent},
  { path: 'category/:id', component: ViewAllProductsByCategoryComponent},
  { path: 'update-product/:id', component: UpdateProductComponent},
  { path: 'search', component: SearchComponent},
  { path: 'piechart', component: PiechartComponent}       



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
