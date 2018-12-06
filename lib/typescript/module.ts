/// <reference path="./symbols.ts" />
// 三斜线引用告诉编译器在编译过程中要引入的额外的文件。
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

