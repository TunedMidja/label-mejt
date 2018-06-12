import { FlexLayoutModule } from '@angular/flex-layout';
import { ShopLinksComponent } from './shop-links.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [ShopLinksComponent],
  exports: [ShopLinksComponent]
})
export class ShopLinksModule { }
