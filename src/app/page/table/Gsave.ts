/**
 * Author: macbook
 * Date  : 2018/10/12 21:12
 */
export class Gsave {
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

  /**
   * 二维数组转csv文件 string
   * arr: [
   *  ['表头1', '表头2', '表头3', '表头4'],
   *  ['列1行1', '列2行1', '列3行1', '列4行1'],
   *  ['列1行2', '列2行2', '列3行2', '列4行2']
   * ]
   * @param arr
   */
  static arrayToStringCsv (arr: Array<Array<any>>): string {
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
}
