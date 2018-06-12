import { Release } from './../../model/Release';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestore } from 'angularfire2/firestore';
import { EditReleaseModule } from './edit-release.module';
import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';

import { EditReleaseComponent } from './edit-release.component';
import { FirebaseApp } from 'angularfire2';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { getAngularFirestoreCollectionStub } from '../../../test-util/stub-services';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  template: ''
})
class DummyComponent {
}

describe('EditReleaseComponent', () => {
  let component: EditReleaseComponent;
  let fixture: ComponentFixture<EditReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ EditReleaseModule, RouterTestingModule.withRoutes([
        {path: '', component: DummyComponent},
        {path: 'release/:artistAndTitle/:releaseId', component: DummyComponent},
        {path: 'admin', component: DummyComponent},
        {path: 'admin/addRelease', component: EditReleaseComponent}
      ]), NoopAnimationsModule ],
      providers: [
        {
          provide: AngularFirestore,
          useValue: getAngularFirestoreCollectionStub( jasmine )
        }
      ],
      declarations: [ DummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add model to release collection on save and route to admin page',
    async(inject([Router, Location], (router: Router, location: Location) => {
      const release: Release = {
        'artist': 'The artist',
        'title': 'The title',
        'catalogNumber': 'The catalogNumber',
        'releaseDate': 'The releaseDate',
        'description': 'The description',
        'bandcampReleaseId': -1,
        'bandcampUrl': 'The bandcampUrl',
        'beatportUrl': 'The beatportUrl',
        'iTunesUrl': 'The iTunesUrl',
        'junoUrl': 'The junoUrl',
        'spotifyUrl': 'The spotifyUrl',
        'base64EncodedFile': 'The base64EncodedFile'
      };

      component.model = release;
      component.saveRelease();
      fixture.detectChanges();

      expect(component.releaseCollection.add).toHaveBeenCalledWith(release);
      fixture.whenStable().then(() => {
        expect(location.path()).toBe('/admin');
      });
    })));
});
