import { AngularFirestore } from 'angularfire2/firestore';
import { getAngularFirestoreAuthStub, getAngularFirestoreStub } from './../../test-util/stub-services';
import { AngularFireAuth } from 'angularfire2/auth';
import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        {
          provide: AngularFireAuth,
          useValue: getAngularFirestoreAuthStub( jasmine )
        },
        {
          provide: AngularFirestore,
          useValue: getAngularFirestoreStub( jasmine )
        }]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
