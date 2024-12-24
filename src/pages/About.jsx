import logo from '../assets/images/logo.png'
import ScrollToTop from '../components/scrolltotop';

function About() {
    
    return (
        <>
        <ScrollToTop />
        {/*The main contents*/}
        <main>
        {/*The About the school Banner*/}
        <section className='p-20 pt-40 md:p-28 lg:p-28 md:pt-52 lg:pt-52 bg-about-banner bg-blue-900 bg-blend-overlay bg-no-repeat bg-cover'>
        <h1 className='text-4xl md:text-5xl lg:text-5xl mb-4 text-white'>About the School</h1>
        <h1 className='text-white text-sm md:text-xl lg:text-xl'> /Christ Glorious Divine Academy</h1>
        </section>

         {/*The About content section*/}
         <section className="p-9 md:p-28 lg:p-28 items-center justify-center">
            <img src={logo} alt="" className='h-36 w-auto opacity-20 mb-4 m-auto' loading='lazy' />
            <h1 className='font-bold text-xl text-center  md:text-3xl lg:text-3xl mb-5'>- Christ Glorious Divine Academy -</h1>
            <p className='md:text-[18px] lg:text-[18px]'> Christ Glorious Divine Academy was established in 2024 with the goal of providing a high-quality 
                education that emphasizes both academic excellence and character development. Situated in the heart of Benin City, the school was founded to create an environment where students can learn, grow, and achieve their fullest potential. <br /><br />
            Our institution is built on the principles of fostering discipline, intellectual curiosity, and moral integrity. With modern facilities and a curriculum designed to meet global standards, Christ Glorious Divine Academy strives to prepare students for success in academics and beyond.
            As a new institution, we are committed to creating a legacy of excellence, offering a solid foundation for students to thrive and contribute meaningfully to society.</p>
         </section>
            
        <section className='grid grid-cols-2'>
         <div className="p-4 pt-20 pb-20 md:p-28 lg:p-28 bg-blue-950 items-center justify-center">
            <h1 className='text-3xl text-white  md:text-3xl lg:text-3xl mb-3'>Our Vision</h1>
            <p className='text-white text-sm md:text-[18px] lg:text-[18px]'> Empowering every students or pupils to reach their full potential and to become lifelong learners...</p>
         </div>

         <div className="p-4 pt-20 pb-20 md:p-28 lg:p-28 bg-blue-900 items-center justify-center">
            <h1 className='text-3xl text-white  md:text-3xl lg:text-3xl mb-3'>Our Mission</h1>
            <p className='text-white text-sm md:text-[18px] lg:text-[18px]'> Our Mission is preparing every students or pupils to reach the highest pinnacle of success.</p>
         </div>
         </section>

         <section className="p-9 md:p-28 lg:p-28 items-center m-10 rounded-xl justify-center bg-slate-100">
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-14'>
                <div>
                    <h1 className='font-bold text-5xl'>01</h1>
                <h1 className='font-bold text-2xl mb-5'>Experienced Teachers</h1>
                <p>At Christ Glorious Divine Academy, we pride ourselves on having a 
                    team of highly skilled and passionate educators. 
                Our teachers are not only well-qualified but also deeply committed to 
                nurturing each student's potential.</p>
            </div>

            <div>
            <h1 className='font-bold text-5xl'>02</h1>
                <h1 className='font-bold text-2xl mb-5'>Affordable Education</h1>
                <p>At Christ Glorious Divine Academy, we believe that quality education should not be a privilege but a right accessible to all. 
                    That’s why we are committed to providing exceptional learning opportunities at an affordable cost. </p>
            </div>

            <div>
            <h1 className='font-bold text-5xl'>03</h1>
                <h1 className='font-bold text-2xl mb-5'>Comprehensive Curriculum</h1>
                <p>Our curriculum is thoughtfully designed to balance academic excellence with creativity and practical skills. </p>
            </div>
            </div>
         </section>

        </main>
        </>
    );
}

export default About;
