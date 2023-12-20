import { useState } from "react";
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import img5 from '../assets/PM-logo.png';

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>  setClick(!click);
  
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-red-900">
        <div className="flex items-center flex-1">

                <img height={250} width={250} className="flex items-center justify-left rounded-3xl p-1 " src={img5} alt="Logo for site" />
                </div>
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b text-black hover:text-blue-900 hover:rounded">Home</li>
                </Link >
                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b text-black hover:text-blue-900 hover:rounded">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                    <li className="my-4 py-4 border-b text-black hover:text-blue-900 hover:rounded">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Services">
                    <li className="my-4 py-4 border-b text-black hover:text-blue-900 hover:rounded">Skills</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b text-black hover:text-blue-900 hover:rounded">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="flex justify-between z-50 text-blue-500 lg:py-5 px-20 py-4 border-b border-black">

                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                <Link spy={true} smooth={true} to="Home">
                    <li className=" transition text-black hover:text-blue-900 cursor-pointer">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                    <li className="transition text-black hover:text-blue-900 cursor-pointer">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                    <li className="transition text-black hover:text-blue-900 cursor-pointer">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Skills">
                    <li className="transition text-black hover:text-blue-900 cursor-pointer">Skills</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                    <li className="transition text-black hover:text-blue-900 cursor-pointer">Contact</li>
                </Link>
            </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>

            </div>
        </nav>
    );
};

export default Nav;