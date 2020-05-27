/* 根据条件过滤一个对象数组，同时过滤掉未指定的键（key
 @param data
 @param keys
 @param fn

 @example
 const data = [
    {
        id: 1,
        name: 'john',
        age: 24
    },
    {
        id: 2,
        name: 'mike',
        age: 50
    }
];

reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]*/
export function reducedFilter(data: Array<any>, keys: Array<string>, fn: any) {
    return data.filter(fn).map(el =>
        keys.reduce((acc, key) => {
            // @ts-ignore
            acc[key] = el[key];
            return acc;
        }, {})
    );
}
