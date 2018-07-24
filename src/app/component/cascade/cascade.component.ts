import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Http} from "@angular/http";
// 静态数据
const options = [{
  value: '浙江',
  label: '浙江',
  children: [{
    value: '杭州',
    label: '杭州',
    children: [{
      value: '西湖',
      label: '西湖',
      isLeaf: true
    }]
  }, {
    value: '宁波',
    label: '宁波',
    isLeaf: true
  }]
}, {
  value: '江苏',
  label: '江苏',
  children: [{
    value: '南京',
    label: '南京',
    children: [{
      value: '中华门',
      label: '中华门',
      isLeaf: true
    }]
  }]
}];

// load数据
const provinces = [{
  value: 'zhejiang',
  label: 'Zhejiang'
}, {
  value: 'jiangsu',
  label: 'Jiangsu'
}];

const cities = {
  zhejiang: [{
    value: 'hangzhou',
    label: 'Hangzhou'
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }],
  jiangsu: [{
    value: 'nanjing',
    label: 'Nanjing'
  }]
};


const scenicspots = {
  hangzhou: [{
    value: 'xihu',
    label: 'West Lake',
    isLeaf: true
  }],
  nanjing: [{
    value: 'zhonghuamen',
    label: 'Zhong Hua Men',
    isLeaf: true
  }]
};

@Component({
  selector: 'app-cascade',
  templateUrl: './cascade.component.html',
  styleUrls: ['./cascade.component.scss']
})
export class CascadeComponent implements OnInit {

  /** init data */
  nzOptions = options;

  /** ngModel value */
  public values: any[] = ['zhejiang', 'hangzhou', 'xihu'];

  public form: FormGroup;
  provinces = [];
  city = [];
  scenicspots = [];

  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
  }

  ngOnInit() {
    this.http.get('./assets/data/city.json').subscribe((data) => {
      //  所有的城市数组
      let obj: { value: any; lable: any; children: any };
      const city = JSON.parse(data['_body']);

      // 拿到每个省
      for (let i = 0; i < city.length; i++) {
        obj = {
          value: city[i].name,
          lable: city[i].name,
          children: []
        };
        this.provinces.push(obj);

        let citys = city[i].city;
        // 拿到每个市
        for (let a = 0; a < citys.length; a++) {
          obj = {
            value: citys[a].name,
            lable: citys[a].name,
            children: []
          };
          this.city.push(obj);

          let scenicspots = citys[a].area;
          // 拿到每个区
          for (let i = 0; i < scenicspots.length; i++) {
            obj = {
              value: scenicspots[i],
              lable: scenicspots[i],
              children: []
            };
            this.scenicspots.push(obj);

          }
        }
      }
    });
    // console.log(this.city);
  }

  public reset(): void {
    this.form.reset();
    console.log(this.form.value);
  }

  public submit(): void {
    console.log(this.form.value);
  }

  public onChanges(values: any): void {
    console.log(values);
  }

  /** load data async execute by `nzLoadData` method */
  public loadData(node: any, index: number): PromiseLike<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (index < 0) { // if index less than 0 it is root node
          node.children = provinces;

        } else if (index === 0) {
          node.children = cities[node.value];
        } else {
          node.children = scenicspots[node.value];
        }
        resolve();
      }, 1000);
    });
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required]
    });
  }

}
