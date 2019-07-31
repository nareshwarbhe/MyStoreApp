import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../Services/utility.service';
// import * as $ from "jquery";
declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Object;
  productName : string = "";
  productNumber : string = "";
  productModalName : string = "";
  p: number = 1;
   constructor(private productService : UtilityService) {

   }
   getProducts()
{
  this.products = this.productService.getProducts().subscribe(data=>this.products = data);
}
  ngOnInit() {
    this.getProducts();
  }
  showModal(productParam)
  {
    this.productName = productParam.ProductName;
    this.productNumber = productParam.ProductNumber;
    this.productModalName = productParam.ProductModelName;
    $("#exampleModal").modal('show');
  }
}
