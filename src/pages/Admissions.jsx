import ScrollToTop from '../components/scrolltotop';
import RegForm from '../assets/images/registration-form.jpg'

function Admissions() {
    
    return (
        <>

        <ScrollToTop />
        {/*The main contents*/}
        <main>
        {/*The Admissions Banner*/}
        <section className='p-20 pt-40 md:p-28 lg:p-28 md:pt-52 lg:pt-52 bg-admissions-banner bg-blue-900 bg-blend-overlay bg-no-repeat bg-cover'>
        <h1 className='text-4xl md:text-5xl lg:text-5xl mb-4 text-white'>Admissions</h1>
        <h1 className='text-white text-sm md:text-xl lg:text-xl'> /Christ Glorious Divine Academy</h1>
        </section>

        {/*The Admissions section*/}
        <section className="p-9 md:p-28 lg:p-28 items-center justify-center">
            <h1 className='text-center text-xl md:text-2xl lg:text-3xl mb-11'>Admission to the 2024/2025 session is Currently Ongoing into: </h1>
            <div className='flex flex-col md:flex-row lg:flex-row gap-3 items-center justify-center mb-20 *:cursor-pointer'>
                <div className='bg-orange-50 border-orange-300 border-[1px] p-7 rounded-xl text-center text-2xl md:text-xl font-bold'>PRE- KG</div>
                <div className='bg-emerald-50 border-emerald-300 border-[1px] p-7 rounded-xl text-center  text-2xl md:text-xl font-bold'>KG 1 - 3</div>
                <div className='bg-sky-50 border-sky-300 border-[1px] p-7 rounded-xl text-center text-2xl md:text-xl font-bold'>BASIC 1 - 5</div>
                <div className='bg-indigo-50 border-indigo-300 border-[1px] p-7 rounded-xl text-center text-2xl md:text-xl font-bold'>SECONDARY</div>
            </div>

           {/*The Admission Requirement section*/}
           <div className='mb-14 pt-14 border-t-[1px] border-slate-300'>
            <h1 className='text-3xl mb-5'>Admission Process</h1>
            <p>Obtain the Admission Form:</p>
<p>Admission forms are available at the school office or can be downloaded below:</p>
<a href={RegForm} download className='text-blue-500 underline text-2xl'>Download Form Here</a> <br/><br/>

<p className='text-2xl'>Complete the Form:</p>
<p>Fill out the form accurately and attach all required documents.</p><br/>

<p className='text-2xl'>Submit the Form:</p>
<p>Submit the completed form to the school office along with the application fee.</p><br/>

<p className='text-2xl'>Entrance Examination:</p>
<p>Your child will be scheduled for an entrance exam based on their grade level.</p><br/>

<p className='text-2xl'>Interview:</p>
<p>Parents and students may be invited for a brief interview with the admissions team.</p><br/>

<p className='text-2xl'>Offer of Admission:</p>
<p>Successful candidates will receive an admission letter, along with details about the next steps.</p><br/>

<p className='text-2xl'>Acceptance and Payment:</p>
<p>Secure your child’s place by paying the required fees within the stipulated time.</p>
            
            </div>

            <div className='mb-14 pt-14 border-t-[1px] border-slate-300'>
            <h1 className='text-3xl mb-5'>Admission Requirements</h1>
            <p>To enroll at Christ Glorious Divine Academy, applicants must meet the following requirements:</p><br/>

            <p className='text-2xl'>    Age Criteria:</p>
            <li>        Nursery: 2 years and above.</li>
            <li>        Primary: Appropriate age for grade level.</li>
            <li>        Secondary: Successful completion of the previous level.</li><br/>

            <p className='text-2xl'>    Documents to Submit:</p>
            <li>        Completed Registration Form.</li>
            <li>        Two recent passport-sized photographs.</li>
            <li>        Copy of Birth Certificate.</li>
            <li>        Previous school’s report card or transfer certificate (for Primary and Secondary levels).</li><br/>

            <p className='text-2xl'>    Entrance Assessment:</p>
            <p>        All prospective students must undergo an entrance examination to assess their academic level and readiness.</p>
            </div>

            
            <div className='mb-14 pt-14 border-t-[1px] border-slate-300'>
            <h1 className='text-3xl mb-5'>School Fees</h1>
            <p>Our fees are structured to be affordable while ensuring we deliver high-quality education. Detailed fee schedules 
                can be obtained from the school office. We also offer flexible payment plans for parents’ convenience.</p>
            
            </div>

            
            <div>
            <h1 className="text-2xl md:text-4xl mb-5 lg:text-4xl text-center pt-14 border-t-[1px] border-slate-300">Frequently Asked Questions on Admission</h1>
            <div className="*:py-3 block *:w-full">
            <details className="cursor-pointer duration-300">
            <summary className="bg-slate-100 p-5 w-full duration-300">What age groups do you admit?</summary>
            <p className="bg-slate-100 p-5 w-full text-sm duration-300">We admit children into Nursery, Primary, and Secondary School programs. Our admission is open to children 
                aged 2 years and above for nursery and progresses through primary and secondary education.</p>
            </details>

            <details className="cursor-pointer duration-300">
            <summary className="bg-slate-100 p-5 w-full duration-300">What curriculum do you follow?</summary>
            <p className="bg-slate-100 p-5 w-full text-sm duration-300">We offer a robust blend of the Nigerian curriculum with a focus on excellence and critical thinking. Our teaching approach 
                integrates modern educational techniques to prepare students for both national and international success.</p>
            </details>

            <details className="cursor-pointer duration-300">
            <summary className="bg-slate-100 p-5 w-full duration-300">Are extracurricular activities available?</summary>
            <p className="bg-slate-100 p-5 w-full text-sm duration-300">Yes, we offer a variety of extracurricular activities</p>
            </details>
           
            </div>

            </div>
        </section>
        </main>
        </>
    );
}

export default Admissions;
