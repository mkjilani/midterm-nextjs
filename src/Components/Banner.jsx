import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import img from '../assets/PM.png';
import CallToAction from '../Components/CallToAction';


const Banner = () => {

    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-red">
                <h1 className="text-blue-900 text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome To IT Project Management</h1>
                <p >We specialize in comprehensive IT project management solutions tailored to meet the unique needs of your business. Whether you're launching a new software initiative, upgrading your infrastructure, or implementing cybersecurity measures, our experienced team is here to guide you every step of the way</p>
                <div>
                    <CallToAction />
                </div>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div  className="flex space-x-2">
                            <a href="http://github.com" aria-label="Link to Github" className="text-blue-900 rounded-full">
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="http://linkedin.com" aria-label="Link to LinkedIn" className="text-blue-900 rounded-full">
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a href="http://twitter.com" aria-label="Link to Twitter" className="text-blue-900  rounded-full">
                                <FiTwitter className="text-[28px]"/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <img src={img} width={1280} height={700} alt="" />
        </div>
    );
};

export default Banner;