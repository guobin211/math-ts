import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';

export class AppRoutingCache implements RouteReuseStrategy {

  public static handlers: { [key: string]: DetachedRouteHandle } = {};

  /**
   * 能否复用路由
   * @param route
   */
  public shouldDetach (route: ActivatedRouteSnapshot): boolean {
    // 通过给路由配置项增加data: { keep: true }来进行选择性使用
    return route.data.keep;
  }

  /**
   *   当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象
   */
  public store (route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    AppRoutingCache.handlers[this.getRouteUrl(route)] = handle;
  }

  /**
   * 若path在缓存中有的都认为允许还原路由
   * @param route
   */
  public shouldAttach (route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!AppRoutingCache.handlers[this.getRouteUrl(route)];
  }

  /**
   * 从缓存中获取快照，若无则返回null
   * @param route
   */
  public retrieve (route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return AppRoutingCache.handlers[this.getRouteUrl(route)];
  }

  /**
   * 进入路由触发，判断是否同一路由
   * @param future
   * @param current
   */
  public shouldReuseRoute (future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return future.routeConfig == current.routeConfig;
  }

  /**
   * 计算路由的url
   * @param route
   */
  private getRouteUrl (route: ActivatedRouteSnapshot) {
    return route['_routerState'].url.replace(/\//g, '_') + '_' + (route.routeConfig.loadChildren || route.routeConfig.component.toString().split('(')[0].split(' ')[1]);
  }
}
