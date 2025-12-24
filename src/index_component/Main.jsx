import About from './About'
import Banner from './Banner'
import ImageGallery from './ImageGallery'
import Article from './Article'
import Plan from './Plan'
import Quotes from './Quotes'
import WorkShop from './WorkShop'

export default function Main() {
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
