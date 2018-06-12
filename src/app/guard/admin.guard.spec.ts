import { AuthenticationService } from './../service/authentication.service';
import { TestBed, async, inject } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { getAuthenticationServiceStub } from '../../test-util/stub-services';

describe('AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard,
        {
          provide: AuthenticationService,
          useValue: getAuthenticationServiceStub( jasmine )
        }]
    });
  });

  it('should activate admin user', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard.canActivate).toBeTruthy();
  }));
});
