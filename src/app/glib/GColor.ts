export class GColor {

  constructor () {
  }
  static getColor(num: number, col?: Array<string>): Array<string> {
    const colors = [
      '#F8D800', '#0396FF', '#EA5455', '#7367F0', '#32CCBC', '#F6416C', '#28C76F', '#9F44D3', '#623AA2', '#F55555',
      '#8C1BAB', '#9708CC', '#736EFE', '#E96D71', '#FA016D', '#DE4313', '#002661', '#6018DC', '#D939CD', '#130CB7',
      '#A64DB6', '#5312D6', '#0E5CAD', '#E80505', '#CA26FF', '#360940', '#4C83FF', '#F072B6', '#123597', '#C346C2',
      '#5961F9', '#FD6585', '#465EFB', '#FFC600', '#FD6E6A', '#65FDF0', '#1D6FA3', '#58CFFB', '#5151E5', '#FF52E5',
      '#3C8CE7', '#1904E5', '#FFA8A8', '#FF96F9', '#3B2667', '#72EDF2', '#FFA6B7', '#87CEFA', '#4169E1', '#1E90FF'
    ].concat(col);
    const reArr: Array<string> = [];
    const l: number = colors.length;
    for (let i = 0; i < num; i++) {
      const n = Math.floor(Math.random() * (l - 1)) + 0;
      if (colors[n]) {
        reArr.push(colors[n])
      }
    }
    return reArr;
  }

  /**
   * 生成16进制随机颜色
   */
  static randomColor (): string {
    return '#' + (function (color) {
      return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)]) && (color.length === 6) ? color : arguments.callee(color);
    })('');
  }
  /**
   * 产生随机整数，包含下限值，包括上限值
   * @param {Number} lower 下限
   * @param {Number} upper 上限
   * @return {Number} 返回在下限到上限之间的一个随机整数
   */
  static random(lower: number, upper: number): number {
    return Math.floor(Math.random() * (upper - lower+1)) + lower;
  }
  /**
   * 产生一个随机的rgb颜色
   * @return {String}  返回颜色rgb值字符串内容，如：rgb(201, 57, 96)
   */
  static rgbColor() {
    // 随机生成 rgb 值，每个颜色值在 0 - 255 之间
    const r = GColor.random(0, 256),
        g = GColor.random(0, 256),
        b = GColor.random(0, 256);
    // 连接字符串的结果
    const result = 'rgb(' + r + ',' + g + ',' + b + ')';
    // 返回结果
    return result;
  }

}
