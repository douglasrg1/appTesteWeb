import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../Services/Cart.Service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public totalItems: number = 0;
  constructor(private cartService:CartService) {
    this.cartService.cartChange.subscribe((data)=>{
      
    });
   }

  ngOnInit() {
  }

}
