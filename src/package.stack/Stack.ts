export class Stack<T>{

    private _store: any[] = [];

    private top: any;

    constructor() {
        this.top = 0;
    }

    clear(): void {
        this._store = [];
        this.top = 0;
    }

    peek(): T {
        return this._store[this.top-1];
    }

    pop(): T {
        if (this.top > 0) {
            return this._store[--this.top];
        } else {
            throw new Error('Stack is empty')
        }

    }

    push(el: T): void {
        this._store[this.top++] = el;
    }

    isEmpty(): boolean {
        return this.top === 0;
    }
}
