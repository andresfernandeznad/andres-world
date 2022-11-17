import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        /* transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s ease-out',
                    style({ opacity: 1 }))
          ]
        ), */
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('1s ease-in',
                    style({ opacity: 0 }))
          ]
        )
      ]
    )]
})
export class LockscreenComponent {

  @ViewChild('lockscreen') lockscreen: any;
  isShown = true;
  index = 0

  hide() {
    this.isShown = false;
  }
}
