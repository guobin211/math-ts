import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, useAnimation, keyframes
} from '@angular/animations';
import {bounce} from "ng-animate";
@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('rotate', [
      state('in', style({transform: 'rotateX(0)'})),
      transition('void => *', [
        style({transform: 'rotateX(120deg)'}),
        animate(1000)
      ]),
    ]),
    trigger('rotateY', [
      state('in', style({transform: 'rotateY(0)', background: '#f08300'})),
      transition('void => *', [
        style({transform: 'rotateY(120deg)', background: '#e50c1d'}),
        animate(2000)
      ]),
    ]),
    trigger('flyIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(3000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(3000, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ]),
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
