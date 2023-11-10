import { FaPlayCircle } from 'react-icons/fa';
import './Tevily.css'
import SectionHeading from '../common-title/SectionHeading';

import img from '../../assets/tower.png';
import CategoryBox from '../category/CategoryBox';

const Tevily = () => {

    const categories = [
        {
            img: {img},
            title: "Towers",
            description:"10 towers"
        },
        {
            img: {img},
            title: "Towers",
            description:"10 towers"
        },
        {
            img: {img},
            title: "Towers",
            description:"10 towers"
        },
        {
            img: {img},
            title: "Towers",
            description:"10 towers"
        }
    ]
    return (
        <>
            <div className='tevily py-20'>
                <div className='container mx-auto'>
                    <div className="flex">
                        <div className='w-1/2'>
                            <FaPlayCircle className='text-red-500 text-5xl mb-5' ></FaPlayCircle>
                            <div className='white-title'>
                            <SectionHeading sub="Are you ready to travel" title='Tevily is a world leading online tour booking platform'></SectionHeading>
                            </div>
                            <button className='btn mt-4 py-2 px-7 border border-red-600 hover:bg-red-500 hover:text-white'>contact us</button>
                        </div>
                        <div className="w-1/2 md:px-36">
                            <div className="grid md:grid-cols-2 gap-5">
                                {
                                    categories.map(category => <CategoryBox
                                        key={""}
                                        category={category}
                                    ></CategoryBox>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tevily;