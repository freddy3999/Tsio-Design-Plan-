// import Footer from "../index_component/Footer";
// import Nav from "../index_component/Nav";
// import Breadcrumbs from "../small_component/Breadcrumbs";
// import { Link } from "react-router";

// const newsArticles = [
//     {
//     id: 'article-2',
//     date: '2025/07/23',
//     title: '他們不只在展，還在生活──設醮讓日常成為參與式舞台！',
//     },
//     {
//     id: 'article-1',
//     date: '2025/07/20',
//     title: '青年設計師系列訪談：從紙本到數位，創意的無限可能',
//     },
// ];

// export default function NewsPage() {
//     return (
//         <section className="space-y-[10vh] lg:space-y-[20vh]">

//             <main className="w-full mx-auto px-[40px] lg:max-w-7xl space-y-[10vh] lg:space-y-[20vh] mt-[15vh] lg:mt-[24vh]">
//                 <div className=" lg:space-y-[2%]">
//                     <div>
//                         <Breadcrumbs word="News" />
//                     </div>
//                 </div>

//                 <div className="w-full mx-auto space-y-[30px] lg:space-y-[60px]">
//                     {newsArticles.map(article => (
//                         <Article
//                         key={article.id}
//                         id={article.id}
//                         date={article.date}
//                         title={article.title}
//                         />
//                     ))}
//                 </div>
//             </main>

//         </section>
//     );
// }

// function Article ({id, date, title}) {
//     return (
//         <Link to={`/News/${id}`} className="group w-full flex flex-row justify-between items-center px-[7px] pb-[20px] border-b-1 border-primary space-x-[20px] lg:space-x-0">
//             <div className="flex flex-col  lg:flex-row space-y-[10px] lg:space-x-[70px]">
//                 <p className="">{date}</p>
//                 <p className="">{title}</p>
//             </div>

//             <svg
//                         className="w-5 h-5 text-primary transform transition-transform duration-300 ease-in-out group-hover:translate-x-3"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 5l7 7-7 7"
//                         />
//             </svg>
//         </Link>
//     )
// }

import articlesData from "../data/article.json";
import CardLayout from "../small_component/CardLayout";

export default function ArticlesPage() {
	return (
		<section className="w-full mx-auto px-[40px] xl:px-0 lg:max-w-7xl mt-[15vh] lg:mt-[24vh]">
			<h2 className="text-center heading-bold lg:heading-bold-web">文章總覽</h2>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[2vw] gap-y-[60px] mt-[60px]">
				{articlesData.map((article, idx) => (
					<CardLayout key={idx} item={article} />
				))}
			</div>
		</section>
	);
}
