/**
 * BST
 * @author guobin201314@gmail.com on 2019-03-09
 */
export abstract class BaseNode<T> {
    public readonly abstract id: string;
    public readonly abstract parentId: string | null;
    public readonly abstract children: BaseNode<T>[];
    public readonly abstract data: T;
    public abstract isRoot: () => boolean;
}

