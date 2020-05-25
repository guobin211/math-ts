/**
 * 获取昨天，上个月，上一年
 * @param now
 * @param l
 */
export function getPrev(now: Date, l: string) {
    const y = now.getFullYear();
    const m = now.getMonth();
    const d = now.getDate();
    const h = now.getHours();
    const f = now.getMinutes();
    const s = now.getSeconds();
    if (l === "d" || l === "D") {
        return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    } else if (l === "m" || l === "M") {
        const days = new Date(y, m, 0).getDate();
        const prev = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
        return new Date(prev.getFullYear(), prev.getMonth(), d, h, f, s);
    } else {
        return new Date(y - 1, m, d, h, f, s);
    }
}
