import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../../app-routing.module';
import { ReleaseComponent } from './release.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Release } from '../../model/Release';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ReleaseComponent],
  exports: [ReleaseComponent]
})
export class ReleaseModule { }
