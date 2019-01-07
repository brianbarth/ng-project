import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ChangerComponent } from './changer/changer.component';
import { ScramblePipe } from './shared/scramble.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ChangerComponent,
    ScramblePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
