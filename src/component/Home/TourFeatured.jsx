import SectionHeading from '../common-title/SectionHeading';
import './TourFeatured.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './DestinationSection.css'
import { Pagination } from 'swiper/modules';
import destination1 from '../../assets/home/destination.png'
import destination2 from '../../assets/home/destination2.png'
import destination3 from '../../assets/home/destination3.png'
import destination4 from '../../assets/home/destination4.png'
import { FaClock, FaRegHeart, FaStar } from 'react-icons/fa';

const TourFeatured = () => {
    return (
        <>
            <div className="tour py-20">
                <div className='text-center white-title'>
                    <SectionHeading  sub="tours" title="Featured Tours"></SectionHeading>
                </div>
                <div className='container mx-auto'>
                    <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-10"
                >
                    <SwiperSlide>
                        <div className='relative bg-white'>
                            <img className="w-full" src={destination1} alt="destination1" />
                            <div className='absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <FaRegHeart></FaRegHeart>
                            </div>
                            <div className='p-6'>
                                <p className="text-base text-gray-500 capitalize">budapest Hungary</p>
                                <h3 className="text-xl font-bold text-gray-800 capitalize">wonder of the west coast & Kimberly</h3>
                                <div className="flex w-full items-center justify-between py-4 border-b-2 border-gray-300">
                                    <div className="flex items-center justify-between gap-1 bg-orange-400 rounded px-2">
                                        <FaStar></FaStar>
                                        <span>4.8</span>
                                    </div>
                                    <div className='flex items-center justify-between gap-1'>
                                    <FaClock className=''></FaClock>
                                    <p className="text-base text-gray-500">7 Days</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4 ">
                                        <p className="text-base text-gray-500">Starting Form</p>
                                        <p className="text-xl text-black styles-font">$250</p>
                                    </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative bg-white'>
                            <img className="w-full" src={destination2} alt="destination1" />
                            <div className='absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <FaRegHeart></FaRegHeart>
                            </div>
                            <div className='p-6'>
                                <p className="text-base text-gray-500 capitalize">budapest Hungary</p>
                                <h3 className="text-xl font-bold text-gray-800 capitalize">wonder of the west coast & Kimberly</h3>
                                <div className="flex w-full items-center justify-between py-4 border-b-2 border-gray-300">
                                    <div className="flex items-center justify-between gap-1 bg-orange-400 rounded px-2">
                                        <FaStar></FaStar>
                                        <span>4.8</span>
                                    </div>
                                    <div className='flex items-center justify-between gap-1'>
                                    <FaClock className=''></FaClock>
                                    <p className="text-base text-gray-500">7 Days</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4 ">
                                        <p className="text-base text-gray-500">Starting Form</p>
                                        <p className="text-xl text-black styles-font">$250</p>
                                    </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative bg-white'>
                            <img className="w-full" src={destination3} alt="destination1" />
                            <div className='absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <FaRegHeart></FaRegHeart>
                            </div>
                            <div className='p-6'>
                                <p className="text-base text-gray-500 capitalize">budapest Hungary</p>
                                <h3 className="text-xl font-bold text-gray-800 capitalize">wonder of the west coast & Kimberly</h3>
                                <div className="flex w-full items-center justify-between py-4 border-b-2 border-gray-300">
                                    <div className="flex items-center justify-between gap-1 bg-orange-400 rounded px-2">
                                        <FaStar></FaStar>
                                        <span>4.8</span>
                                    </div>
                                    <div className='flex items-center justify-between gap-1'>
                                    <FaClock className=''></FaClock>
                                    <p className="text-base text-gray-500">7 Days</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4 ">
                                        <p className="text-base text-gray-500">Starting Form</p>
                                        <p className="text-xl text-black styles-font">$250</p>
                                    </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative bg-white'>
                            <img className="w-full" src={destination4} alt="destination1" />
                            <div className='absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <FaRegHeart></FaRegHeart>
                            </div>
                            <div className='p-6'>
                                <p className="text-base text-gray-500 capitalize">budapest Hungary</p>
                                <h3 className="text-xl font-bold text-gray-800 capitalize">wonder of the west coast & Kimberly</h3>
                                <div className="flex w-full items-center justify-between py-4 border-b-2 border-gray-300">
                                    <div className="flex items-center justify-between gap-1 bg-orange-400 rounded px-2">
                                        <FaStar></FaStar>
                                        <span>4.8</span>
                                    </div>
                                    <div className='flex items-center justify-between gap-1'>
                                    <FaClock className=''></FaClock>
                                    <p className="text-base text-gray-500">7 Days</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4 ">
                                        <p className="text-base text-gray-500">Starting Form</p>
                                        <p className="text-xl text-black styles-font">$250</p>
                                    </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative bg-white'>
                            <img className="w-full" src={destination1} alt="destination1" />
                            <div className='absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <FaRegHeart></FaRegHeart>
                            </div>
                            <div className='p-6'>
                                <p className="text-base text-gray-500 capitalize">budapest Hungary</p>
                                <h3 className="text-xl font-bold text-gray-800 capitalize">wonder of the west coast & Kimberly</h3>
                                <div className="flex w-full items-center justify-between py-4 border-b-2 border-gray-300">
                                    <div className="flex items-center justify-between gap-1 bg-orange-400 rounded px-2">
                                        <FaStar></FaStar>
                                        <span>4.8</span>
                                    </div>
                                    <div className='flex items-center justify-between gap-1'>
                                    <FaClock className=''></FaClock>
                                    <p className="text-base text-gray-500">7 Days</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4 ">
                                        <p className="text-base text-gray-500">Starting Form</p>
                                        <p className="text-xl text-black styles-font">$250</p>
                                    </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative bg-white'>
                            <img className="w-full" src={destination2} alt="destination1" />
                            <div className='absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <FaRegHeart></FaRegHeart>
                            </div>
                            <div className='p-6'>
                                <p className="text-base text-gray-500 capitalize">budapest Hungary</p>
                                <h3 className="text-xl font-bold text-gray-800 capitalize">wonder of the west coast & Kimberly</h3>
                                <div className="flex w-full items-center justify-between py-4 border-b-2 border-gray-300">
                                    <div className="flex items-center justify-between gap-1 bg-orange-400 rounded px-2">
                                        <FaStar></FaStar>
                                        <span>4.8</span>
                                    </div>
                                    <div className='flex items-center justify-between gap-1'>
                                    <FaClock className=''></FaClock>
                                    <p className="text-base text-gray-500">7 Days</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4 ">
                                        <p className="text-base text-gray-500">Starting Form</p>
                                        <p className="text-xl text-black styles-font">$250</p>
                                    </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </>
    );
};

export default TourFeatured;