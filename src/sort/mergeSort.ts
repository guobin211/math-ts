/**
 * 归并排序
 * @param arr
 */
export function mergeSort(arr: Array<number>): any {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    const middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));

    function merge(left1: Array<number>, right1: Array<number>) {
        const result = [];

        while (left1.length > 0 && right1.length > 0) {
            if (left1[0] <= right[0]) {
                result.push(left1.shift());
            } else {
                result.push(right1.shift());
            }
        }

        while (left1.length) {
            result.push(left1.shift());
        }

        while (right1.length) {
            result.push(right1.shift());
        }

        return result;
    }
}
