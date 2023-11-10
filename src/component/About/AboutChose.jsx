import SectionHeading from "../common-title/SectionHeading";
import './About.css'

import img1 from '../../assets/about/passport.png'
import img2 from '../../assets/about/booking.png'
import img3 from '../../assets/about/support.png'

const AboutChose = () => {
    return (
        <div className="bg-gray-300 py-20">
            <div className="container mx-auto">
                <div className="text-center">
                    <SectionHeading sub="Features" title="Why Choose Us"></SectionHeading>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="shape mb-4">
                            <img className="w-[60px] ml-5" src={img1} alt="" />
                        </div>
                        <h6 className="text-xl font-bold ">Best Travel Plan</h6>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolore consectetur qui sit temporibus ipsa impedit voluptatum nostrum delectus quam!</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="shape mb-4">
                            <img className="w-[60px] ml-5" src={img2} alt="" />
                        </div>
                        <h6 className="text-xl font-bold ">Easy & Quick Booking</h6>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolore consectetur qui sit temporibus ipsa impedit voluptatum nostrum delectus quam!</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="shape mb-4">
                            <img className="w-[60px] ml-5" src={img3} alt="" />
                        </div>
                        <h6 className="text-xl font-bold ">Customer Care 24/7</h6>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolore consectetur qui sit temporibus ipsa impedit voluptatum nostrum delectus quam!</p>
                    </div>
            
                </div>
            </div>   
        </div>
    );
};

export default AboutChose;