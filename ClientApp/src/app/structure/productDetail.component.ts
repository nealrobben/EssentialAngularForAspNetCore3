import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";

@Component({
  selector: "product-detail",
  templateUrl: "productDetail.component.html"
})
export class ProductDetailComponent {

  constructor(private repo: Repository) { }

  get product(): Product {
    return this.repo.product;
  }

}
