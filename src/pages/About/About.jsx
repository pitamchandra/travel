import AboutChose from "../../component/About/AboutChose";
import Team from "../../component/About/Team";
import AboutSection from "../../component/AboutScetion/AboutSection";
import Testimonial from "../../component/Home/Testimonial";
import SectionBanner from "../../component/SectionBanner/SectionBanner";


const About = () => {
    return (
        <>
            <SectionBanner pageName = "About"></SectionBanner>
            <AboutSection></AboutSection>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-8 py-16 border-t-2 justify-between">
                    <div>
                        <p><span className="font-bold text-4xl styles-font text-gray-600">120+</span> <span className="text-xl text-gray-600">Total Destination</span></p>
                    </div>
                    <div>
                        <p><span className="font-bold text-4xl styles-font text-gray-600">500+</span> <span className="text-xl text-gray-600">Travel Package</span></p>
                    </div>
                    <div>
                        <p><span className="font-bold text-4xl styles-font text-gray-600">12k+</span> <span className="text-xl text-gray-600">Total Travellers</span></p>
                    </div>
                    <div>
                        <p><span className="font-bold text-4xl styles-font text-gray-600">7k+</span> <span className="text-xl text-gray-600">Positive Review</span></p>
                    </div>
                </div>
            </div>
            <AboutChose></AboutChose>
            <Team></Team>
            <Testimonial></Testimonial>
        </>
    );
};

export default About;