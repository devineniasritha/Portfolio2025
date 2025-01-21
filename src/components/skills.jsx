import { RiReactjsLine } from "react-icons/ri";
import pythonLogo from "../assets/skills/python.svg";
import Dotnet  from "../assets/skills/dotnet.svg";
import Postgresql from "../assets/skills/postgresql.svg";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {

    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Skills</h1>
            <div className="flex flex-wrap items-strech justify-center gap-4">

                <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center" style={{ width: "150px", height: "180px" }}> 
                    <RiReactjsLine style={{ fontSize: "70px", color: "#00BCD4", width: "70px", height: "70px", verticalAlign: "middle"}} />
                    <h1 className="text-xl mt-3">React</h1>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center" style={{ width: "150px", height: "180px" }}>
                    <img src={pythonLogo} alt="Python Logo" className="text-2xl" style={{ width: "70px", height: "70px" ,verticalAlign: "middle" }}/>
                    <h1 className="text-xl mt-3">Python</h1>    
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center" style={{ width: "150px", height: "180px" }}>
                    <img src={Dotnet} alt="Dotnet Logo" className="text-2xl" style={{ width: "70px", height: "70px" ,verticalAlign: "middle" }}/>
                    <h1 className="text-xl mt-3">ASP.NET</h1>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center" style={{ width: "150px", height: "180px" }}>
                    <img src={Postgresql} alt="Postgresql Logo" className="text-2xl" style={{ width: "70px", height: "70px" ,verticalAlign: "middle" }}/>
                <h1 className="text-xl mt-3">PostGreSQL</h1>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center" style={{ width: "150px", height: "180px" }}>
                    <DiMsqlServer style={{ fontSize: "70px", width: "70px", height: "70px", verticalAlign: "middle"}}/>
                    <h1 className="text-xl mt-3">SQL server</h1>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center" style={{ width: "150px", height: "180px" }}>
                    <FaAws style={{ fontSize: "70px", width: "70px", height: "70px", verticalAlign: "middle"}}/>
                    <h1 className="text-xl mt-3">AWS</h1>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center" style={{ width: "150px", height: "180px" }}>
                    <FaNodeJs className="text-7xl text-green-500" />
                    <h1 className="text-xl mt-3">Node js</h1>
                </div>
            </div>
        </div>
    );
};
export default Skills;