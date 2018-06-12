import { ReleaseWithId } from './../../model/Release';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-links',
  templateUrl: './shop-links.component.html',
  styleUrls: ['./shop-links.component.scss']
})
export class ShopLinksComponent implements OnInit {

  @Input()
  release: ReleaseWithId;

  constructor() { }

  ngOnInit() {
  }

}
