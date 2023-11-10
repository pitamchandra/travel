

const CategoryBox = (props) => {
    console.log(props.category);
    const {img, title , description} = props.category;
    return (
        <>
            <div className="shadow-lg hover:shadow-2xl duration-500 py-6 w-40 text-center bg-white ">
                <img className="w-12 rounded-full mb-3 mx-auto" src={img.img} alt="" />
                <h3 className="font-semibold text-xl text-black">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default CategoryBox;