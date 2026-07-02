import { useState, useEffect, useCallback } from "react";
import banner1_A from "../assets/banner1_A.JPG";
import banner1_B from "../assets/banner1_B.JPG";
import banner2_A from "../assets/banner2_A.jpg";
import banner2_B from "../assets/banner2_B.png";
import { banner as bannerMotion } from "../config/motion";

// 左欄圖片陣列 — 未來擴充只需在此新增圖片
const leftImages = [banner1_A, banner2_A];
// 右欄圖片陣列 — 未來擴充只需在此新增圖片
const rightImages = [banner1_B, banner2_B];

// 動畫參數統一來自 config/motion.js
const INTERVAL = bannerMotion.interval; // 每張停留時間 (ms)
const STAGGER = bannerMotion.stagger; // 右欄比左欄晚啟動的毫秒數
const DURATION = bannerMotion.duration; // 擦入動畫時長 (ms)
const EASE = bannerMotion.ease; // 擦入緩動

/*
  核心機制（取自附檔 kiiro 輪播）：
  - 新圖（active）用 clip-path 從一側「擦入」蓋住舊圖
  - 內層圖反向位移 → 揭露時產生視差感
  - 左欄由上往下、右欄由下往上，方向相反
  - 舊圖（before）維持完整顯示墊在下層，被蓋住後再重置回隱藏初始態
*/

// 單一欄位的輪播狀態：active = 正在擦入的新圖，before = 墊底的舊圖
function useCarouselColumn(length) {
	const [state, setState] = useState({ active: 0, before: null });

	// 切下一張：把目前 active 標記為 before，並把 active 推進到下一張
	const advance = useCallback(() => {
		setState(({ active }) => ({
			active: (active + 1) % length,
			before: active,
		}));
	}, [length]);

	// 動畫結束後清掉 before，讓舊圖回到隱藏初始態
	useEffect(() => {
		if (state.before === null) return;
		const timer = setTimeout(
			() => setState((s) => ({ ...s, before: null })),
			DURATION + 100,
		);
		return () => clearTimeout(timer);
	}, [state.before]);

	return { ...state, advance };
}

export default function Banner() {
	const {
		active: leftActive,
		before: leftBefore,
		advance: advanceLeft,
	} = useCarouselColumn(leftImages.length);
	const {
		active: rightActive,
		before: rightBefore,
		advance: advanceRight,
	} = useCarouselColumn(rightImages.length);

	// 左欄先切換，右欄延遲 STAGGER 毫秒，形成錯落感
	useEffect(() => {
		const timer = setInterval(() => {
			advanceLeft();
			setTimeout(advanceRight, STAGGER);
		}, INTERVAL);
		return () => clearInterval(timer);
	}, [advanceLeft, advanceRight]);

	return (
		<section className="h-screen w-full lg:flex flex-row">
			<CarouselColumn
				side="left"
				images={leftImages}
				active={leftActive}
				before={leftBefore}
			/>
			<CarouselColumn
				side="right"
				images={rightImages}
				active={rightActive}
				before={rightBefore}
			/>
		</section>
	);
}

// side 決定擦入方向：left 由上往下、right 由下往上，並搭配反向視差位移
function CarouselColumn({ side, images, active, before }) {
	const hiddenClip =
		side === "left" ? "inset(0 0 100% 0)" : "inset(100% 0 0 0)";
	const offsetY =
		side === "left"
			? `-${bannerMotion.parallaxOffset}`
			: bannerMotion.parallaxOffset;

	return (
		<div className="relative h-1/2 w-full overflow-hidden lg:h-full basis-1/2">
			{images.map((src, i) => {
				const isActive = i === active;
				const isBefore = i === before;
				const revealed = isActive || isBefore;

				const itemStyle = {
					position: "absolute",
					inset: 0,
					overflow: "hidden",
					clipPath: revealed ? "inset(0 0 0 0)" : hiddenClip,
					transition: isActive ? `clip-path ${DURATION}ms ${EASE}` : "none",
					zIndex: isActive ? 2 : 1,
					pointerEvents: "none",
				};

				const imgStyle = {
					position: "absolute",
					inset: 0,
					backgroundImage: `url(${src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					transform: revealed
						? "translateY(0) scale(1)"
						: `translateY(${offsetY}) scale(${bannerMotion.initialScale})`,
					transition: isActive ? `transform ${DURATION}ms ${EASE}` : "none",
					willChange: "transform",
				};

				return (
					<div key={i} style={itemStyle}>
						<div style={imgStyle} />
					</div>
				);
			})}
		</div>
	);
}
