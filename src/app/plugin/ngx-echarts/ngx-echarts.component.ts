import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-echarts',
  templateUrl: './ngx-echarts.component.html',
  styleUrls: ['./ngx-echarts.component.scss']
})
export class NgxEchartsComponent implements OnInit {
  option = {
    title: {
      text: '拓扑图'
    },
    // layout: 'force',
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 20,
        roam: true,
        label: {
          normal: {
            show: false
          },
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: 0,
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 20,
            }
          }
        },
        data: [{
          name: '170LD-1',
          symbol: 'image://http://www.guobin211.com/data/home_32.png',
          x: 200,
          y: 300,
        }, {
          name: 'MCU1',
          x: 400,
          y: 300,
          symbol: 'image://http://www.guobin211.com/data/mcu.png',
        }, {
          name: 'MCU2',
          x: 400,
          y: 100,
          symbol: 'image://http://www.guobin211.com/data/mcu.png',
        }, {
          name: 'MCU3',
          x: 400,
          y: 500,
          symbol: 'image://http://www.guobin211.com/data/mcu.png',
        },
          {
            name: 'icon1',
            x: 600,
            y: 10,
            symbol: 'image://http://www.guobin211.com/data/jybx.png',
          },
          {
            name: 'icon2',
            x: 600,
            y: 200,
            symbol: 'image://http://www.guobin211.com/data/sy.png',
          },
          {
            name: 'icon3',
            x: 600,
            y: 400,
            symbol: 'image://http://www.guobin211.com/data/wyl.png',
          },
          {
            name: 'icon4',
            x: 600,
            y: 600,
            symbol: 'image://http://www.guobin211.com/data/yb.png',
          },
          {
            name: 'icon5',
            x: 600,
            y: 900,
            symbol: 'image://http://www.guobin211.com/data/温度计.png',
          },
          {
            name: 'text1',
            x: 800,
            y: 200,
            value: 'text1'
          }
        ],
        // links: [],
        links: [{
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          categories: {
          },
          label: {
            normal: {
              show: false
            }
          },
        }, {
          source: '170LD-1',
          target: 'MCU1',
        }, {
          source: '170LD-1',
          target: 'MCU2',
        },  {
          source: '170LD-1',
          target: 'MCU3',
        },
          {
            source: 'MCU1',
            target: 'icon1',
          },
          {
            source: 'MCU1',
            target: 'icon2',
          },
          {
            source: 'MCU1',
            target: 'icon3',
          },
          {
            source: 'MCU1',
            target: 'icon4',
          },
          {
            source: 'MCU1',
            target: 'icon5',
          },
          {
            source: 'icon2',
            target: 'text1',
          }
        ],
        lineStyle: {
        }
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
