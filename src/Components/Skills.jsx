import img1 from '../assets/Tableau-logo.jpg';
import img2 from '../assets/excel-logo.png';
import img3 from '../assets/SQL-logo.png';
import img4 from '../assets/Project-logo.png';

const Skills = () => {

    return (
       <div id="Skills" className="p-20 flex flex-col items-center justify-center">
        <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-blue-900">Skills</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <img height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 " src={img1} alt="Tableau skill" />
            <img height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 " src={img2} alt="Excel skill" />
            <img height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 " src={img3} alt="SQL Server skill" />
            <img height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 " src={img4} alt="Project skill" />
        </div>
       </div>
    );
};

export default Skills;