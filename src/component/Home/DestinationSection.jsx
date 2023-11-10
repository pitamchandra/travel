import { Link } from "react-router-dom";
import SectionHeading from "../common-title/SectionHeading";
import { FaLongArrowAltRight } from "react-icons/fa";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
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


const DestinationSection = () => {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto">
                <div className="flex justify-between items-end">
                <SectionHeading title="Top Destination" sub="Destination"></SectionHeading>
                <Link to={""} className="font-semibold text-base">See ALL <FaLongArrowAltRight className="inline w-8"></FaLongArrowAltRight></Link>
                </div>
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
                  <img className="w-full" src={destination1} alt="destination1" />
                  <h3 className="text-2xl text-black mt-3">United Kingdom</h3>
                  <p className="text-base text-gray-500">174,688 Travelers</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full" src={destination2} alt="destination1" />
                  <h3 className="text-2xl text-black mt-3">Turkey</h3>
                  <p className="text-base text-gray-500">174,688 Travelers</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full" src={destination3} alt="destination1" />
                  <h3 className="text-2xl text-black mt-3">Thailand</h3>
                  <p className="text-base text-gray-500">174,688 Travelers</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full" src={destination4} alt="destination1" />
                  <h3 className="text-2xl text-black mt-3">France</h3>
                  <p className="text-base text-gray-500">174,688 Travelers</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full" src={destination1} alt="destination1" />
                  <h3 className="text-2xl text-black mt-3">United Kingdom</h3>
                  <p className="text-base text-gray-500">174,688 Travelers</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full" src={destination2} alt="destination1" />
                  <h3 className="text-2xl text-black mt-3">Turkey</h3>
                  <p className="text-base text-gray-500">174,688 Travelers</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full" src={destination3} alt="destination1" />
                  <h3 className="text-2xl text-black mt-3">Thailand</h3>
                  <p className="text-base text-gray-500">174,688 Travelers</p>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full" src={destination4} alt="destination1" />
                  <h3 className="text-2xl text-black mt-3">France</h3>
                  <p className="text-base text-gray-500">174,688 Travelers</p>
                </SwiperSlide>
              </Swiper>
            
            </div>
        </div>
    );
};

export default DestinationSection;