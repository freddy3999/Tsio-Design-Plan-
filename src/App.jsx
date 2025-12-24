// App.jsx
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router';
import Nav from './index_component/Nav';
import Footer from './index_component/Footer';

function App() {
  return (
    <div className="relative w-full space-y-[120px]">
      <ScrollRestoration /> {/* 解決捲軸問題 */}
      <Nav />
      {/* Outlet 會根據路由渲染正確的子頁面 */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;