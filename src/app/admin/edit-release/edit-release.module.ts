import { FormsModule } from '@angular/forms';
import { HeaderModule } from './../../shared/header/header.module';
import { EditReleaseComponent } from './edit-release.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatInputModule, MatFormFieldModule, MatFormField, MatInput, MatButton, MatButtonModule, MatOption,
          MatOptionModule, MatSelectModule, MatSelect, MatDividerModule, MatDivider } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    FormsModule
  ],
  declarations: [EditReleaseComponent],
  exports: [
    EditReleaseComponent,
    MatFormField,
    MatInput,
    MatButton,
    MatSelect,
    MatOption,
    MatDivider],
  providers: []
})
export class EditReleaseModule { }
