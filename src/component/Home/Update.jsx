import destination1 from '../../assets/home/destination.png'
import destination2 from '../../assets/home/destination2.png'
import destination3 from '../../assets/home/destination3.png'
import destination4 from '../../assets/home/destination4.png'

const Update = () => {
    return (
        <>
            <div className='bg-white py-20'>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center gap-10">
                        <img className='w-full' src={destination1} alt="" />
                        <img className='w-full' src={destination2} alt="" />
                        <img className='w-full' src={destination3} alt="" />
                        <img className='w-full' src={destination4} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Update;