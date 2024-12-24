import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom';

function Footer() {
    
    return (
        <>
        <footer className="bg-[#091331] p-12 md:pb-12 lg:pb-12 md:p-28 lg:p-28">
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-12'>
            <div>
                <img src={logo} alt="" className="h-16 w-auto" />
                <p className='text-white mb-5 font-bold text-xl'>Christ Glorious Divine Academy.</p>
                <p className='text-white'>Providing quality education in Benin City, building leaders for tomorrow.</p>
            </div>

            <div>
                <h1 className='text-white text-2xl'>Quick Links</h1>
                <NavLink to="/about" className="p-2 block text-white rounded-sm hover:bg-blue-800 hover:text-white duration-300 " title="About Us">About Us &#8599;</NavLink>
                <NavLink to="/academics" className="p-2 block text-white rounded-sm hover:bg-blue-800 hover:text-white duration-300 " title='Academics'>Academics &#8599;</NavLink>
                <NavLink to="/admissions" className="p-2 block text-white rounded-sm  hover:bg-blue-800 hover:text-white duration-300 " title='Admissions'>Admissions &#8599;</NavLink>
                <NavLink to="/gallery" className="p-2 block text-white rounded-sm  hover:bg-blue-800 hover:text-white duration-300 " title='Gallery'>Gallery &#8599;</NavLink>
                <NavLink to="/contact-us" className="p-2 block text-white rounded-sm  hover:bg-blue-800 hover:text-white duration-300 " title='Contact Us'>Contact Us &#8599;</NavLink>
            </div>

            <div>
                <h1 className='text-white text-2xl mb-2'>Contact Us</h1>
                <p className='text-yellow-600 text-[19px]'>Address:</p>
                <p className='text-white text-sm mb-4'>Uhunoke Area, Obenevboweribo Community, B/C. Close
                    to UBTH Staff Quarter, Benin City, Edo State.
                </p>

                <p className='text-yellow-600 text-[19px]'>Phone Number:</p>
                <p className='text-white text-sm'>08054949885 <br /> 08166532117 <br /> 08071271525</p>
            </div>

            </div>

            <div className='text-center mt-28 text-white border-t-[1px] border-white/15 p-4'>
            <p className='text-[13px] md:text-md lg:text-md'> © {new Date().getFullYear()} Christ Glorious Divine Academy</p>
            </div>

        </footer>
        </>
    );
}

export default Footer;
