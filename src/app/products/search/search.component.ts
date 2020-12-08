import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  chaine  ='';


  searchResult: Product[];

  constructor(private productsService: ProductsService, private router:Router  ) { }

  ngOnInit(): void {
    this.searchResult =[];
  }

  search(chaine) {
   
    const productName = this.chaine.trim();
   
    if (productName.length)
    {
      this.productsService.findByName(productName).subscribe ((Products) => {
        console.log(Products);
        console.log(Products);
        console.log(Products);
        console.log(Products);
        this.searchResult = Products;
      }  );
  
    } else {
      this.searchResult = [];  
    }
   
    console.log(chaine);
  }
  selectProduct(product : Product) {
    const link = ['/products/product/',product.id];
    this.router.navigate(link);
    this.searchResult = [];
    this.chaine='';
 
  }

}
