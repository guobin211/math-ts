/**
 * browersWidth
 * @author guobin201314@gmail.com on 2019-04-17
 */

export const browersWidth = () => {
  if ((document.body) && (document.body.clientWidth)) {
    return document.body.clientWidth;
  } else {
    return window.innerWidth;
  }
}
