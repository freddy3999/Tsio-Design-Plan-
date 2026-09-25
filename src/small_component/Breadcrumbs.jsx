import { Link } from "react-router";

// 區塊層級的標籤：英文、全大寫呈現，有路由的可以點回該層。
// 值為 null 表示那一層沒有對應的列表頁（市集、講座、其他活動都是單一頁面）。
// 不在這張表裡的字串一律視為「單頁標題」——不大寫、也不可點。
const SECTIONS = {
	Plan: "/Plan",
	Exhibition: "/Plan/ExhibitionList",
	Workshop: "/Plan/Workshop/List",
	Article: "/Articles",
	Market: null,
	Lecture: null,
	Other: null,
};

// 單頁標題可能很長（文章標題尤其），超過就截斷，
// 完整字串留在 title 屬性，滑鼠停留時看得到。
const MAX_LABEL = 20;

export default function Breadcrumbs({ word, word2, word3 }) {
	// 組出階層。最後一層是當前頁面：灰色、不可點。
	const labels = [word, word2, word3].filter(Boolean);

	return (
		<nav aria-label="麵包屑導覽">
			<ol className="flex items-center gap-[10px] font-serif text-[12px] tracking-[0.15em] lg:text-[14px]">
				{labels.map((label, i) => {
					const isLast = i === labels.length - 1;
					const isSection = Object.hasOwn(SECTIONS, label);
					// 最後一層永遠不可點；其餘只要查得到路由就變成連結
					const link = isLast ? null : SECTIONS[label];
					// 標題是自由文字，套 uppercase 會把英文標題整個變大寫，所以只有區塊標籤才大寫
					const caseClass = isSection ? "uppercase" : "";
					const shown =
						label.length > MAX_LABEL ? `${label.slice(0, MAX_LABEL)}…` : label;
					const fullTitle = shown === label ? undefined : label;

					return (
						<li key={i} className="flex items-center gap-[10px]">
							{i > 0 && (
								<span aria-hidden="true" className="text-gray-400">
									·
								</span>
							)}
							{link ? (
								<Link
									to={link}
									title={fullTitle}
									className={`text-primary hover:text-gray-500 transition-colors duration-[var(--motion-fast)] ${caseClass}`}
								>
									{shown}
								</Link>
							) : (
								<span
									aria-current={isLast ? "page" : undefined}
									title={fullTitle}
									className={`${isLast ? "text-gray-400" : "text-primary"} ${caseClass}`}
								>
									{shown}
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
