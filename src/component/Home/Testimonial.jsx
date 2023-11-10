import SectionHeading from "../common-title/SectionHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import './Testimonial.css'
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
    return (
        <>
            <div className="bg-white pt-20">
                <div className="text-center">
                    <SectionHeading sub="Testimonials"></SectionHeading>
                    <h3 className="text-5xl text-black font-bold">What Our Customer <br /> Say Abut Us</h3>
                </div>
            </div>
            <div className="testimonial pt-10 pb-20">
                <div className="container mx-auto text-center">
                    <div className="flex justify-between">
                        <div className="w-1/3"></div>
                        <div className="w-1/3">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <FaQuoteRight className="text-yellow-500 text-4xl text-center mx-auto"></FaQuoteRight>
                            <h3 className="text-2xl font-bold text-black my-3"> "The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app." </h3>
                            <p className="text-base text-gray-500">By - pitam chandra - web developer</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <FaQuoteRight className="text-yellow-500 text-4xl text-center mx-auto"></FaQuoteRight>
                            <h3 className="text-2xl font-bold text-black my-3"> "The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app." </h3>
                            <p className="text-base text-gray-500">By - pitam chandra - web developer</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <FaQuoteRight className="text-yellow-500 text-4xl text-center mx-auto"></FaQuoteRight>
                            <h3 className="text-2xl font-bold text-black my-3"> "The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app." </h3>
                            <p className="text-base text-gray-500">By - pitam chandra - web developer</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <FaQuoteRight className="text-yellow-500 text-4xl text-center mx-auto"></FaQuoteRight>
                            <h3 className="text-2xl font-bold text-black my-3"> "The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app." </h3>
                            <p className="text-base text-gray-500">By - pitam chandra - web developer</p>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                        <div className="w-1/3"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;