import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import workshops from "./src/data/workshops.json" with { type: "json" };
import articles from "./src/data/article.json" with { type: "json" };

// 按 o 開瀏覽器時改用 Edge（Vite 的 open 套件會讀這個環境變數）
process.env.BROWSER = "msedge";

// 要能直接開啟（貼連結給別人）的子頁網址。main.jsx 新增路由時這裡也要補上。
const SPA_ROUTES = [
	"About",
	"Enroll",
	"Contact",
	"Articles",
	...articles.map((a) => `Articles/${a.id}`),
	"Plan",
	"Plan/ExhibitionList",
	"Plan/ExhibitionList/2024-E001",
	"Plan/Market",
	"Plan/Lecture",
	"Plan/Other",
	"Plan/Workshop",
	"Plan/Workshop/List",
	...workshops.map((w) => `Plan/Workshop/${w.id}`),
	"admin",
];

// NAS 的 Web Station 是 Nginx、沒有 SPA fallback，/Plan/xxx 這種網址會直接 404。
// 打包完替每個子頁建同名資料夾放一份 index.html，Nginx 就找得到實體檔案，
// 載入後再交給 react-router 顯示對應頁面。
function spaRouteFolders() {
	let outDir;
	return {
		name: "spa-route-folders",
		apply: "build",
		configResolved(config) {
			outDir = path.resolve(config.root, config.build.outDir);
		},
		closeBundle() {
			const indexHtml = path.join(outDir, "index.html");
			for (const route of SPA_ROUTES) {
				const dir = path.join(outDir, route);
				fs.mkdirSync(dir, { recursive: true });
				fs.copyFileSync(indexHtml, path.join(dir, "index.html"));
			}
		},
	};
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), spaRouteFolders()],
	// dist 上傳到 NAS Web Station 的網站根目錄（homes/td-plan.id/www），所以 base 是 "/"。
	// 若改掛到子路徑，這裡要改成 "/子路徑/"（router basename 會自動跟著變）。
	base: "/",
	server: {
		host: true,
		// 開發時把 API 與上傳圖片的請求轉給後端（server/index.js，預設 3001 埠）
		proxy: {
			"/api": "http://localhost:3001",
			"/uploads": "http://localhost:3001",
		},
	},
});
