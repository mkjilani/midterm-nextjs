
import img from '../assets/PMLogo2.jpg';

const About = () => {
    return (

        <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <img src={img} width={290} height={290} className='rounded border-2 p-1 ' alt="Image for Project Management" />
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1  className="text-[52px] font-semibold mb-8 leading-normal text-blue-900 uppercase">About me</h1>
                <p className="text-black">Results-oriented IT Project Manager with an extensive 20-year track record in successfully leading and delivering complex projects within the realms of operating systems and databases. Proven expertise in overseeing end-to-end project lifecycles, from conceptualization to implementation, with a keen focus on optimizing system efficiency and database performance. Adept at collaborating with cross-functional teams, managing resources effectively, and ensuring the seamless integration of OS and DB solutions.</p>


            </div>

        </div>
    );
};

export default About;