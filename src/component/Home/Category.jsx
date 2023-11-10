import SectionHeading from "../common-title/SectionHeading";
import img from '../../assets/tower.png';
import CategoryBox from "../category/CategoryBox";

const Category = () => {
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
    ]
    return (
        <div className="container mx-auto py-20">
            <div className="section_heading text-center">
                <SectionHeading title="Pic a tour type" sub="Browse by Category"></SectionHeading>
            </div>
            <div className="flex gap-5 justify-between items-center mt-10">
                {
                    categories.map(category => <CategoryBox
                        category = {category}
                        key={""}
                    ></CategoryBox>)
                }
            </div>
        </div>
    );
};

export default Category;