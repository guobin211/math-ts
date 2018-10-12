/**
 * Author: macbook
 * Date  : 2018/10/7 20:30
 */
import * as XLSX from 'xlsx';

export class GTable {
  constructor () {
  }

  /**
   *  https://www.cnblogs.com/liuxianan/p/js-excel.html
   *  Workbook = {
   *    SheetNames = ['sheet1', 'sheet2'],
   *    Sheets = [
   *      sheet1: {
   *        !ref : "A1:D4",   // 工作表区间
   *        !merges: [        // 工作表合并单元格 s：开始位置
   *          {e: {r: 0, c: 3}, s: {r: 0, c: 0}},
   *          {....}
   *        ],
   *        A1: {           // 单元格对象内容
   *          t: "s",
   *          v: "小明",
   *          w: "小明"
   *        }
   *      },
   *      sheet2: {
   *
   *      }
   *    ]
   *  }
   *  sheet['!ref']：表示所有单元格的范围，例如从A1到F8则记录为A1:F8；
   *  sheet[!merges]：存放一些单元格合并信息，是一个数组，每个数组由包含s和e构成的对象组成，s表示开始，e表示结束，r表示行，c表示列；
   *
   *  每一个单元格是一个对象（Cell Object, 主要有t、v、r、h、w等字段:
   t：表示内容类型，s表示string类型，n表示number类型，b表示boolean类型，d表示date类型，等等
   v：表示原始值；
   f：表示公式，如B2+B3；
   h：HTML内容
   w：格式化后的内容
   r：富文本内容rich text
   */

  /**
   * 读取本地excel
   * @param file
   * @param callback(workbook)
   */
  static readExcel (file: File, callback) {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function (e: any) {
      const data = e.target.result;
      //  workbook工作表
      const workbook = XLSX.read(data, {type: 'binary'});
      if (callback) {
        callback(workbook);
      }
    };
  }

  /**
   * 读取url地址的excel
   * @param url
   * @param callback
   */
  static readExcelFromUrl (url: string, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function (e) {
      if (200 === xhr.status) {
        const data = new Uint8Array(xhr.response);
        const workbook = XLSX.read(data, {type: 'array'});
        callback(workbook);
      } else {
        callback(false);
      }
    };
    xhr.send();
  }

  /**
   * csv转sheet对象
   * @param csv
   */
  static csvToSheet (csv: any): object {
    const sheet = {}; // 将要生成的sheet
    csv = csv.split('\n');
    csv.forEach(function (row, i) {
      row = row.split(',');
      if (0 === i) {
        sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1);
      } else {
      }
      row.forEach(function (col, j) {
        sheet[String.fromCharCode(65 + j) + (i + 1)] = {v: col};
      });
    });
    return sheet;
  }

  /**
   * 解析表函数（Workbook）
   * XLSX.utils.sheet_to_csv： 生成CSV格式
   XLSX.utils.sheet_to_txt： 生成纯文本格式
   XLSX.utils.sheet_to_html：生成HTML格式
   XLSX.utils.sheet_to_json：输出JSON格式
   生成表函数
   aoa_to_sheet:   将一个二维数组转成sheet，会自动处理number、string、boolean、date等类型数据；
   table_to_sheet: 将一个table dom直接转成sheet，会自动识别colspan和rowspan并将其转成对应的单元格合并；
   json_to_sheet:  将一个由对象组成的数组转成sheet；
   */

  /**
   * 工作表转blob对象 用于下载
   * @param sheet
   * @param sheetName
   */
  static sheetToBlob (sheet, sheetName: string): object {
    const workbook = {
      SheetNames: [sheetName], Sheets: {}
    };
    workbook.Sheets[sheetName] = sheet;
    // 生成excel的配置项
    const options = {
      bookType: 'xlsx', // 要生成的文件类型
      bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
      type: 'binary'
    };
    // @ts-ignore
    const wbS = XLSX.write(workbook, options);
    const blob = new Blob([GTable.stringToAB(wbS)], {type: 'application/vnd.ms-excel'});
    return blob;
  }

  /**
   *  字符串转ArrayBuffer
   */
  static stringToAB (s: string): any {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i != s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  }

  /**
   * 通用的打开下载对话框方法，没有测试过具体兼容性
   * @param url 下载地址，也可以是一个blob对象，必选
   * @param saveName 保存文件名 后缀为 .xls
   */
  static openDownloadDialog (url, saveName) {
    if ('object' == typeof url && url instanceof Blob) {
      url = URL.createObjectURL(url); // 创建blob地址
    }
    const aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName + '.xls'; // 指定保存文件名
    let event;
    // @ts-ignore
    if (window.MouseEvent) {
      event = new MouseEvent('click');
    } else {
      event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
  }
}
