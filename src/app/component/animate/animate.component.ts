import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, useAnimation
} from '@angular/animations';
import {bounce} from "ng-animate";
@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce, {
      // Set the duration to 5seconds and delay to 2seconds
      params: {timing: 5, delay: 2}
    }))]),
    trigger('changeState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(0.8)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', color: '#f08300', background: '#f08'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)', color: '#f08', background: '#f08300'}))
      ])
    ])
  ]
})
export class AnimateComponent implements OnInit {
  data = [{
    state: 'active',
  }, {
    state: 'inactive',
  }];
  isShow = true;
  constructor() {
  }

  ngOnInit() {
  }

  toggleState(item) {
    if (item.state == 'active') {
      item.state = 'inactive';
    } else {
      item.state = 'active';
    }
  }

  onLeave() {
    setTimeout(() => {
      this.isShow = false
    }, 200);
    setTimeout(() => {
      this.isShow = true
    }, 1200)
  }
}
