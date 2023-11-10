
import './Banner.css'
import Destination from './Destination';

const Banner = () => {


    return (
        <div className="banner-section py-32 md:py-20">
            <div className="container mx-auto">
                <div className="">
                    <div className=''>
                        <p className="styles-font brand text-3xl">Explore The</p>
                        <h1 className='text-8xl text-white'>Travel & <br /> Adventures</h1>
                        <p className='capitalize text-white'>find awesome hotel, car, tour and activities in London</p>
                    </div>
                </div>
                <Destination></Destination>
            </div>
        </div>
    );
};

export default Banner;