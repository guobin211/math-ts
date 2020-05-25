class Broadcast {
    private _listener: Function[] = [];

    get quantity() {
        return this._listener.length;
    }

    get isEmpty() {
        return this.quantity === 0;
    }

    constructor() {}

    add(listener: Function) {
        this._listener.push(listener);
    }

    remove(listener: Function) {
        for (let i = 0; i < this._listener.length; i++) {
            if (this._listener[i] === listener) {
                this._listener.splice(i, 1);
            }
        }
    }

    clear() {
        this._listener = [];
    }

    send(data: string | object) {
        for (const item of this._listener) {
            item(data);
        }
    }
}

export const broadcast = new Broadcast();
