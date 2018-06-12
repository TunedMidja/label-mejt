import { ReleaseWithId } from './../../model/Release';
import { Component, OnInit } from '@angular/core';
import { Release } from '../../model/Release';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {
  private releaseCollection: AngularFirestoreCollection<Release>;
  releases: Observable<ReleaseWithId[]>;

  constructor(private afs: AngularFirestore) {
    this.releaseCollection = afs.collection<Release>('release');
    this.releases = this.releaseCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Release;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  ngOnInit() {}
}
