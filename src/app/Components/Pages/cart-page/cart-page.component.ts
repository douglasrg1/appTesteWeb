import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Services/Cart.Service';
import { DataService } from '../../../Services/Data.Service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  providers: [DataService]
})
export class CartPageComponent implements OnInit {

  public items: any[] = [];
  public discount: number = 0;
  public deliveryFee: number = 5;
  constructor(private cartService: CartService,private dataService: DataService,private router:Router) { }

  ngOnInit() {
    this.items = this.cartService.items;
  }
  remove(item) {
    this.cartService.removeItem(item);
  }
  checkout() {
    var data = {
      customer: 1,
      deliveryFee: this.deliveryFee,
      discount: this.discount,
      items: []
    };
    for (let i of this.cartService.items) {
      data.items.push({
        product: i.Product.id,
        quantity: i.Quantity,
        price: i.Product.price
      })
    }

    this.dataService.createOrder(data)
      .subscribe(result => {
        alert('Pedido criado com sucesso!');
        this.cartService.clear();
        this.router.navigateByUrl('/home');
      }, err => {
        console.log(err);
      });
  }




}
