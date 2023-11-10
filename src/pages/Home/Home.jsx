import Banner from "../../component/Home/Banner";
import Best from "../../component/Home/Best";
import Category from "../../component/Home/Category";
import ChooseUs from "../../component/Home/ChooseUs";
import DestinationSection from "../../component/Home/DestinationSection";
import Testimonial from "../../component/Home/Testimonial";
import Tevily from "../../component/Home/Tevily";
import TourFeatured from "../../component/Home/TourFeatured";
import Update from "../../component/Home/Update";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <ChooseUs></ChooseUs>
            <DestinationSection></DestinationSection>
            <TourFeatured></TourFeatured>
            <Best></Best>
            <Testimonial></Testimonial>
            <Tevily></Tevily>
            <Update></Update>
        </>
    );
};

export default Home;