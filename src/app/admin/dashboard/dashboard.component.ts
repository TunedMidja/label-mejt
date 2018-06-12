import { Component } from '@angular/core';
import { AuthenticationService } from './../../service/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor( public authenticationService: AuthenticationService ) {}
}
