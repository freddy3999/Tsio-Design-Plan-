import Footer from "../index_component/Footer";
import Nav from "../index_component/Nav";
import Breadcrumbs from "../small_component/Breadcrumbs";
import Title from "../small_component/Title";
import Bg_gray from "../assets/bg_gray.jpg";
import ExhibitionCard from "../small_component/ExhibitionCard";

import Exhibition_1 from "../assets/imgs/Exhibition_1.jpg";
import useScrollReveal from "../hooks/useScrollReveal";

export default function PlanPage() {
	useScrollReveal();

	return (
		<section className="space-y-[10vh]">
			<main className="space-y-[10vh] lg:space-y-[20vh] mt-[15vh] lg:mt-[24vh]">
				<div className="w-full  mx-auto px-[40px] lg:max-w-7xl">
					<Breadcrumbs word="Project" />
				</div>

				<div className="lg:pb-[10vh] bg-white">
					<Title
						className="headline"
						titleEN="Name Origin"
						title="計劃的由來"
					/>
					<div className="headline mx-auto w-[82.2vw] mt-[11vh] lg:w-[900px]">
						<p className="headline bodyText lg:bodyText-web">
							「設醮」一詞，融合了
							<strong>設計（Design）與儀式（Ritual）</strong>的雙重意涵。
							<br />
							<br />
							「設」代表設計的行為——涵蓋觀察、詮釋、介入與提案，是一種對當代議題的回應手段與創造工具。
							「醮」源自東亞文化中的宗教儀式，為傳統社會中人與天地、社群與信仰之間的重要媒介，承載著祈福、記憶、轉化與集體行動的意義。
							<br />
							<br />
							我們選擇「設醮」作為命名，意圖將設計視為一種當代儀式的再詮釋。
							<br />
							<br />
							在快速變動與高度資訊化的社會中，「設計」不僅是視覺或產品的產出，更可視為一種具有召喚力的場域建構——如同「醮」的形式，設計同樣可以喚起群體關注、集結能量、傳遞願景。本計畫透過空間設計、展演行動與群體參與，嘗試在當代脈絡下召開一場「設醮」，
							不為神明設壇，而為人群設場；
							不為超自然祈求，而為當代生活、地方連結與文化共感開啟對話。
							<br />
							<br />
							「設醮」，是一場對現實的溫柔干預，一種將創作與共感轉化為行動的當代表述方式。
						</p>
					</div>
				</div>

				<div
					className="w-full py-[140px] space-y-[100px] lg:py-[280px] lg:space-y-[200px]"
					style={{ backgroundImage: `url(${Bg_gray})` }}
				>
					<ExhibitionCard
						link="/Plan/ExhibitionList"
						imageOnRight={true}
						title="主展覽"
						description={
							<>
								呈現青年設計師/創作者的作品。
								<br />
								涵蓋平面、空間、影像、裝置等形式。
							</>
						}
						imageSrc={Exhibition_1}
					/>
					<ExhibitionCard
						link="/Plan/Workshop"
						title="主展覽"
						description={
							<>
								呈現青年設計師/創作者的作品。
								<br />
								涵蓋平面、空間、影像、裝置等形式。
							</>
						}
						imageSrc={Exhibition_1}
					/>
					<ExhibitionCard
						link="/Plan/Market"
						imageOnRight={true}
						title="主展覽"
						description={
							<>
								呈現青年設計師/創作者的作品。
								<br />
								涵蓋平面、空間、影像、裝置等形式。
							</>
						}
						imageSrc={Exhibition_1}
					/>
					<ExhibitionCard
						link="/Plan/Lecture"
						title="主展覽"
						description={
							<>
								呈現青年設計師/創作者的作品。
								<br />
								涵蓋平面、空間、影像、裝置等形式。
							</>
						}
						imageSrc={Exhibition_1}
					/>
					<ExhibitionCard
						link="/Plan/Other"
						imageOnRight={true}
						title="主展覽"
						description={
							<>
								呈現青年設計師/創作者的作品。
								<br />
								涵蓋平面、空間、影像、裝置等形式。
							</>
						}
						imageSrc={Exhibition_1}
					/>
					<div className="max-w-[82.2vw] mx-auto">
						<hr className="border-t border-primary my-8 mb-[70px]" />
						<p className="bodyText lg:bodyText-web text-center">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
							labore dolorum voluptatibus hic odit non minus quaerat sunt
							exercitationem corrupti quam similique fuga asperiores nesciunt
							dignissimos illo, suscipit omnis quas?
						</p>
					</div>
				</div>
			</main>
		</section>
	);
}
