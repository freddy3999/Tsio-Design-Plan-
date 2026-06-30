import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import About from './About'
import Banner from './Banner'
import ImageGallery from './ImageGallery'
import Article from './Article'
import Plan from './Plan'
import Quotes from './Quotes'
import WorkShop from './WorkShop'

export default function Main() {
    // 全站 fade-in 統一在此初始化：凡帶有 .headline 的元素都會由下往上淡入
    useEffect(() => {
        ScrollReveal().reveal('.headline', {
            duration: 1000,
            distance: '20px',
            origin: 'bottom',
            easing: 'ease-in-out',
        })
    }, [])

    return (
    <main className='space-y-[80px] lg:space-y-[300px]'>
        <Banner />
        <About />
        <ImageGallery />
        <WorkShop />
        <Plan />
        <Article />
        <Quotes />
    </main>
    )
}
