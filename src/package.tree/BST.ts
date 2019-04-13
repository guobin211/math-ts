/**
 * BST
 * @author guobin201314@gmail.com on 2019-03-09
 */
export class Node {

    data: any;
    left: any;
    right: any;

    constructor(data: any, left?: any, right?: any) {
        this.data = data;
        left ? this.left = left : this.left = null;
        right? this.right = right : this.right = null;
    }
}

export class BST {

    private root: any;

    private addData: any;

    constructor() {
        this.root = null;
    }

    add(data: any) {
        const node = this.root;
        this.addData = data;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            return this.searchTree(node);
        }
    }

    private searchTree(node: Node): any {
        if (this.addData < node.data) {
            if (node.left === null) {
                node.left = new Node(this.addData);
                this.addData = null;
                return;
            } else {
                return this.searchTree(node.left);
            }
        } else if (this.addData > node.data) {
            if (node.right === null) {
                node.right = new Node(this.addData);
                this.addData = null;
                return;
            } else {
                return this.searchTree(node.right);
            }
        } else {
            return null;
        }
    }
}



