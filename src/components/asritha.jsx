import { ABOUT_CONTENT } from '../constants';
import pic from '../assets/pic.png';
import { FaLinkedin, FaFilePdf } from 'react-icons/fa'; 
import asrithadevineni from "../assets/asrithadevineni.pdf";


const Asritha = () => {
        const openPdf = () => {
            window.open(asrithadevineni, "_blank");
        };
  return (
    <div id="about" className="mt-[190px] border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[55%] mb-8 lg:mb-0">
          <div className="flex items-center lg:items-start gap-5 flex-wrap">
            <h1 className="text-6xl font-light tracking-tight lg:text-8xl">Asritha</h1>
            <h1 className="text-6xl font-light tracking-tight lg:text-8xl">Devineni</h1>
          </div>
          <span className="my-2 py-6 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-300 bg-clip-text text-4xl tracking-tight text-transparent">
            Software Developer
          </span>
          <p className="my-2 py-6 text-neutral-400 font-light">{ABOUT_CONTENT}</p>
          <div className="flex gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-45 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="flex relative px-4 py-2 bg-black rounded-lg leading-none items-center">
                <a
                  href="https://www.linkedin.com/in/asrithadevineni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                    <span className="mr-2 text-neutral-300 hover:text-white">Connect </span>
                  <FaLinkedin className="mr-2" style={{ color: '#0077b5' }} />
                  
                </a>
              </button>
            </div>


            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-45 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button onClick={openPdf} className="relative px-4 py-2 bg-black rounded-lg leading-none flex items-center">
                <a
                  href="/path-to-your-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                    <span className="mr-2 text-neutral-300 hover:text-white">Resume</span>
                  <FaFilePdf className="mr-2 text-red-600" />
                  
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end lg:p-10 mt-20 sm:mt-0">
          <div className="flex justify-center relative lg:-mt-24" style={{ marginTop: '-110px' }}>
            <img src={pic} alt="asritha" className="max-w-[80%] sm:max-w-[70%] lg:max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asritha;
