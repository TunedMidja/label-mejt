import { ReleaseWithId } from './../../model/Release';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLinksComponent } from './shop-links.component';

describe('ShopLinksComponent', () => {
  let component: ShopLinksComponent;
  let fixture: ComponentFixture<ShopLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopLinksComponent);
    component = fixture.componentInstance;

    const releaseMock: ReleaseWithId = {
      id: '0',
      artist: '',
      title: '',
      catalogNumber: '',
      releaseDate: '',
      description: '',
      bandcampReleaseId: 0,
      bandcampUrl: '',
      beatportUrl: '',
      iTunesUrl: '',
      junoUrl: '',
      spotifyUrl: '',
      base64EncodedFile: ''
    };

    component.release = releaseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
