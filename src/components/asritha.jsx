import {ABOUT_CONTENT} from '../constants';
import pic from '../assets/pic.png';

const Asritha = () => {
    return (
    <div className="mt-[190px] border-b border-neutral-800 pb-4 lg:mb-35">
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[55%] mb-8 lg:mb-0">
                <div className="flex items-center lg:items-start gap-5 flex-wrap">
                    <h1 className="text-6xl font-light tracking-tight lg:text-8xl">Asritha</h1>
                    <h1 className="text-6xl font-light tracking-tight lg:text-8xl">Devineni</h1>
                </div>
                <span className="my-2 py-6 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-300 bg-clip-text text-4xl tracking-tight text-transparent">
                    Software Developer
                </span>
                <p className='my-2 py-6 font-light'>{ABOUT_CONTENT}</p>
            </div>
            <div className='w-full lg:w-[45%] flex justify-center lg:justify-end lg:p-10 mt-20 sm:mt-0'>
                <div className='flex justify-center relative lg:-mt-24' style={{ marginTop: '-110px' }}>  
                    <img src={pic} alt='asritha' className="max-w-[80%] sm:max-w-[70%] lg:max-w-full"/>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Asritha;