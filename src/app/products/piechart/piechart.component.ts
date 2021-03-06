import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { Product } from '../../model/product';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';  

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  productList: Product;
  constructor(private productsService: ProductsService) { }
  public picChartOptions: ChartOptions= {
    responsive:true,
    legend:{
      position: 'top',

    },
    plugins: {
      datalabels: {
        formatter: (value,ctx) =>{
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label ;
        }
      }
    }
  }

  public pieChartLabels: Label [] = [['Download' , 'Sales'], ['In', 'Store' , 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  
  public pieChartType: ChartType = 'pie' ;
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [ 'rgba(255,0,0,0.3)' , 'rgba(0,255,0,0.3)' , 'rgba(0,0,255,0.3)'],
    }
  ]

  

  ngOnInit(): void {
  }

}
