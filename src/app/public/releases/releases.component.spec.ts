import { getAngularFirestoreCollectionStub } from './../../../test-util/stub-services';
import { AngularFirestore } from 'angularfire2/firestore';
import { ReleasesModule } from './releases.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesComponent } from './releases.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReleasesComponent', () => {
  let component: ReleasesComponent;
  let fixture: ComponentFixture<ReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReleasesModule, RouterTestingModule ],
      providers: [
        {
          provide: AngularFirestore,
          useValue: getAngularFirestoreCollectionStub( jasmine )
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
