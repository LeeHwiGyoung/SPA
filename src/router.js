//라우터 클래스 작성
class Router {
  constructor(routes) {
    this.routes = routes;
    this.loadInitialRoute();
  }

  loadRoute(urlPath) {
    const matchedRoute = this.matchUrlRoute(urlPath);
    const url = `${urlPath}`;
    window.history.pushState({}, "", url);
    const app = document.getElementById("root");
    app.innerHTML = matchedRoute.component.template();
  }

  matchUrlRoute(urlPath) {
    return this.routes.find((route) => route.path === urlPath);
  }

  loadInitialRoute() {
    const pathName = window.location.pathname;
    this.loadRoute(pathName);
  }
}

export default Router;
