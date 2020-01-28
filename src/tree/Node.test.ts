import { BaseNode } from "./Node";

class NumberNode extends BaseNode<number> {
    readonly id: string;
    readonly parentId: string | null;
    readonly data: number;
    readonly children: BaseNode<number>[];
    isRoot: () => boolean;

    constructor(id: string, data: number, parentId?: string) {
        super();
        this.id = id;
        this.data = data;
        this.parentId = parentId ? parentId : null;
        this.children = [];
        this.isRoot = () => this.parentId === null;
    }

}

class NodeManage {

    private readonly _list: NumberNode[] = [];

    public addElement(el: NumberNode) {
        if (el.parentId === null) {
            this._list.push(el);
        } else {
            const res = this._insertByParentId(el, this._list);
            if (res === null) {
                throw new Error(`${el.parentId} is not in collection`);
            }
        }
    }

    public findById(id: string) {
        this._findById(id, this._list);
    }

    private _findById(id: string, list: NumberNode[]): NumberNode | null {
        for (const item of list) {
            if (item.id === id) {
                return item;
            }
            if (item.children.length > 0) {
                this._findById(id, item.children);
            }
        }
        return null;
    }

    private _insertByParentId(el: NumberNode, list: NumberNode[]): NumberNode | null {
        for (const item of list) {
            if (item.id === el.parentId) {
                item.children.push(el);
                return el;
            }
            if (item.children.length > 0) {
                this._insertByParentId(el, item.children);
            }
        }
        return null;
    }

}
