export interface Linked<T> {
    data: T;
}

export class LinkedList<T> implements Linked<T> {
    data: T;
    constructor() {
        this.data = Object.create(null);
    }
}

