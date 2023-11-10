import SectionHeading from "../common-title/SectionHeading";

import './About.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../assets/about/team1.png'
import img2 from '../../assets/about/team2.png'
import img3 from '../../assets/about/team3.png'
import img4 from '../../assets/about/team4.png'
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team = () => {
    return (
        <div className="bg-white pt-20">
            <div className="container mx-auto">
                <div className="text-center">
                    <SectionHeading sub="Team" title="Our Amazing Team"></SectionHeading>
                </div>
                
                <div className="mt-8">
                <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-10"
              >
                <SwiperSlide>
                  <div className="relative team-img">
                    <img className="w-full" src={img1} alt="team1" />
                    <div className="overlay w-full h-full flex gap-4 items-center justify-center">
                        <Link to={"#"}><FaFacebookF className="text-white hover:text-red-500 text-2xl"></FaFacebookF></Link>
                        <Link to={"#"}><FaTwitter className="text-white hover:text-red-500 text-2xl"></FaTwitter></Link>
                        <Link to={"#"}><FaLinkedinIn className="text-white hover:text-red-500 text-2xl"></FaLinkedinIn></Link>
                    </div>
                  </div>
                  <h3 className="text-2xl text-black mt-3">Orlando Digs</h3>
                  <p className="text-base text-gray-500">Director of Hotels</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative team-img">
                    <img className="w-full" src={img2} alt="team1" />
                    <div className="overlay w-full h-full flex gap-4 items-center justify-center">
                        <Link to={"#"}><FaFacebookF className="text-white hover:text-red-500 text-2xl"></FaFacebookF></Link>
                        <Link to={"#"}><FaTwitter className="text-white hover:text-red-500 text-2xl"></FaTwitter></Link>
                        <Link to={"#"}><FaLinkedinIn className="text-white hover:text-red-500 text-2xl"></FaLinkedinIn></Link>
                    </div>
                  </div>
                  <h3 className="text-2xl text-black mt-3">Andrew Davie</h3>
                  <p className="text-base text-gray-500">Chef Officer</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative team-img">
                    <img className="w-full" src={img3} alt="team1" />
                    <div className="overlay w-full h-full flex gap-4 items-center justify-center">
                        <Link to={"#"}><FaFacebookF className="text-white hover:text-red-500 text-2xl"></FaFacebookF></Link>
                        <Link to={"#"}><FaTwitter className="text-white hover:text-red-500 text-2xl"></FaTwitter></Link>
                        <Link to={"#"}><FaLinkedinIn className="text-white hover:text-red-500 text-2xl"></FaLinkedinIn></Link>
                    </div>
                  </div>
                  <h3 className="text-2xl text-black mt-3">Otony Dakara</h3>
                  <p className="text-base text-gray-500">Founder & CEO</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative team-img">
                    <img className="w-full" src={img4} alt="team1" />
                    <div className="overlay w-full h-full flex gap-4 items-center justify-center">
                        <Link to={"#"}><FaFacebookF className="text-white hover:text-red-500 text-2xl"></FaFacebookF></Link>
                        <Link to={"#"}><FaTwitter className="text-white hover:text-red-500 text-2xl"></FaTwitter></Link>
                        <Link to={"#"}><FaLinkedinIn className="text-white hover:text-red-500 text-2xl"></FaLinkedinIn></Link>
                    </div>
                  </div>
                  <h3 className="text-2xl text-black mt-3">Tamara Bilis</h3>
                  <p className="text-base text-gray-500">Customer Support</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative team-img">
                    <img className="w-full" src={img1} alt="team1" />
                    <div className="overlay w-full h-full flex gap-4 items-center justify-center">
                        <Link to={"#"}><FaFacebookF className="text-white hover:text-red-500 text-2xl"></FaFacebookF></Link>
                        <Link to={"#"}><FaTwitter className="text-white hover:text-red-500 text-2xl"></FaTwitter></Link>
                        <Link to={"#"}><FaLinkedinIn className="text-white hover:text-red-500 text-2xl"></FaLinkedinIn></Link>
                    </div>
                  </div>
                  <h3 className="text-2xl text-black mt-3">Andrew Davie</h3>
                  <p className="text-base text-gray-500">Chef Officer</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative team-img">
                    <img className="w-full" src={img2} alt="team1" />
                    <div className="overlay w-full h-full flex gap-4 items-center justify-center">
                        <Link to={"#"}><FaFacebookF className="text-white hover:text-red-500 text-2xl"></FaFacebookF></Link>
                        <Link to={"#"}><FaTwitter className="text-white hover:text-red-500 text-2xl"></FaTwitter></Link>
                        <Link to={"#"}><FaLinkedinIn className="text-white hover:text-red-500 text-2xl"></FaLinkedinIn></Link>
                    </div>
                  </div>
                  <h3 className="text-2xl text-black mt-3">Otony Dakara</h3>
                  <p className="text-base text-gray-500">Founder & CEO</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative team-img">
                    <img className="w-full" src={img3} alt="team1" />
                    <div className="overlay w-full h-full flex gap-4 items-center justify-center">
                        <Link to={"#"}><FaFacebookF className="text-white hover:text-red-500 text-2xl"></FaFacebookF></Link>
                        <Link to={"#"}><FaTwitter className="text-white hover:text-red-500 text-2xl"></FaTwitter></Link>
                        <Link to={"#"}><FaLinkedinIn className="text-white hover:text-red-500 text-2xl"></FaLinkedinIn></Link>
                    </div>
                  </div>
                  <h3 className="text-2xl text-black mt-3">Tamara Bilis</h3>
                  <p className="text-base text-gray-500">Customer Support</p>
                </SwiperSlide>
              </Swiper>
                </div>
            </div>   
        </div>
    );
};

export default Team;