import ScrollToTop from '../components/scrolltotop';

function Contact() {
    
    return (
        <>
        
        <ScrollToTop />
        {/*The main contents*/}
        <main>
        {/*The Contact us Banner*/}
        <section className='p-20 pt-40 md:p-28 lg:p-28 md:pt-52 lg:pt-52 bg-contact-banner bg-blue-700 bg-blend-overlay bg-no-repeat bg-cover'>
        <h1 className='text-4xl md:text-5xl lg:text-5xl mb-4 text-white'>Contact us</h1>
        <h1 className='text-white text-sm md:text-xl lg:text-xl'> /Christ Glorious Divine Academy</h1>
        </section>

        {/*The Contact Section*/}
        <section className="p-9 md:p-28 lg:p-28 items-center justify-center flex">
            <div>
            <h1 className="text-2xl md:text-4xl mb-5 lg:text-4xl text-center">Get In Touch With Us</h1>
            
            {/*The Contact Cards (Address and Telephone)*/}
            <div className="grid md:grid-cols-2 gap-5 mb-7">
                <div className="bg-blue-100/45 rounded-xl p-5 border-spacing-4 border-blue-100 border-[2px]">
                    <h1 className="text-xl mb-3 md:text-xl lg:text-xl font-bold">Address</h1>
                    <p>Uhunoke Area, Obenevboweribo Community, B/C. Close
                        to UBTH Staff Quarter, Benin City, Edo State.
                    </p>
                </div>

                <div className="bg-blue-100/45 rounded-xl p-5 border-spacing-4 border-blue-100 border-[2px]">
                    <h1 className="text-xl mb-3 font-bold">Telephone</h1>
                    <p>08054949885 <br /> 08166532117 <br /> 08071271525</p>
                </div>
            </div>

            <p className="text-sm md:text-xl lg:text-xl mb-9 text-center"> You can use the form below to contact us for more details about our school and admissions</p>
        <form action="POST" className="p-5 *:my-2 rounded-md border-slate-400 border-[1px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 *:w-full *:duration-300 *:p-2 gap-3">
           <input type="text" placeholder="Your Name*" id='username' className="outline-none focus:border-black border-[1px]" /> 
           <input type="email" placeholder="Your Email*" id='email' className="outline-none focus:border-black border-[1px]" />
           <input type="text" placeholder="Phone Number*" id='telephone' className="outline-none focus:border-black border-[1px]" /> 
           <input type="text" placeholder="Subject*" id='subject' className="outline-none focus:border-black border-[1px]" />
           
           <textarea name="message" id="message" placeholder="message*" className="outline-none focus:border-black border-[1px] md:col-span-2 h-64"></textarea>
           </div>
           <button className="rounded-2xl border-black border-[2px] p-2 px-8 hover:bg-blue-800 hover:text-white duration-300">Submit</button>
           
        </form>
        </div>

        </section>
        </main>
        </>
    );
}

export default Contact;
