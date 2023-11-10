import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo/logo.png'
import { FaSearch } from "react-icons/fa";

const Header = () => {

    const li = <>
    
    <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500 text-base mx-2" : "text-base mx-2"} > Home </NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500 text-base mx-2" : "text-base mx-2"} > About </NavLink>
    <NavLink to="/tours" className={({ isActive }) => isActive ? "text-red-500 text-base mx-2" : "text-base mx-2"} > Tours </NavLink>
    <NavLink to="/destinations" className={({ isActive }) => isActive ? "text-red-500 text-base mx-2" : "text-base mx-2"} > Destinations </NavLink>
    <NavLink to="/blog" className={({ isActive }) => isActive ? "text-red-500 text-base mx-2" : "text-base mx-2"} > Blog </NavLink>
    <NavLink to="/pages" className={({ isActive }) => isActive ? "text-red-500 text-base mx-2" : "text-base mx-2"} > Pages </NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500 text-base mx-2" : "text-base mx-2"} > Contact </NavLink>
    
    </>

    return (
        <div className="container mx-auto">
            <div className="navbar  py-4">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {li}
                </ul>
                </div>
                <Link to={'/'}><img src={logo} alt="logo"/></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {li}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-5 items-center">
                    <Link to={"#"}><FaSearch className="w-8"></FaSearch></Link>
                    <div className="avatar">
                        <div className="w-10 rounded-full border-2 border-red-500">
                            <img className="bg-slate-400" src="" />
                        </div>
                    </div>
                    <div>
                        login / register
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;