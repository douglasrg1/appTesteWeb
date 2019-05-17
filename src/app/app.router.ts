import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPageComponent } from './Components/Pages/cart-page/cart-page.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { SignupPageComponent } from './Components/Pages/signup-page/signup-page.component';
import {AuthService} from './Services/Authenticate.Service';

const appRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'cart',canActivate: [AuthService], component: CartPageComponent },
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);