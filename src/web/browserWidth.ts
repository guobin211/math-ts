/**
 * browserWidth
 * 获取浏览器视窗宽度
 * @author guobin201314@gmail.com on 2019-04-17
 */
export const browserWidth = () => {
    if (document.body && document.body.clientWidth) {
        return document.body.clientWidth;
    } else {
        return window.innerWidth;
    }
};
