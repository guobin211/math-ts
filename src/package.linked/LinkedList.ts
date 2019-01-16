export interface Linked {
    value: string | number;
    toArray(): string[] | number[];
    deleteNode(head: LinkedList): void;
    deleteAt(val: number | string): void;
    insertNode(head: LinkedList): void;
    insertAt(val: number | string): void;
    hasCycle(head: LinkedList): boolean;
    removeNthFromEnd(): void;
}

export class LinkedList implements Linked{

    public value!: number | string;
    public next!: LinkedList | null;

    constructor(v: number|string | number[] | string[]) {
        if (typeof(v) === 'string' || typeof(v) === 'number') {
            this.value = v;
            this.next = null;
        } else {
            this.initLinkedList(v);
        }

    }
    deleteAt(val: number | string): void {
    }

    deleteNode(head: LinkedList): void {
        console.log(head);
    }

    hasCycle(): boolean {
        return false;
    }

    insertAt(): void {
    }

    insertNode(): void {
    }

    removeNthFromEnd(): void {
    }

    toArray(): string[] | number[] {
        const res: any[] = [];
        let current: LinkedList | null = this;
        while (current !== null) {
            res.push(current.value);
            current = current.next;
        }
        return res;
    }

    private initLinkedList(args: number[] | string[]) {
        if (args.length === 0) {
            throw new Error("args not allowed empty array")
        }

        this.value = args[0];
        let current: LinkedList = this;
        for (let i = 1; i < args.length; i++) {
            current.next = new LinkedList(args[i]);
            current = current.next;
        }
    }
}

