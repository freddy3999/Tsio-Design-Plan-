import { NavLink } from "react-router";

// ============================================================
//  跑馬燈公告 — 排在首頁 Banner 與「設醮」之間，提醒使用者有新資訊
//  刻意不用整條深色底：只留上下兩條細線，在白底版面上不搶視覺
// ============================================================

// 公告文字：要換內容改這一行就好
const MESSAGE = "「對話的對話」已開展！";

// 點擊整條橫幅後前往的頁面
const TARGET = "/Plan/ExhibitionList";

// 一份內容重複幾次。單份用 min-w-[100vw] 保底寬過視窗，
// 所以就算公告文字改得很短、或螢幕很寬也不會出現空隙（items 會自動撐開間距）。
// 這個數字只影響「文字排得多密」：想更密就調大，更疏就調小。
const REPEAT = 4;

export default function Marquee({ className = "" }) {
	return (
		<NavLink
			to={TARGET}
			aria-label={MESSAGE}
			className={`marquee-bar flex h-[var(--marquee-h)] w-full items-center overflow-hidden border-y border-primary bg-white select-none ${className}`}
		>
			{/* 螢幕上的內容是同一句話重複多次，只讓輔助科技讀到其中一份 */}
			<span className="sr-only">{MESSAGE}</span>
			<div aria-hidden="true" className="marquee-track flex w-max">
				{[0, 1].map((half) => (
					<div
						key={half}
						className="flex min-w-[100vw] shrink-0 justify-around"
					>
						{Array.from({ length: REPEAT }, (_, i) => (
							<span
								key={i}
								className="subtitle lg:bodyText-large-web whitespace-nowrap px-[2.5em]"
							>
								{MESSAGE}
							</span>
						))}
					</div>
				))}
			</div>
		</NavLink>
	);
}
