import {Pipe, PipeTransform} from '@angular/core';

// 管道名 'multiple'
@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {
  // value 原始值,  args？ 可选传入参数, 返回值类型：number
  transform(value: number, args?: number): number {
    // 管道的功能 乘法
    if (!args) {
      args = 1;
    }
    return value * args;
  }

}
