import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../service/http.service';
import {HttpclientService} from '../../service/httpclient.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpService,
              private client: HttpclientService) { }

  ngOnInit() {
   this.http.getData('goods').subscribe(res => {
     console.log(res);
   });
  }

}
