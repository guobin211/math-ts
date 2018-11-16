export class TestMathTs {
    public version: string;
    constructor(v: string) {
        this.version = v;
    }
    public logVersion(): void {
        console.log(this.version)
    }
}

const mathTs = new TestMathTs('1.0.1');

mathTs.logVersion();