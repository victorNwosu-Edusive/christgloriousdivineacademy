import ScrollToTop from '../components/scrolltotop';
import imageOne from '../assets/images/gallery-image-one.jpg'
import imageTwo from '../assets/images/gallery-image-two.jpg'
import imageThree from '../assets/images/gallery-image-three.jpg'

function Gallery() {
    
    return (
        <>

        <ScrollToTop />
        {/*The main contents*/}
        <main> 
        {/*The Gallery Banner*/}
        <section className='p-20 pt-40 md:p-28 lg:p-28 md:pt-52 lg:pt-52 bg-gallery-banner bg-blue-900 bg-blend-overlay bg-no-repeat bg-cover'>
        <h1 className='text-4xl md:text-5xl lg:text-5xl mb-4 text-white'>Gallery</h1>
        <h1 className='text-white text-sm md:text-xl lg:text-xl'> /Christ Glorious Divine Academy</h1>
        </section>

        {/*The Gallery section*/}
        <section className="p-9 md:p-28 lg:p-28 items-center justify-center">
            <div className='flex flex-col md:flex-row lg:flex-row gap-4 items-center justify-center'>
            <img src={imageOne} alt="" className='w-72 h-72 rounded-xl object-cover'/>
            <img src={imageTwo} alt="" className='w-72 h-72 rounded-xl object-cover' />
            <img src={imageThree} alt="" className='w-72 h-72 rounded-xl object-cover'/>
            </div>
        </section>
        </main>
        </>
    );
}

export default Gallery;
