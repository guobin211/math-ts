/**
 * whichBrowers
 * @author guobin201314@gmail.com on 2019-04-17
 */

export function whichBrowers(): browers {
  const userAgent = navigator.userAgent;
  const isOpera = userAgent.indexOf('Opera') > -1;
  if (isOpera) {
    return 'Opera';
  }
  if (userAgent.indexOf('Firefox') > -1) {
    return 'FF';
  }
  if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome';
  }
  if (userAgent.indexOf('Safari') > -1) {
    return 'Safari';
  }
  if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
    return 'IE';
  }
}

export type browers = 'Opera' | 'FF' | 'Chrome' | 'Safari' | 'IE' | undefined;
