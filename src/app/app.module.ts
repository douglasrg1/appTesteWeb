import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { SubMenuComponent } from './Components/Shared/sub-menu/sub-menu.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { SignupPageComponent } from './Components/Pages/signup-page/signup-page.component';
import { CartPageComponent } from './Components/Pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubMenuComponent,
    FooterComponent,
    ProductListComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
