import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";

@Component({
  selector: "product-table",
  templateUrl: "./productTable.component.html"
})
export class ProductTableComponent {

  constructor(private repo: Repository) { }

  get products(): Product[] {
    return this.repo.products;
  }

  selectProduct(id: number) {
    this.repo.getProduct(id);
  }

}
