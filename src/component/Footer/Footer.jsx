import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo2 from '../../assets/logo/logo-2.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="bg-black py-20">
                <div className="container mx-auto">
                    <div className="flex">
                        <div className="w-1/4">
                            <div>
                                <Link to={'/'}><img src={logo2} alt="" /></Link>
                                <p className='text-base text-gray-200 styles-font mt-4'>need any help</p>
                                <h3 className='text-3xl font-bold text-white mb-7'>Call Us: <span className='text-yellow-500'>01751751180</span></h3>
                                <p className='text-base text-gray-200'>love street, Moucent, United State</p>
                                <p className='text-base text-gray-200'>example@gmail.com</p>
                                <div className="flex mt-5 gap-4">
                                    <Link to={"#"}><FaFacebookF className='text-yellow-500 text-2xl hover:text-red-500 cursor-pointer'></FaFacebookF></Link>
                                    <Link to={"#"}><FaTwitter className='text-yellow-500 text-2xl hover:text-red-500 cursor-pointer'></FaTwitter></Link>
                                    <Link to={"#"}><FaLinkedin className='text-yellow-500 text-2xl hover:text-red-500 cursor-pointer'></FaLinkedin></Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/4 border-r-2 border-l-2 border-gray-700 px-16">
                            <div className="flex gap-5 justify-between">
                                <div className='w-2/5'>
                                    <p className='text-xl text-gray-300 styles-font mt-4'>Company</p>
                                    <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>About Us</li>
                                    <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>Contact Us</li>
                                    <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>Travel Guides</li>
                                    <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>Data Policy</li>
                                </div>
                                <div className='w-3/5'>
                                    <p className='text-xl text-gray-300 styles-font mt-4'>Top Destination</p>
                                    <div className="flex justify-between">
                                        <div>
                                            <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>Las veges</li>
                                            <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>New york city </li>
                                            <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>sun fasino</li>
                                            <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>howliy</li>
                                        </div>
                                        <div>
                                            <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>tokoyo</li>
                                            <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>sydney</li>
                                            <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>Maleblume</li>
                                            <li className='list-none text-gray-400 mt-3 hover:text-gray-200'>Dubai</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 pl-16" >
                            <p className='text-xl text-gray-300 styles-font mt-4 mb-4'>Company</p>
                            <form action="">
                                <input className='px-3 py-2 rounded-md' type="email" placeholder='Enter email..'/>
                                <button type='submit' className='rounded-md mt-4 py-1 px-7 border border-yellow-500 bg-yellow-500 text-white hover:border-red-500 duration-500 hover:bg-red-500'>Submit</button>
                            </form>
                            <p className='text-sm text-gray-300 mt-6'>&copy;2023 All right reserved | <span className='text-red-500'>Pitam Chandra</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;