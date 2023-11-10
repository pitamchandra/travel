import { FaGoogle, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Top = () => {
    return (
        <div style={{background: "#F2F3F5", padding: "10px"}}>
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex">
                        <p>+88017845421</p>    
                        <div className="divider divider-horizontal"></div>
                        <p>yourmail@gmail.com</p>    
                    </div> 
                    <div className="flex">
                        <div className="flex">
                                <Link to={"#"}><FaTwitter className="w-3 mt-1 ml-2"></FaTwitter></Link>
                                <Link to={"#"}><FaLinkedinIn className="w-3 mt-1 ml-2"></FaLinkedinIn></Link>
                                <Link to={"#"}><FaGoogle className="w-3 mt-1 ml-2"></FaGoogle></Link>
                                <Link to={"#"}><FaPinterestP className="w-3 mt-1 ml-2"></FaPinterestP></Link>
                                
                        </div>    
                        <div className="divider divider-horizontal"></div>
                        <form>
                            <select style={{background: "transparent"}} name="" id="">
                                <option value="eur">EUR</option>
                                <option value="eng">EN</option>
                                <option value="bangla">BN</option>
                            </select>
                        </form>  
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Top;