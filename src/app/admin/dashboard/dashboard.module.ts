import { HeaderModule } from './../../shared/header/header.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    MatButtonModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
