import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Services/Cart.Service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public totalItems: number = 0;
  public user: string = "";
  constructor(private cartService: CartService, private router:Router) {
    this.cartService.cartChange.subscribe((data) => {

    });
    const data = localStorage.getItem('appTeste.User');
    if (data) {
      this.user = data;
    }

  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('appTeste.Token');
    localStorage.removeItem('appTeste.User');
    this.router.navigateByUrl('/');
  }

}
