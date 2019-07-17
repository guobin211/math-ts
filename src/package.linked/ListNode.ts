/**
 * ListNode
 * @author guobin201314@gmail.com on 2019-01-14
 */

export class ListNode {
    public val!: number;
    public next!: ListNode;

    constructor(args: number | number[]) {
        if (typeof (args) === 'number') {
            this.val = args;
        } else {
            this.initialize(args);
        }
    }

    public deleteNode(node: ListNode): void {
        if (this.next === null) {
            return;
        }
        let compare = true;
        while (compare) {
            if (this.next.val === node.val) {
                this.next = this.next.next;
                compare = false;
            }
        }
    }
    public toString(): string {
        let res: string = '[';
        let current: ListNode | null = this;
        while (current !== null) {
            res += current.val + ',';
            current = current.next;
        }
        res = res.slice(0, res.length - 1) + ']';
        return res;
    }

    private initialize(nums: number[]): void {
        if (nums.length === 0 || nums === null) {
            throw new Error("not allowed empty array");
        }
        this.val = nums[0];
        let current: ListNode = this;
        for (let i = 1; i < nums.length; i++) {
            current.next = new ListNode(nums[i]);
            current = current.next;
        }
    }
}
