/**
 * BST
 * @author guobin201314@gmail.com on 2019-03-09
 */
export abstract class BaseNode<T> {
    public abstract readonly id: string;
    public abstract readonly parentId: string | null;
    public abstract readonly children: BaseNode<T>[];
    public abstract readonly data: T;
    public abstract isRoot: () => boolean;
}
