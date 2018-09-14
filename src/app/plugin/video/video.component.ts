import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  srcData: string;
  constructor() {
  }

  ngOnInit() {
    this.srcData = "http://static.videogular.com/assets/videos/videogular.mp4";
  }

}
