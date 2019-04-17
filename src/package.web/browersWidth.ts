/**
 * browersWidth
 * @author guobin201314@gmail.com on 2019-04-17
 */

export function browersWidth(): number {
    if ((document.body) && (document.body.clientWidth)) {
        return document.body.clientWidth;
    } else {
        return window.innerWidth;
    }
}
