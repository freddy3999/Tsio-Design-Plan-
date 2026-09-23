import { useEffect } from "react";
import { useLocation } from "react-router";
import { findPage, pageTitle } from "../config/pages";

// ============================================================
//  usePageTitle
//  換頁時依 config/pages.js 更新瀏覽器分頁標題。
//  直接開啟網址時，打包好的 index.html 已經是正確標題；
//  這支負責站內點連結換頁（不重新載入 HTML）的情況。
//
//  用法：
//    usePageTitle();              // App 層：依網址查 pages.js
//    usePageTitle(article.title); // 內容來自 API 的頁面自行指定
// ============================================================
export default function usePageTitle(title) {
	const { pathname } = useLocation();

	useEffect(() => {
		const t = title !== undefined ? title : findPage(pathname)?.title;
		document.title = pageTitle(t);
	}, [pathname, title]);
}
