import { MatDividerModule, MatDivider } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent, MatDivider]
})
export class HeaderModule { }
