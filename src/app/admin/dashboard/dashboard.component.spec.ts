import { getAuthenticationServiceStub } from './../../../test-util/stub-services';
import { User } from './../../model/User';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../../service/authentication.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
import {RouterTestingModule} from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DashboardModule, RouterTestingModule ],
      providers: [
        {
          provide: AuthenticationService,
          useValue: getAuthenticationServiceStub( jasmine )
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show logged in admin user\'s info, links and logout button', () => {
    const h4 = fixture.debugElement.query(By.css('.container > div > h4'));
    expect(h4.childNodes[0].nativeNode.data).toBe('User: crystalfakemusic@audionaut.com');
    const img = fixture.debugElement.query(By.css('.container > div > img'));
    expect(img).toBeTruthy();
    const a = fixture.debugElement.query(By.css('.container > div > a'));
    expect(a.childNodes[0].nativeNode.data).toBe('Releases');
    const button = fixture.debugElement.query(By.css('.container > div > button'));
    expect(button.nativeElement.textContent).toBe('Logout');
  });

  it('should show message and no links for logged in non-admin user', () => {
    // Simulate that user is not admin.
    fixture.debugElement.injector.get(AuthenticationService).isAdmin = () => Observable.of(false);
    fixture.detectChanges();

    const h4 = fixture.debugElement.query(By.css('.container > div > h4'));
    expect(h4.childNodes[0].nativeNode.data).toBe('User: crystalfakemusic@audionaut.com');
    const img = fixture.debugElement.query(By.css('.container > div > img'));
    expect(img).toBeTruthy();

    // Make sure no link was rendered…
    const a = fixture.debugElement.query(By.css('.container > div > a'));
    expect(a).toBeFalsy();

    // …and that there is a message shown instead.
    const span = fixture.debugElement.query(By.css('.container > div > span'));
    expect(span.childNodes[0].nativeNode.data).toBe('Logged in user is not authorized to do anything here!');

    const button = fixture.debugElement.query(By.css('.container > div > button'));
    expect(button.nativeElement.textContent).toBe('Logout');
  });

  it('should show message and logout button if user is not logged in', () => {
    // Simulate that user is not logged in.
    fixture.debugElement.injector.get(AuthenticationService).getAuthState = () => null;
    fixture.detectChanges();

    const h2 = fixture.debugElement.query(By.css('.container > h2'));
    expect(h2.childNodes[0].nativeNode.data).toBe('Please login');
    const button = fixture.debugElement.query(By.css('.container > button'));
    expect(button.nativeElement.textContent).toBe('Login with Google');
  });
});
