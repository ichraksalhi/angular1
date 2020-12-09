import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';

import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { image } from 'html2canvas/dist/types/css/types/image';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'] 
})
export class ViewProductComponent implements OnInit {

  productId = 0;  
  productDetails: Product;

   currentRate = 0;
  
  //currentRate : number = 3;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
    ) { }

    download() {
      var element = document.getElementById('table')

      html2canvas(element).then((canvas) => {
        console.log(canvas)
        var imgData = canvas.toDataURL('image/png')

        var doc = new jspdf.jsPDF()

        var imgHeight = canvas.height *  208 / canvas.width;

        doc.addImage(imgData,0,0,200,imgHeight)

        doc.save("image.pdf")
      })
    }

    c1 = 'c1';

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
    });

    this.productsService.viewProduct(this.productId).subscribe(productData => {
      this.productDetails = productData;
    });

    
  }


}
