import { FaCheck } from 'react-icons/fa';
import img from '../../assets/home/choose-us.png'
import SectionHeading from '../common-title/SectionHeading';

const ChooseUs = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className="flex justify-between items-center gap-14">
                <div className='w-full md:w-1/2 flex justify-end'>
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='w-3/4'>
                        <SectionHeading sub="why choose us"></SectionHeading>
                        <h3 className="text-5xl my-4 text-black font-bold">Plan your Trip <br /> with Trisog</h3>
                        <p>Holisticly optimize proactive strategic theme areas rather than effective manufactured products create.</p>
                        <div className='flex justify-between w-3/4 mt-5'>
                            <div className='flex items-center gap-3'>
                                <FaCheck></FaCheck>
                                <p className='font-semibold'>Travel Plan</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaCheck></FaCheck>
                                <p className='font-semibold'>Travel Plan</p>
                            </div>
                        </div>
                        <div className='flex justify-between w-3/4'>
                            <div className='flex items-center gap-3'>
                                <FaCheck></FaCheck>
                                <p className='font-semibold'>Travel Plan</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaCheck></FaCheck>
                                <p className='font-semibold'>Travel Plan</p>
                            </div>
                        </div>
                        <button className='btn mt-10 py-2 px-7 border border-red-600 hover:bg-red-500 hover:text-white'>contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;