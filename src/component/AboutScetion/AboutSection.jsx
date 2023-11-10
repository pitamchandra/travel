
import img1 from '../../assets/home/destination2.png'
import img2 from '../../assets/home/destination3.png'
import SectionHeading from '../common-title/SectionHeading';

const AboutSection = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-2 gap-8 pt-40 pb-16">
                <div className="flex relative justify-end z-20 pr-5">
                    <div className="w-7/12 absolute left-24 bottom-12 -rotate-12 -z-10">
                        <img src={img1} className="w-full" alt="" />
                    </div>
                    <div className="w-7/12">
                        <img src={img2} className="w-full" alt="" />
                    </div>
                </div>
            
                <div className='pr-32'>
                    <SectionHeading sub="About Us" title="Why Select Us For your Vaction"></SectionHeading>
                    <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dicta corrupti ullam. Perferendis, excepturi! Nemo voluptas reiciendis harum eveniet inventore.</p>
                    <p className="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eaque?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eaque? Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eaque?</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;