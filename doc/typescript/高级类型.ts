/**
 * 交叉类型
 * @param first
 * @param second
 */
function extend<T, U>(first: T, second: U): T & U {
    const result = {} as T & U;
    // tslint:disable-next-line:forin
    for (const id in first) {
        (result as any)[id] = (first as any)[id];
    }
    for (const id in second) {
        if (!result.hasOwnProperty(id)) {
            (result as any)[id] = (second as any)[id];
        }
    }
    return result;
}

export class Person {
    constructor(public name: string) { }
}

interface LogAble {
    log(): void;
}
class ConsoleLogger implements LogAble {
    log() {
        // ...
    }
}
const jim = extend(new Person("Jim"), new ConsoleLogger());
const n = jim.name;
jim.log();
