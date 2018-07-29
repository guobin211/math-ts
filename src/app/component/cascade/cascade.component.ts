import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Http} from "@angular/http";
import {Citys} from "../../class/citys";
import {Observable} from "rxjs/index";

/** 固定城市数据 **/
const cityOptions = [
  {
    value: '北京市',

    label: '北京市',

    children: [
      {

        value: '北京市',

        label: '北京市',
        isLeaf: true,

        children: [

          {value: '东城区', label: '东城区',
            isLeaf: true,},

          {value: '西城区', label: '西城区',
            isLeaf: true,},

          {value: '崇文区', label: '崇文区',
            isLeaf: true,},

          {value: '宣武区', label: '宣武区',
            isLeaf: true,},

          {value: '朝阳区', label: '朝阳区',
            isLeaf: true,},

          {value: '丰台区', label: '丰台区',
            isLeaf: true,},

          {value: '石景山区', label: '石景山区',
            isLeaf: true,},

          {value: '海淀区', label: '海淀区',
            isLeaf: true,},

          {value: '门头沟区', label: '门头沟区',
            isLeaf: true,},

          {value: '房山区', label: '房山区',
            isLeaf: true,},

          {value: '通州区', label: '通州区',
            isLeaf: true,},

          {value: '顺义区', label: '顺义区',
            isLeaf: true,},

          {value: '昌平区', label: '昌平区',
            isLeaf: true,},

          {value: '大兴区', label: '大兴区',
            isLeaf: true,},

          {value: '怀柔区', label: '怀柔区',
            isLeaf: true,},

          {value: '平谷区', label: '平谷区',
            isLeaf: true,},

          {value: '密云县', label: '密云县',
            isLeaf: true,},

          {
            value: '延庆县', label: '延庆县',
          isLeaf: true,
          }

        ]

      }
    ]

  },
  {
    value: '河北省',
    label: '河北省',
    children: [

      {

        value: '石家庄市',

        label: '石家庄市',
        isLeaf: true,
        children: [

          {value: '长安区', label: '长安区',
            isLeaf: true,},

          {value: '桥东区', label: '桥东区',
            isLeaf: true,},

          {value: '桥西区', label: '桥西区'
            ,
            isLeaf: true,},

          {value: '新华区', label: '新华区'
            ,
            isLeaf: true,},

          {value: '井陉矿区', label: '井陉矿区'
            ,
            isLeaf: true,},

          {value: '裕华区', label: '裕华区'
            ,
            isLeaf: true,},

          {value: '井陉县', label: '井陉县'
            ,
            isLeaf: true,},

          {value: '正定县', label: '正定县'
            ,
            isLeaf: true,},

          {value: '栾城县', label: '栾城县'
            ,
            isLeaf: true,},

          {value: '行唐县', label: '行唐县'
            ,
            isLeaf: true,},

          {value: '灵寿县', label: '灵寿县'
            ,
            isLeaf: true,},

          {value: '高邑县', label: '高邑县'
            ,
            isLeaf: true,},

          {value: '深泽县', label: '深泽县'
            ,
            isLeaf: true,},

          {value: '赞皇县', label: '赞皇县'
            ,
            isLeaf: true,},

          {value: '无极县', label: '无极县'
            ,
            isLeaf: true,},

          {value: '平山县', label: '平山县'
            ,
            isLeaf: true,},

          {value: '元氏县', label: '元氏县'
            ,
            isLeaf: true,},

          {value: '赵县', label: '赵县'
            ,
            isLeaf: true,},

          {value: '辛集市', label: '辛集市'
            ,
            isLeaf: true,},

          {value: '藁城市', label: '藁城市'
            ,
            isLeaf: true,},

          {value: '晋州市', label: '晋州市'
            ,
            isLeaf: true,},

          {value: '新乐市', label: '新乐市'
            ,
            isLeaf: true,},

          {
            value: '鹿泉市', label: '鹿泉市',
            isLeaf: true
          }

        ]

      },

      {

        value: '唐山市',

        label: '唐山市',

        children: [

          {value: '路南区', label: '路南区' ,isLeaf: true},

          {value: '路北区', label: '路北区',isLeaf: true},

          {value: '古冶区', label: '古冶区',isLeaf: true},

          {value: '开平区', label: '开平区',isLeaf: true},

          {value: '丰南区', label: '丰南区',isLeaf: true},

          {value: '丰润区', label: '丰润区',isLeaf: true},

          {value: '滦县', label: '滦县',isLeaf: true},

          {value: '滦南县', label: '滦南县',isLeaf: true},

          {value: '乐亭县', label: '乐亭县',isLeaf: true},

          {value: '迁西县', label: '迁西县',isLeaf: true},

          {value: '玉田县', label: '玉田县',isLeaf: true},

          {value: '唐海县', label: '唐海县',isLeaf: true},

          {value: '遵化市', label: '遵化市',isLeaf: true},

          {value: '迁安市', label: '迁安市',
            isLeaf: true}

        ]

      },
]}
];

@Component({
  selector: 'app-cascade',
  templateUrl: './cascade.component.html',
  styleUrls: ['./cascade.component.scss']
})
export class CascadeComponent implements OnInit {

  /** init data */
  nzOptions = cityOptions;

  public form: FormGroup;

  provinces: Observable<Citys>;

  public all = [];
  constructor(private fb: FormBuilder, private http: Http) {
  }

  ngOnInit() {
    this.http.get('./assets/data/city.json').subscribe((data) => {
      //  所有的城市数组
      let provin: { value: any; lable: any; children: any };
      let citys: { value: any; lable: any; isLeaf: true; children: any };
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
            isLeaf: true,
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
        this.all.push(provin);
      }
      console.log(this.all);
    });

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

  private createForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required]
    });
  }

}
