import WorkList from "../assets/imgs/WorkList.jpg";
import article_1 from "../assets/imgs/article_1.jpg";
import ExhibitionBanner from "../assets/imgs/ExhibitionBanner.webp";

export const workshopImages = {
	"UX-W001-cover": WorkList,
	"REACT-W002-cover": WorkList,
	"FONT-W003-cover": WorkList,
	"PORT-W004-cover": WorkList,
};

export const articleImages = {
	"ALUM-A001-cover": article_1,
	"ALUM-A002-cover": article_1,
	"ALUM-A003-cover": article_1,
	"ALUM-A004-cover": article_1,
	"ALUM-A005-cover": article_1,
	"ALUM-A006-cover": article_1,
	"ALUM-A007-cover": article_1,
	"ALUM-A008-cover": article_1,
	"ALUM-A009-cover": article_1,
	"ALUM-A010-cover": article_1,
};

// key 要與 exhibitions.json 的 image 欄位一致，格式沿用 {id}-cover。
// CardLayout 只在 key 含 "-E00" 時才來查這張表，所以 key 必須帶展覽 id。
export const exhibitionImages = {
	"2024-E001-cover": ExhibitionBanner,
};
