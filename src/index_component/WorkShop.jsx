import ArrowS from "../assets/Vector_small.png";
import ArrowL from "../assets/Vector_big.png";
import Title from "../small_component/Title";
import workShop_1 from "../assets/workShop_1.jpg";
import workShop_2 from "../assets/workShop_2.jpg";
import workShop_3 from "../assets/workShop_3.jpg";

const icon = (
	<>
		<img
			src={ArrowS}
			alt=""
			className="block lg:hidden transform transition-transform duration-[var(--motion-base)] ease-[var(--motion-ease-spring)] group-hover:translate-x-5"
		/>
		<img
			src={ArrowL}
			alt=""
			className="hidden lg:block transform transition-transform duration-[var(--motion-base)] ease-[var(--motion-ease-spring)] group-hover:translate-x-3"
		/>
	</>
);

export default function WorkShop() {
	return (
		<section className="flex flex-col items-center space-y-[60px] lg:space-y-[135px]">
			<Title
				titleEN="workshop"
				title="工作坊"
				link={"/Plan/Workshop"}
				icon={icon}
			/>
			<div className="w-full flex space-x-[18%] mt-[60px] lg:mt-[135px]">
				<div className="w-[43%] h-[200px] flex items-end sel md:h-[400px] lg:h-[800px]">
					<div className="w-full">
						<img
							className="h-full w-full object-cover headline"
							src={workShop_1}
							alt=""
						/>
					</div>
				</div>
				<div className="w-[39%]">
					<div className="w-full aspect-square">
						<img
							className="h-full w-full object-cover headline"
							src={workShop_2}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="w-[300px] bodyText lg:bodyText-large-web lg:w-[800px] headline">
				<p>
					來自不同文化的職人，將他們日常中珍貴的技藝與生命哲學帶來現場，與你一同分享。無論是木作、織品、陶藝、書寫，或是任何充滿溫度的創作方式，都是一次與「世界」產生真實連結的機會。
					<br />
					<br />
					我們希望你不只帶回作品，更帶回一種看待生活的方式。
				</p>
			</div>
			<div className="my-auto bodyText-bold [writing-mode:vertical-lr] lg:bodyText-large-bold-web headline">
				<p className="tracking-[0.4em]">﹁一起動手，設下自己的微型儀式。﹂</p>
			</div>
			<div className="relative w-[83%] aspect-[11/3] mt-[60px] lg:mt-[135px]">
				<img
					className="absolute w-full h-full object-cover object-bottom headline"
					src={workShop_3}
					alt=""
				/>
			</div>
		</section>
	);
}
