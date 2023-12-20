import Aos from "aos";
import { useEffect } from "react";

const Contact = () => {

    return (
       <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
        <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-blue-500">Contact Me</h1>
        <form action="" className="flex flex-col gap-2 lg:w-1/2">
            <div className="lg:flex gap-9">
                <input className="w-full lg:my-3 my-4 rounded-lg bg-white p-4 border-2 text-blue-500 text-xl " placeholder="Enter Your Name" type="text" />
                <input className="w-full lg:my-3 my-4 rounded-lg bg-white p-4 border-2 text-blue-500  text-xl " placeholder="Enter Your Email" type="text" />
            </div>
            <textarea className="w-full my-3 rounded-lg bg-white p-4 border-2 text-blue-500 text-xl " placeholder="Write Your Massage..." name="" id="" cols="20" rows="10"></textarea>
            <button className="border-2 bg-slate-500 border-blue-800 text-white hover:text-blue-900  rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden text-xl text-bold" type="submit">Submit</button>
        </form>
        
       </div>
    );
};

export default Contact;