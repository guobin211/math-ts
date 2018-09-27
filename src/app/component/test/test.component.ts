import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {HttpClientService} from '../../service/httpclient.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // http完整的响应头
  private responseHeaders;
  // http响应type
  private contentType;
  constructor(private http: HttpService, private client: HttpClientService) {
  }

  ngOnInit() {
    // this.client.getData('aaa').subscribe( res => {
    //   console.log(res);
    // });

    // 通过client获取响应信息
    // this.client.getConfigResponse('http://localhost:3000/api/').subscribe(
    //    resp => {
    //      this.responseHeaders = resp.headers;
    //      this.contentType = resp.headers.get('Content-Type');
    //      console.log(this.contentType);
    //    }
    // );
    //  this.client.postForm('aaa', {name: 'jack'}).subscribe( res => {
    //    console.log(res);
    //  });

    this.client.postData('aaa', 'name=jack').subscribe(res => {
      console.log(res);
    });
    // this.client.getData('aaa', {'name': 'jack', 'age': 18}).subscribe( res => {
    //   console.log(res);
    // });


  }

}
