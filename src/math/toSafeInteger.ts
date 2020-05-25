/**
 * 将值转换为安全整数
 * @param num
 */

export const toSafeInteger = (num: number | string) => {
    if (typeof num === "string") {
        num = Number(num);
    }
    return Math.round(
        Math.max(
            Math.min(num, Number.MAX_SAFE_INTEGER),
            Number.MIN_SAFE_INTEGER
        )
    );
};
