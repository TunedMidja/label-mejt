import { DashboardModule } from './admin/dashboard/dashboard.module';
import { AdminGuard } from './guard/admin.guard';
import { AuthenticationService } from './service/authentication.service';
import { HeaderModule } from './shared/header/header.module';
import { ReleaseDetailsModule } from './public/release-details/release-details.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from './shared/footer/footer.module';
import { FormsModule } from '@angular/forms';
import { EditReleaseModule } from './admin/edit-release/edit-release.module';
import { AppRoutingModule } from './app-routing.module';
import { ReleasesModule } from './public/releases/releases.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ReleaseComponent } from './public/release/release.component';
import { ReleaseDetailsComponent } from './public/release-details/release-details.component';
import { EditReleaseComponent } from './admin/edit-release/edit-release.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    [ BrowserModule,
      HttpModule,
      AppRoutingModule,
      DashboardModule,
      HeaderModule,
      ReleasesModule,
      ReleaseDetailsModule,
      EditReleaseModule,
      FooterModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule.enablePersistence()]
  ],
  providers: [AuthenticationService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
