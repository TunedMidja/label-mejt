import { AdminGuard } from './guard/admin.guard';
import { AuthenticationService } from './service/authentication.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditReleaseComponent } from './admin/edit-release/edit-release.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ReleaseComponent } from './public/release/release.component';
import { ReleasesComponent } from './public/releases/releases.component';
import { ReleaseDetailsComponent } from './public/release-details/release-details.component';

const appRoutes: Routes = [
  {path: '', component: ReleasesComponent},
  {path: 'release/:artistAndTitle/:releaseId', component: ReleaseDetailsComponent},
  {path: 'admin', component: DashboardComponent},
  {path: 'admin/addRelease', component: EditReleaseComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
