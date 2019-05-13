import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { SubMenuComponent } from './Components/Shared/sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubMenuComponent
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
