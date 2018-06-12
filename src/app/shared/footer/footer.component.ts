import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('showFooter', [
        state('true' , style({ opacity: 1 })),
        state('false', style({ opacity: 0 })),
        transition('0 => 1', animate('1s'))
    ])
  ]
})
export class FooterComponent implements OnInit, AfterViewInit {

  showFooter = false;

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Start the fade-in animation after 2 seconds.
    // The timeout is also needed in order to avoid the ExpressionChangedAfterItHasBeenCheckedError.
    setTimeout( () => {
      this.showFooter = true;
    }, 2000);
  }
}
