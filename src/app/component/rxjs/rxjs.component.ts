import {Component, OnInit} from '@angular/core';
//  创建操作
import {Observable, of, throwError, zip} from 'rxjs';
//  变换/过滤操作符
import {map} from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-rxjs', templateUrl: './rxjs.component.html', styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  subscription;
  numbers = 1;
  input$: Observable<any>;
  numbers$: Observable<number>;
  ofSum$;
  zip$ = {};
  inputData;
  dataSet = [];
  constructor () {
  }

  ngOnInit () {
    for (let i = 0; i < 10; i++) {
      const obj = {
        name: i, title: `第${i}个`
      };
      this.dataSet.push(obj);
    }
    const arr = [1, 2, 3, 5, 6];
    //  延迟3秒，每一秒执行一次，取前5次
    // const timerNumbers = timer(3000, 1000).pipe(take(5));
    // timerNumbers.subscribe(x => {
    //   // console.log(x);
    // });
    // 错误处理和完成
    // this.ofSum$ = of(10, 20, 30);
    // this.ofSum$.subscribe(
    //   next => console.log('next:', next),
    //   err => console.log('error:', err),
    //   () => console.log('the end'),
    // );
    //  定时循环
    // const numbers = interval(1000);
    // const takeFourNumbers = numbers.pipe(take(4));
    // takeFourNumbers.subscribe(x => {
    //   // console.log('Next: ', x);
    // });
    // dom事件流订阅
    // const el = document.getElementById('input-hooks');
    // this.input$ = fromEvent(el, 'input');
    // this.input$.subscribe(x => console.log(x));
    //  数字流
    // this.numbers$ = from(arr);
    // this.numbers$.subscribe(res => {
    //   // console.log(res);
    //   // 1 -- 2 -- 3 -- 5 -- 6
    // });
    //  简单的创建observable
    // Observable.create(observer => {
    //   try {
    //     observer.next(arr);
    //   } catch (err) {
    //     observer.error(err); // 如果捕获到异常会发送一个错误
    //   }
    // }).subscribe(res => {
    //   // console.log(res);
    // });
    // this.subscription = '观察者';
  }

  /**
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
  onClick (ev: Event) {
    // console.log(ev);
    const text = ev.srcElement.innerHTML;
    Observable.create(observer => {
      observer.next(text);
    }).subscribe(res => {
      console.log(res);
    });
  }

  onInput (ev: any) {
    // console.log(ev);
    const data = ev.target.value;
    this.numbers++;
    Observable.create(observer => {
      try {
        observer.next(`第${this.numbers}次`);
        observer.next(data);
      } catch (err) {
        observer.error(err);
      }
    }).subscribe(res => {
      // console.log(res);
      this.subscription = res;
    });
  }

  onBuild () {
    // 合并操作符
    const age$ = of<number>(27, 25, 29);
    const name$ = of<string>('Foo', 'Bar', 'Beer');
    const isDev$ = of<boolean>(true, true, false);
    zip(age$, name$, isDev$).pipe(map((zipData) => {
      return ({zipData});
    }))
      .subscribe(x => console.log(x.zipData));
  }

  // 上传excel文件
  doUpload (ev: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(ev.target);
    if (1 !== target.files.length) {
      throwError('cannot use');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      const wsname: string = wb.SheetNames[0];
      // 表名字
      // console.log(wsname);
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      // 表内容转json
      this.inputData = (XLSX.utils.sheet_to_json(ws, {header: 1}));
      console.log(this.inputData);
      ev.target.value = '';
    };
    reader.readAsBinaryString(target.files[0]);
  }
}
