import {FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
const Footer = () => {
    return (
       <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">

            <div>
                <h2 className="text-[22px] font-semibold text-blue-800 py-2 uppercase">Services</h2>
                <ul className="text-[16px] my-4">
                    <li className="my-2">IT Project Management</li>
                    <li className="my-2">Data Visualization</li>

                </ul>
            </div>
            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-blue-800 py-2 uppercase">Contact</h2>
                <p className="text-[16px] my-4">Email: youremail.gmail.com</p>
                <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
            </div>
           <div>
             <h2 className="text-[22px] font-semibold text-blue-800 py-2 uppercase">Follow Me</h2>
            <div className="flex space-x-4">
                <a className="text-white hover:text-blue-800  transition-all duration-150 ease-in-out" href="http://github.com/mkjilani">
                    <FaGithub/>
                </a>
                <a className="text-white hover:text-blue-800  transition-all duration-150 ease-in-out" href="http://linkedin.com/mkjilani">
                    <FaLinkedinIn/>
                </a>
                <a className="text-white hover:text-blue-800  transition-all duration-150 ease-in-out" href="http://twitter.com">
                    <FaTwitter/>
                </a>
            </div>
           </div>
        </div>
       </footer>

    );
};

export default Footer;