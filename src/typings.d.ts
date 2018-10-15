/**
 * Author: macbook
 * Date  : 2018/10/1 17:55
 */
/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

declare namespace jasmine {
  // TODO
  interface Matchers<T> {
    toHaveCssClass (expected: any): boolean;
  }
}

declare var G2: any;
declare var DataSet: any;
declare var Slider: any;
