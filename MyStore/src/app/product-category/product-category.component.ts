import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../Services/utility.service';
import { Observable } from 'rxjs';
import { ProductCategory } from '../Models/productcategory';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  public productCategory: Object;
  constructor(private utilityService: UtilityService) {

  }

  ngOnInit() {
    this.getProductCategories();
  }
  getProductCategories() {
   this.utilityService.getProductCategories().subscribe(data=>this.productCategory = data);
  }
}
