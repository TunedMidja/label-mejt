import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Release } from '../../model/Release';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-release-details',
  templateUrl: './release-details.component.html',
  styleUrls: ['./release-details.component.scss']
})
export class ReleaseDetailsComponent implements OnInit, OnDestroy {

  private routerSubscription: any;
  private releaseDocument: AngularFirestoreDocument<Release>;
  releaseObservable: Observable<Release>;
  bandcampWidgetUrl = null;
  descriptionHTML = '';

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
      const releaseId = params['releaseId'];
      this.releaseDocument = this.afs.doc<Release>(`release/${releaseId}`);
      this.releaseObservable = this.releaseDocument.valueChanges();
      this.releaseObservable.subscribe( release => {
        // Replace carriage returns with the HTML version of it:
        this.descriptionHTML = release.description.replace( /\\n/g, '<br />' );
        this.bandcampWidgetUrl =
          this.sanitizer.bypassSecurityTrustResourceUrl(`https://bandcamp.com/EmbeddedPlayer/album=
            ${release.bandcampReleaseId}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/artwork=none/`);
      });
    });
  }


  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
