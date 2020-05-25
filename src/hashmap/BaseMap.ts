export class BaseMap {
    private _data: any;
    private _length: number;

    get length() {
        return this._length;
    }

    constructor() {
        this._data = Object.create(null);
        this._length = 0;
    }

    clear() {
        this._data = Object.create(null);
        this._length = 0;
    }

    remove(key: string) {
        delete this._data[key];
    }

    has(key: string) {
        for (const _key in this._data) {
            if (_key === key) {
                return true;
            }
        }
        return false;
    }

    get(key: string) {
        return this._data[key];
    }

    set(key: string, value: any) {
        if (this.has(key)) {
            this._data[key] = value;
        } else {
            this._data[key] = value;
            this._length++;
        }
    }
}
