import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Artist } from './../../model/Artist';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Release } from '../../model/Release';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-release',
  templateUrl: './edit-release.component.html',
  styleUrls: ['./edit-release.component.scss']
})
export class EditReleaseComponent implements OnInit {
  @ViewChild('coverFileInput')
  coverFileInput: ElementRef;

  model: Release = {  'artist': '',
                      'title': '',
                      'catalogNumber': '',
                      'releaseDate': '',
                      'description': '',
                      'bandcampReleaseId': null,
                      'bandcampUrl': '',
                      'beatportUrl': '',
                      'iTunesUrl': '',
                      'junoUrl': '',
                      'spotifyUrl': '',
                      'base64EncodedFile': ''
                    };

  private artistCollection: AngularFirestoreCollection<Artist>;
  releaseCollection: AngularFirestoreCollection<Release>;
  artists: Observable<Artist[]>;

  constructor(private afs: AngularFirestore, private router: Router) {
    this.artistCollection = afs.collection<Artist>('artist');
    this.releaseCollection = afs.collection<Release>('release');
    this.artists = this.artistCollection.valueChanges();
  }

  async ngOnInit() {
  }

  saveRelease() {
    // Escape the carriage returns to make sure they will be saved in the BD:
    this.model.description = this.model.description.replace( /\n/g, '\\n' );
    this.releaseCollection.add(this.model);
    this.router.navigate( ['/admin'] );
  }

  async coverFileSelected() {
    this.model.base64EncodedFile = await this.uploadCoverFile();
  }

  openFileBrowser() {
    this.coverFileInput.nativeElement.click();
  }

  private async uploadCoverFile(): Promise<string> {
    const promise = await new Promise<string>((resolve, reject) => {
      const fileBrowser = this.coverFileInput.nativeElement;
      if (fileBrowser.files && fileBrowser.files[0]) {
        const fileReader  = new FileReader();
        fileReader.readAsDataURL(fileBrowser.files[0]);
        let base64EncodedFile;
        fileReader.onload = function () {
          base64EncodedFile = fileReader.result;
          base64EncodedFile = base64EncodedFile.replace(/^data:image\/[a-z]+;base64,/, '');
          resolve(base64EncodedFile);
        };
      }
      })
    .catch(error => { throw error; });

    return promise;
  }
}
