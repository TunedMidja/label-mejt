import { getAngularFirestoreDocStub } from './../../../test-util/stub-services';
import { AngularFirestore } from 'angularfire2/firestore';
import { ReleaseDetailsModule } from './release-details.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsComponent } from './release-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReleaseDetailsComponent', () => {
  let component: ReleaseDetailsComponent;
  let fixture: ComponentFixture<ReleaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReleaseDetailsModule, RouterTestingModule ],
      providers: [
        {
          provide: AngularFirestore,
          useValue: getAngularFirestoreDocStub( jasmine )
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
