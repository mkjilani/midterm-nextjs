import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";
const Footer = () => {
    return (
       <footer className="bg-blue-800 text-white lg:px-48 px-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">

            <div>
                <h2 className="text-[22px] font-semibold text-white py-2 uppercase">Services</h2>
                <ul className="text-[16px] my-4">
                    <li className="my-2">IT Project Management</li>
                    <li className="my-2">Data Visualization</li>

                </ul>
            </div>
            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-white py-2 uppercase">Contact</h2>
                <p className="text-[16px] my-4">Email: youremail.gmail.com</p>
                <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
            </div>
           <div>
             <h2 className="text-[22px] font-semibold text-white py-2 uppercase">Follow Me</h2>
            <div className="flex space-x-4">
                <a href="http://github.com" aria-label="Link to Github" className="text-white hover:text-blue-800  " >
                    <FaGithub/>
                </a>
                <a href="http://linkedin.com" aria-label="Link to LinkedIn" className="text-white hover:text-blue-800  ">
                    <FaLinkedinIn/>
                </a>
                <a href="http://twitter.com" aria-label="Link to Twitter" className="text-white hover:text-blue-800  " >
                    <FaTwitter/>
                </a>
            </div>
           </div>
        </div>
       </footer>

    );
};

export default Footer;