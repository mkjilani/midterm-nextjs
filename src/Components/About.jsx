
import img from '../assets/PMLogo2.jpg';

const About = () => {
    return (

        <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <img src={img} width={290} height={290} className='rounded border-2 p-1 ' alt="Image for Project Management" />
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1  className="text-[52px] font-semibold mb-8 leading-normal text-blue-500 uppercase">About me</h1>
                <p className="text-black">20+ year financial industry IT Project management specialist for largescale Operating Systems and Database upgrade projects.</p>


            </div>

        </div>
    );
};

export default About;