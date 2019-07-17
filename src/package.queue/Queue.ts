export class Queue {

    private readonly collection: any[];

    constructor() {
        this.collection = [];
    }

    enqueue(el: any) {
        this.collection.push(el);
    }

    dequeue(): any {
        if (this.isEmpty()) {
            throw new Error('empty queue not allowed dequeue');
        } else {
            return this.collection.shift();
        }
    }

    front(): any {
        return this.collection[0];
    }

    size(): number {
        return this.collection.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }
}
