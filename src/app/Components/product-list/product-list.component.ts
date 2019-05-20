import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.Service';
import {CartService} from '../../Services/Cart.Service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [DataService]
})
export class ProductListComponent implements OnInit {

  public products: any[];
  constructor(private dataService: DataService, private cartService:CartService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe(result => {
      this.products = result;
    })
  }
  addToCart(product){
    this.cartService.addItem({Product: product , Quantity: 1});
  }



}
