import { NavLink } from "react-router";
import Title from "../small_component/Title";
import MoreLink from "../small_component/MoreLink";
import ExhibitionBanner from "../assets/imgs/ExhibitionBanner.webp";

// ============================================================
//  首頁展覽區塊 —— 直接放官方主視覺海報
//  海報本身已含展名、副標、展期、地點、參展人與主辦單位，
//  所以不再另外用文字複述一次。
// ============================================================
export default function Exhibition() {
	return (
		<section className="flex flex-col items-center">
			<Title titleEN="exhibition" title="展覽" />
			{/* 寬度對齊工作坊區塊底部那張大圖（WorkShop.jsx 的 w-[83%]），兩側留白
			    才有呼吸空間；section 是 items-center 的 flex，所以會自動置中。
			    aspect-[16/9] 對齊原圖比例（8000×4500），object-cover 因此不會真的
			    裁到東西，海報右下角的參展人名單與主辦單位 logo 才不會被切掉。 */}
			<NavLink
				to="/Plan/ExhibitionList"
				className="block w-[83%] aspect-[16/9] mt-[var(--title-gap)]"
			>
				<img
					className="headline h-full w-full object-cover"
					src={ExhibitionBanner}
					loading="lazy"
					alt="「對話的對話 — 在彼此的痕跡中流動」展覽主視覺，2026.09.21 至 10.30 於長庚大學"
				/>
			</NavLink>
			<MoreLink
				to="/Plan/ExhibitionList"
				label="查看展覽"
				className="headline mt-[60px] lg:mt-[100px]"
			/>
		</section>
	);
}
