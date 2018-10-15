import {Component, OnInit} from '@angular/core';
import {Ajax} from '../../tools/ajax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ajax = new Ajax();
  constructor() { }

  ngOnInit() {
    // this.ajax.test();
    // this.ajax.xhr.open('get','http://127.0.0.1:3000/api', true);
    // this.ajax.xhr.send();
    // this.ajax.xhr.onreadystatechange = () => {
    //   if (this.ajax.xhr.readyState===4 && this.ajax.xhr.status==200)
    //   {
    //     console.log(this.ajax.xhr.responseText);
    //   }
    // }
    // Ajax.getJson('http://127.0.0.1:3000/api', (res) => {
    //   console.log(res);
    // });
    // axios
    // Ajax.get('http://127.0.0.1:3000/api').then(res => {
    //   console.log(res)
    // }).catch(err=> {
    //   console.log(err)
    // }).then(() => {
    //   console.log('complete');
    // })
  }

  fileChange (ev: any) {
    console.log(ev.target.files[0]);
  }
}
