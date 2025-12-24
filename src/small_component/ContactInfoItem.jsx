export default function ContactInfoItem({ Icon, srText, infoText }) {
    return (
        <p className="footer flex flex-row gap-[20px] text-secondary items-center lg:bodyText-web lg:text-secondary">
            {/* 渲染傳入的 IconComponent */}
            <Icon />
            {/* sr-only 的文字是為了螢幕閱讀器，描述這個圖示代表什麼 */}
            {infoText}
            <span className='sr-only'>{srText}</span>
            {/* 顯示實際的資訊文字 */}
        </p>
    );
}