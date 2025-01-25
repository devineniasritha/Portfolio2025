import icon from "../assets/icon.png";
import asrithadevineni from "../assets/asrithadevineni.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si'; 
import { useState, useEffect,useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { MdOutlinePictureAsPdf} from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen); 
    };
    const handleClickOutside = (event) => {
        // Close menu if the click is outside the menu or button
        if (menuRef.current && !menuRef.current.contains(event.target) && 
            buttonRef.current && !buttonRef.current.contains(event.target)) {
            setMobileMenuOpen(false);
        }
    };
    const openPdf = () => {
        window.open(asrithadevineni, "_blank");
    };
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50 flex items-center justify-between px-4 py-1 font-pacifico"  style={{ height: '64px' }} >
        <div className="max-w-screen-xl mx-auto flex flex-shrink-0 items-center ml-6"style={{ paddingTop: '16px' }} >
            <div className="flex items-center">
                <img src={icon} alt="icon" className="w-12 h-12 mr-10"/>
            
                <div className="flex space-x-6 text-lg font-medium hidden md:flex">
                    <Link spy={true} to="about" smooth={true} duration={1000} offset={-190} className="hover:text-[#6198b5] cursor-pointer">
                        About
                    </Link>

                    <Link spy={true} to="skills" smooth={true} duration={1000} offset={-150} className="hover:text-[#6198b5] cursor-pointer">
                        Skills
                    </Link>

                    <Link spy={true} to="experience" smooth={true} duration={1000} offset={-110} className="hover:text-[#6198b5] cursor-pointer">
                        Experience
                    </Link>         
                    
                    <Link spy={true} to="projects" smooth={true} duration={1000} offset={-130} className="hover:text-[#6198b5] cursor-pointer">
                        Projects
                    </Link>
                    
                    <Link spy={true} to="education" smooth={true} duration={1000} offset={-100} className="hover:text-[#6198b5] cursor-pointer">
                        Education
                    </Link>

                    <Link spy={true} to="contact" smooth={true} duration={1000} offset={-10} className="hover:text-[#6198b5] cursor-pointer">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex item-center space-x-6 text-2xl ml-auto m-7" style={{ paddingTop: '16px' }}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asrithadevineni@gmail.com" target="_blank" rel="noopener noreferrer" title="Mail"><MdEmail/></a>
            <button onClick={openPdf}><MdOutlinePictureAsPdf title="Resume"/></button>
            <a href="https://www.linkedin.com/in/asrithadevineni/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin/></a>
            <a href="https://github.com/devineniasritha/" target="_blank" rel="noopener noreferrer" title="Github"><FaGithub/></a>
            <a href="https://leetcode.com/u/asrithadevineni/" target="_blank" rel="noopener noreferrer" title="LeetCode"><SiLeetcode/></a>
            <div className="md:hidden flex items-center ml-auto">
                <button ref={buttonRef} onClick={toggleMobileMenu} className="text-white">
                <FaBars size={24} />
                </button>
            </div>
        </div>

        
        
      {isMobileMenuOpen && (
        <div ref={menuRef} className="absolute top-16 right-0 w-[200px] bg-black bg-opacity-80 text-center py-4 z-10">
            <Link spy={true} to="about" smooth={true} duration={1000} offset={-190} className="block py-2 hover:text-[#6198b5] cursor-pointer">
                About
            </Link>

            <Link spy={true} to="skills" smooth={true} duration={1000} offset={-150} className="block py-2 hover:text-blue-300 cursor-pointer">
                Skills
            </Link>

            <Link spy={true} to="experience" smooth={true} duration={1000} offset={-110} className="block py-2 hover:text-[#6198b5] cursor-pointer">
                Experience
            </Link>         
            
            <Link spy={true} to="projects" smooth={true} duration={1000} offset={-130} className="block py-2 hover:text-[#6198b5] cursor-pointer">
                Projects
            </Link>
            
            <Link spy={true} to="education" smooth={true} duration={1000} offset={-100} className="block py-2 hover:text-[#6198b5] cursor-pointer">
                Education
            </Link>

            <Link spy={true} to="contact" smooth={true} duration={1000} offset={-10} className="block py-2 hover:text-[#6198b5] cursor-pointer">
                Contact
            </Link>
        </div>
        )}
    </nav>
  )
}

export default Navbar

