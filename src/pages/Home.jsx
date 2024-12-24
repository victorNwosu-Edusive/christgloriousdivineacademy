import imageOne from '../assets/images/admissions-image.jpg'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import React from 'react'
import ScrollToTop from '../components/scrolltotop';

function Home() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about');
  };

  const handleAdmissionClick = () => {
    navigate('/admissions');
  };
 
  return (
    <>

    <ScrollToTop />
    {/*The main contents*/}
    <main>
      {/*The Hero Section*/}
      <section className='p-16 pt-40 md:p-28 lg:p-28 md:pt-52 lg:pt-52 md:h-lvh lg:h-lvh bg-hero-pattern bg-blue-700 bg-blend-overlay bg-no-repeat bg-cover'>
      <h1 className='text-5xl md:text-6xl lg:text-6xl text-white'><span className='text-2xl md:text-3xl lg:text-3xl'>Welcome to </span><br /> Christ Glorious Divine Academy</h1>
      <p className='text-sm md:text-xl lg:text-xl italic text-orange-300 font-bold'>Motto: Knowledge is light...</p>
      <p className='text-xl md:text-2xl lg:text-2xl text-white mt-3 md:mt-0 lg:mt-0'>Providing quality education in Benin City, building leaders for tomorrow.</p>
      <button onClick={handleButtonClick} className='px-7 p-3  bg-yellow-600 text-white font-bold text-sm md:text-[18px] lg:text-[18px] mt-5 hover:bg-blue-900 duration-300 rounded-md '>About the School &#8599;</button>
      </section>

      {/*The Introductory Section*/}
      <section className='p-11 py-20 md:p-20 lg:p-20'>
        <div className='grid md:grid-cols-3 lg:grid-cols-3'>
        <h1 className='text-2xl md:text-4xl lg:text-4xl mb-4 text-blue-900'>Introductory <br /> Message</h1>
        <p className='text-slate-500 col-span-2'><span className='text-blue-900 font-bold'>Welcome to Christ Glorious Divine Academy. </span>

 At Christ Glorious Divine Academy, we are committed to providing a 
nurturing and stimulating environment where students excel academically, 
morally, and socially. 
Located in the heart of Benin City, our school blends modern teaching 
methods with strong values to prepare students for a bright future.

We believe every child is unique and deserves the best education to 
unlock their potential. With experienced teachers, state-of-the-art facilities, 
and a focus on holistic development, we are proud to be a place where excellence thrives.

Join us today and give your child the gift of quality education! <br /><br />
<span className='mt-5 text-xl font-bold'>~Proprietor</span></p>



</div>

      </section>

      {/*The Highlights Section*/}
      <section className='p-11 py-20 md:p-20 lg:p-20 bg-orange-100'>
        <h1 className='text-2xl md:text-3xl lg:text-3xl mb-10 text-yellow-900 text-center'>- Highlights -</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 rounded-xl bg-white shadow-xl shadow-yellow-500/20'>
          <img src={imageOne} className='h-auto ' />

          <div className='p-7 md:p-11 lg:p-11'>
            <h1 className='text-2xl md:text-4xl lg:text-4xl mb-5 text-yellow-600 font-bold'>
              Admission are now Open!! 
            </h1>

            <p>
            Christ Glorious Divine Academy is now accepting 
            applications for the new academic session.
            Give your child the opportunity to learn in an environment 
            that fosters academic excellence, character development, and personal growth.
            </p>

            <button onClick={handleAdmissionClick} className='px-7 p-3 bg-yellow-600 text-white font-bold text-sm mt-5 hover:bg-blue-900 duration-300 rounded-md '>Admissions &#8599;</button>

          </div>

        </div>

      </section>
    </main>
    </>
  )
}

export default Home
