import Breadcrumbs from "../../small_component/Breadcrumbs";
import ExhibitionLayout from "../../assets/imgs/ExhibitionLayout.jpg";
import ExhibitionBanner from "../../assets/imgs/ExhibitionBanner.webp";
import MoreLink from "../../small_component/MoreLink";

export default function WorkshopPage() {
	return (
		<section className="space-y-[10vh]">
			<main className="space-y-[10vh] lg:space-y-[20vh] mt-[15vh] lg:mt-[24vh]">
				<div className="w-full mx-auto px-[40px] lg:max-w-7xl">
					<Breadcrumbs word="Project" word2="Workshop" />
				</div>

				<div className="w-full aspect-[1917/796]">
					<img
						className="w-full h-full object-cover"
						src={ExhibitionBanner}
						alt=""
					/>
				</div>

				<div className="">
					<div className="space-y-[35px] w-full mx-auto px-[40px] mt-[60px] lg:mt-[100px] lg:max-w-7xl md:flex md:flex-row md:items-center md:justify-center md:gap-[100px]">
						<div className="w-full md:w-[450px] lg:w-[600px] aspect-square">
							<img
								className="w-full h-full object-cover"
								src={ExhibitionLayout}
								alt=""
							/>
						</div>

						<div className="md:w-[400px] space-y-[20px] lg:space-y-[35px] lg:order-[-1]">
							<h2 className="subtitle-bold lg:subtitle-bold-web">
								國際工作坊 International Workshops
							</h2>
							<p className="bodyText lg:bodyText-bold-web">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloremque odit dicta eum tempore doloribus repudiandae quasi
								debitis inventore natus, repellat commodi minus cum saepe optio
								consequatur rem nobis ut quam.
							</p>
						</div>
					</div>

					<div className="space-y-[35px] w-full mx-auto px-[40px] mt-[60px] lg:mt-[100px] lg:max-w-7xl md:flex md:flex-row md:items-center md:justify-center md:gap-[100px]">
						<div className="w-full md:w-[450px] lg:w-[600px] aspect-square">
							<img
								className="w-full h-full object-cover"
								src={ExhibitionLayout}
								alt=""
							/>
						</div>

						<div className="md:w-[400px] space-y-[20px] lg:space-y-[35px]">
							<h2 className="subtitle-bold lg:subtitle-bold-web">
								國際工作坊 International Workshops
							</h2>
							<p className="bodyText lg:bodyText-bold-web">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloremque odit dicta eum tempore doloribus repudiandae quasi
								debitis inventore natus, repellat commodi minus cum saepe optio
								consequatur rem nobis ut quam.
							</p>
						</div>
					</div>
				</div>

				{/* 改用全站共用的 MoreLink（細框 outline + 箭頭），與首頁「了解更多」一致 */}
				<div className="max-w-[82.2vw] mx-auto">
					<MoreLink to="/Plan/Workshop/List" label="了解更多" />
				</div>
			</main>
		</section>
	);
}
