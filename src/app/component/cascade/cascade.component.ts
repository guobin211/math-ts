import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Http} from "@angular/http";

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }]
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
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

  constructor(private fb: FormBuilder, private http: Http) {
  }

  ngOnInit() {
    this.http.get('./assets/data/city.json').subscribe((data) => {
      //  所有的城市数组
      let provin: { value: any; lable: any; children: any };
      let citys: { value: any; lable: any; children: any };
      let scens: { value: any; lable: any; isLeaf: true };
      const city = JSON.parse(data['_body']);

      // 拿到每个省
      for (let i = 0; i < city.length; i++) {
        provin = {
          value: city[i].name,
          lable: city[i].name,
          children: []
        };
        let mycitys = city[i].city;
        // 拿到每个市
        for (let a = 0; a < mycitys.length; a++) {
          citys = {
            value: mycitys[a].name,
            lable: mycitys[a].name,
            children: []
          };
          let scenicspots = mycitys[a].area;
          // 拿到每个区
          for (let i = 0; i < scenicspots.length; i++) {
            scens = {
              value: scenicspots[i],
              lable: scenicspots[i],
              isLeaf: true
            };
            citys.children.push(scens);
          }
          provin.children.push(citys);
        }
        this.provinces.push(provin);
      }
    });
    console.log(this.provinces);

    this.createForm();
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
