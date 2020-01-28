/**
 * intToBytes2
 * @author guobin201314@gmail.com on 2019-04-17
 */
export function intToBytes2(n: number): Array<number> {
    const bytes = [];
    for (let i = 0; i < 2; i++) {
        bytes[i] = n >> (8 - i * 8);
    }
    return bytes;
}
