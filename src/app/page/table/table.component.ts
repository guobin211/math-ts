import {Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-table', templateUrl: './table.component.html', styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSet = [];

  constructor () {
  }

  /**
   * string转csv下载
   * @param data csv文件text字符串
   * @param name 图表标题
   */
  static stringToCsv (data: string, name: string) {
    const blob = new Blob(['\uFEFF' + data], {type: 'text/csv;charset=utf-8;'});
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const title = name + month + '月' + day + '日' + '.csv';
    const eleLink = document.createElement('a');
    eleLink.download = title;
    eleLink.style.display = 'none';
    eleLink.href = window.URL.createObjectURL(blob);
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
  }

  ngOnInit () {
    this.dataSet = this.buildData();
    console.log(XLSX);
    const arr = [['栏位1', '栏位2', '栏位3', '栏位4'], ['22', '21', '234', '栏位4'], ['33', '11', '1231sad', '栏位4'], ['44', '33', '31', '栏位4'],];
    const csv = this.arrayToStringCsv(arr);
    console.log(csv);
    // TableComponent.stringToCsv(csv, 'test');
  }

  arrayToStringCsv (arr: Array<Array<any>>): string {
    let strAll = '';
    for (let i = 0; i < arr.length; i++) {
      let _str = '';
      for (let j = 0; j < arr[i].length; j++) {
        _str += arr[i][j] + ',';
      }
      strAll += _str + '\n';
    }
    return strAll;
  }

  buildData (): Array<any> {
    const reArr = [];
    for (let i = 0; i < 10; i++) {
      const obj = {
        id: i, name: `第${i + 1}个jack`, rate: i + 30,
      };
      reArr.push(obj);
    }
    return reArr;
  }

  upload () {
    // const aoa = [
    //   ['姓名', '性别', '年龄', '注册时间'],
    //   ['张三', '男', 18, new Date()],
    //   ['李四', '女', 22, new Date()]
    // ];
    // const sheet = XLSX.utils.aoa_to_sheet(aoa);
    // const blb = GTable.sheetToBlob(sheet, 'Sheet1');
    // GTable.openDownloadDialog(blb, 'test');
    document.getElementById('upload-hook').click();
  }

  loadFile (e: any) {
    e.stopPropagation();
    e.preventDefault();
    const file = e.srcElement.files;
    // console.log(e.srcElement.files);
    const render = new FileReader();
    // 读取成text-html .csv文件
    // render.readAsText(file[0]);
    render.readAsBinaryString(file[0]);
    render.onload = (ev: any) => {
      const data = ev.target.result;
      //  文件读取成workbook
      const workbook = XLSX.read(data, {type: 'binary'});
      //  workbook转json
      const datajson = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1']);
      console.log(workbook);
      console.log(datajson);
    };
  }

  /*
   * 导出excel
   * @param dom
   * @param title
   */
  saveExcel (dom: string, title: string) {
    const out = document.getElementById(dom).outerHTML;
    const html = `<html><head><meta charset='utf-8'/></head><body> + ${out} + </body></html>`;
    // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
    const blob = new Blob([html], {type: 'application/vnd.ms-excel'});
    //  页面一个隐藏的a标签存储数据
    const aDom = document.getElementById('download');
    // 利用URL.createObjectURL()方法为a元素生成blob URL
    // @ts-ignore
    aDom.href = URL.createObjectURL(blob);
    // @ts-ignore
    aDom.download = title + '.xls';
    aDom.click();
  }
}
