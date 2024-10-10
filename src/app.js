import Router from "./router.js";
import Home from "./pages/Home.js";
import Join from "./pages/Join.js";
import Login from "./pages/Login.js";
import Product from "./pages/Product.js";
import ProductDeatil from "./pages/ProductDetail.js";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/join", component: Join },
  { path: "/product", component: Product },
  { path: "/product/detail", component: ProductDeatil },
];

const $app = document.getElementById("root");

//DOMContentLoaded  : 브라우저가 DOM 트리를 완성하는 즉시 발생하는 이벤트
document.addEventListener("DOMContentLoaded", (e) => {
  const router = new Router(routes);
  console.log(router.loadInitialRoute());
  console.log(router);
});
