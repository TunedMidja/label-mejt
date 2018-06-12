import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDivider, MatDividerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent, MatDivider]
})
export class FooterModule { }
