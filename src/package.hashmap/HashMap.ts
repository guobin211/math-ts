export class HashMap<T> {
    constructor() {}

    hash(obj: T) {

    }

    private _objToHash(obj: any) {
        if (typeof obj === 'number') {
        }
    }

    static toBinaryString(obj: string): string {
        return window.atob(obj)
    }

    static toUTF16(sString: string) {
        let aUTF16CodeUnits: any = new Uint16Array(sString.length);
        Array.prototype.forEach.call(aUTF16CodeUnits, function (el, idx, arr) { arr[idx] = sString.charCodeAt(idx); });
        // @ts-ignore
        return window.btoa(String.fromCharCode.apply(null, new Uint8Array(aUTF16CodeUnits.buffer)));

    }
}
