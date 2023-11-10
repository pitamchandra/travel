
import './SectionBanner.css'
const SectionBanner = (props) => {
    const {pageName} = props;
    return (
        <>
            <div className='section-banner'>
                <h2 className='text-5xl text-white'>{pageName}</h2>
            </div>   
        </>
    );
};

export default SectionBanner;