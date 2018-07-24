///<reference path="../../../../node_modules/@types/echarts/index.d.ts"/>
import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit {
  option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  constructor() {
  }

  ngOnInit() {
    let mychart = echarts.init(document.getElementById('main'));
    mychart.setOption(this.option)
  }

}
