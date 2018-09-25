import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash', templateUrl: './lodash.component.html'
})
export class LodashComponent implements OnInit {

  constructor () {
  }

  ngOnInit () {
    const arr = [1, 3, 4, 6, 7];
    console.log(_.chunk(arr, 2));
    // console.log(_.concat(arr, [2, 3]));
  }

}
