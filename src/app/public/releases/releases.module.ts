import { HeaderModule } from '../../shared/header/header.module';
import { ReleasesComponent } from './releases.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReleaseModule } from '../release/release.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReleaseModule,
    FlexLayoutModule,
    HeaderModule
  ],
  exports: [ReleasesComponent],
  declarations: [ReleasesComponent],
  providers: []
})
export class ReleasesModule { }
