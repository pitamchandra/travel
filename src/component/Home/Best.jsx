import SectionHeading from "../common-title/SectionHeading";
import './Best.css'
import bestImage from '../../assets/home/best.png'

const Best = () => {
    return (
        <>
            <div className="container mx-auto py-20">
                <div className="flex justify-between items-center">
                    <div className="w-1/2">
                        <SectionHeading sub="Why We Are Best" title="Keep Things Flexible"></SectionHeading>
                        <button className='btn mt-4 py-2 px-7 border border-red-600 hover:bg-red-500 hover:text-white'>contact us</button>
                        <div className="flex justify-between items-center mt-10">
                            <div className="">
                                <h3 className="heading-shape relative text-3xl font-bold text-black styles-font mb-4">120+</h3>
                                <p className="text-base text-gray-500">Total Destination</p>
                            </div>
                            <div className="">
                                <h3 className="heading-shape relative text-3xl font-bold text-black styles-font mb-4">12k+</h3>
                                <p className="text-base text-gray-500">Total Travelers</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-10">
                            <div className="">
                                <h3 className="heading-shape relative text-3xl font-bold text-black styles-font mb-4">550+</h3>
                                <p className="text-base text-gray-500">Total Packages</p>
                            </div>
                            <div className="">
                                <h3 className="heading-shape relative text-3xl font-bold text-black styles-font mb-4">700k+</h3>
                                <p className="text-base text-gray-500">Total Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <img className="w-3/4 " src={bestImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Best;