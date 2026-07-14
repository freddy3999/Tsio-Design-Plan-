// ⬇⬇⬇ 找到正式圖片後，只要替換這三行 import 即可 ⬇⬇⬇
import img1 from "../assets/plan_1.jpg"; // 左上・直幅
import img2 from "../assets/plan_2.jpg"; // 右側・橫幅
import img3 from "../assets/workShop_1.jpg"; // 左下・橫幅
// ⬆⬆⬆ 找到正式圖片後，只要替換這三行 import 即可 ⬆⬆⬆

/*
  版位設定：
  - className 內「lg:」開頭 = 桌機版的散排位置（絕對定位，百分比 → 等比例縮放）
  - 其餘 = 手機版（改為由上往下堆疊、左右交錯）
  - aspect-[..] 控制每張圖的長寬比；想換裁切比例改這裡
*/
const galleryImages = [
	{
		src: img1,
		alt: "",
		className:
			"w-[80%] mr-auto aspect-[3/4] lg:absolute lg:top-0 lg:left-0 lg:w-[38%]",
	},
	{
		src: img2,
		alt: "",
		className:
			"w-[70%] ml-auto aspect-[6/5] lg:absolute lg:top-[27%] lg:right-0 lg:w-[33%]",
	},
	{
		src: img3,
		alt: "",
		className:
			"w-[85%] mx-auto aspect-[8/5] lg:absolute lg:top-[66%] lg:left-[7.5%] lg:w-[48%]",
	},
];

export default function ImageGallery() {
	return (
		<section className="relative w-full flex flex-col gap-16 lg:block lg:gap-0 lg:aspect-[1588/1936]">
			{galleryImages.map((img, i) => (
				<div
					key={i}
					className={`headline overflow-hidden bg-gray-100 ${img.className}`}
				>
					<img
						src={img.src}
						alt={img.alt}
						className="w-full h-full object-cover"
					/>
				</div>
			))}
		</section>
	);
}
