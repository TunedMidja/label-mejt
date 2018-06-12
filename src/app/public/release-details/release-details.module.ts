import { HeaderModule } from '../../shared/header/header.module';
import { ReleaseDetailsComponent } from './release-details.component';
import { ShopLinksModule } from './../shop-links/shop-links.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseModule } from '../release/release.module';

@NgModule({
  imports: [
    CommonModule,
    ShopLinksModule,
    FlexLayoutModule,
    ReleaseModule,
    HeaderModule
  ],
  declarations: [ReleaseDetailsComponent],
  exports: [ReleaseDetailsComponent]
})
export class ReleaseDetailsModule { }
