import ArrowS from "../assets/Vector_small.png";
import ArrowL from "../assets/Vector_big.png";
import plan_1 from "../assets/plan_1.jpg";
import plan_2 from "../assets/plan_2.jpg";
import Title from "../small_component/Title";

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

export default function Plan() {
    return (
        <section>
            <Title titleEN="plan" title="計畫" icon={icon} link="/Plan"/>
            <div className="space-y-[60px] lg:flex lg:flex-row lg:items-end lg:space-y-0 mt-[60px] lg:mt-[135px]">
                <div className="w-full lg:w-[36.5%] space-y-[60px] mt-[60px] lg:mt-0 lg:h-[100vh] lg:flex lg:flex-col lg:justify-between">
                    <div className="w-[40%] lg:w-full aspect-[28/19]">
                        <img className="headline w-full h-full object-cover" src={plan_1} alt="" />
                    </div>
                    <div className="headline bodyText w-[300px] lg:w-[350px] mx-auto lg:bodyText-large-web">
                        <p>
                            集結來自不同領域的設計者、創作者與講者，
                            從設計出發，延伸出生活、
                            文化與社會的多元對話。
                            活動形式包含靜態展覽、主題講座、職人快閃市集、
                            手作工作坊，以及戶外電影、聲音表演等微型活動。
                            <br />
                            <br />
                            在這裡，在那裏。
                        </p>
                    </div>
                </div>
                <div className="w-[53.4%] aspect-square ml-auto lg:w-[32%]">
                    <img className="headline w-full h-full object-cover" src={plan_2} alt="" />
                </div>
            </div>
        </section>
    );
}