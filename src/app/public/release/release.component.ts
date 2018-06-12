import { Release, ReleaseWithId } from './../../model/Release';
import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {

  artistAndTitle = '';

  @Input()
  release: ReleaseWithId;

  constructor() { }

  ngOnInit() {
    if ( this.release ) {
      this.artistAndTitle = this.release.artist + '-' + this.release.title;
      this.artistAndTitle = _.replace( this.artistAndTitle, / \/ /g, '-');
      this.artistAndTitle = _.replace( this.artistAndTitle, / /g, '-');
    }
  }
}
