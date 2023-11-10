

const SectionHeading = (props) => {
// console.log(props);
    const {title, sub} = props;
    return (
        <div>
            <p className="text-2xl styles-font brand">{sub}</p>
            <h3 className="text-5xl text-black font-bold">{title}</h3>
            
        </div>
    );
};

export default SectionHeading;