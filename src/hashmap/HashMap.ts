export class HashMap<T> {
    private _data: Map<string, T>;
    private _length: number;

    get length() {
        return this._length;
    }

    get isEmpty() {
        return this._length === 0;
    }

    constructor() {
        this._data = new Map<string, T>();
        this._length = 0;
    }

    has(key: string): boolean {
        return this._data.has(key);
    }

    remove(key: string) {
        if (this._data.has(key)) {
            this._data.delete(key);
            this._length--;
        }
    }

    set(key: string, value: any) {
        if (this._data.has(key)) {
            this._data.set(key, value);
        } else {
            this._data.set(key, value);
            this._length++;
        }
    }

    get(key: string): T | undefined {
        return this._data.get(key);
    }

    clear() {
        this._data = new Map<string, T>();
        this._length = 0;
    }
}
