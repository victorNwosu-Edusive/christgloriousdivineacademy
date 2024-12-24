import ScrollToTop from '../components/scrolltotop';

function Academics() {
    
    return (
        <>

        <ScrollToTop />
        {/*The main contents*/}
        <main>
        {/*The Academics Banner*/}
        <section className='p-20 pt-40 md:p-28 lg:p-28 md:pt-52 lg:pt-52 bg-academics-banner bg-blue-900 bg-blend-overlay bg-no-repeat bg-cover'>
        <h1 className='text-4xl md:text-5xl lg:text-5xl mb-4 text-white'>Academics</h1>
        <h1 className='text-white text-sm md:text-xl lg:text-xl'> /Christ Glorious Divine Academy</h1>
        </section>

        {/*The Academics content section*/}
        <section className='p-9 md:p-20 lg:p-20 justify-center items-center'>
           <div className='mb-10'>
            <h1 className='text-xl mb-5 italic'>~Excellence in Education</h1>
            <p>At Christ Glorious Divine Academy, our academic programs are carefully designed to nurture 
                the intellectual, creative, and moral growth of our students. With a blend of traditional values 
                and innovative teaching methodologies, we aim to prepare our students for success in an ever-changing world.</p>
            </div>

            <div className='mb-14 pt-14 border-t-[1px] border-slate-300'>
            <h1 className='text-3xl mb-5'>Curriculum Overview</h1>
            <p>Our curriculum is structured to meet international 
                standards while incorporating the unique needs of our community. 
                From early childhood education to senior secondary levels, we emphasize critical thinking, 
                problem-solving, and lifelong learning.</p><br/><br/>
            <p className='text-xl'>Key subjects include:</p><br/>
            <li>Mathematics</li>
            <li>English Language</li>
            <li>Science (Physics, Chemistry, Biology)</li>
            <li>Humanities (History, Geography, Civic Education)</li>
            <li>Arts (Fine Art, Music, Drama)</li>
            <li>Information and Communication Technology (ICT)</li>
            <li>Physical and Health Education."</li>
            
            </div>

        </section>
        </main>
        </>
    );
}

export default Academics;
