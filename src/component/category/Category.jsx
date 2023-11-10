

const category = (props) => {
    const {img, title , descirption} = props;
    return (
        <>
            <div>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <p>{descirption}</p>
            </div>
        </>
    );
};

export default category;