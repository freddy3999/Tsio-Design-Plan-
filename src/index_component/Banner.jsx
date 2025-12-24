import image1 from '../assets/banner_one.jpg'
import image2 from '../assets/banner_two.png'

export default function Banner() {

    return (
    <section className="h-screen w-full lg:flex flex-row">
        <div className="h-1/2 w-full bg-no-repeat bg-center bg-cover p-[25px] py-[15px] lg:h-full basis-1/2 lg:p-0" style={{ backgroundImage: `url(${image1})` }}>
        </div>
        <div className="h-1/2 w-full bg-no-repeat bg-center bg-cover lg:h-full basis-1/2" style={{ backgroundImage: `url(${image2})` }}>
        </div>
    </section>
    )
}