// App.jsx
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router';
import Nav from './index_component/Nav';
import Footer from './index_component/Footer';

function App() {
  // bg-white 不能省：nav 的 mix-blend-difference 需要有實際繪製的背景才會混色，
  // 沒設背景的區域（瀏覽器畫布預設色）不參與混色，白字會直接消失
  //
  // flow-root 也不能省：子頁面第一個區塊常帶 mt-[15vh]/mt-[24vh]，這個 margin 會
  // 往上穿透（margin collapsing）把本層一起推下去，導致畫面最頂端那段沒有白底可混色，
  // nav 在首頁以外的頁面就會消失。flow-root 建立 BFC 把 margin 關在裡面，
  // 版面位置完全不變（margin 從「推開本層」改成「本層內部的留白」）。
  return (
    <div className="relative flow-root w-full space-y-[120px] bg-white">
      <ScrollRestoration /> {/* 解決捲軸問題 */}
      <Nav />
      {/* Outlet 會根據路由渲染正確的子頁面 */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;