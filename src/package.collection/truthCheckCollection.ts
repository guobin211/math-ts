/**
 * 集合中对象属性的真值检查
 * @param collection
 * @param pre
 */
export function truthCheckCollection(collection: any[], pre: string) {
    return collection.every((obj) => obj[pre]);
}
