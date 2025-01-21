import icon from "../assets/icon.png";
import asrithadevineni from "../assets/asrithadevineni.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si'; 
import { useState, useEffect,useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
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
                    <a href="#about" className="hover:text-[#6198b5]">About</a>
                    <a href="#skills" className="hover:text-[#6198b5]">Skills</a>
                    <a href="#experience" className="hover:text-[#6198b5]">Experience</a>
                    <a href="#projects" className="hover:text-[#6198b5]">Projects</a>
                    <a href="#education" className="hover:text-[#6198b5]">Education</a>
                    <a href="#contact" className="hover:text-[#6198b5]">Contact</a>
                </div>
            </div>
        </div>
        <div className="flex item-center space-x-6 text-2xl ml-auto m-7" style={{ paddingTop: '16px' }}>
            <button onClick={openPdf}><FaFilePdf/></button>
            <a href="https://www.linkedin.com/in/asrithadevineni/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a href="https://github.com/devineniasritha/" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a href="https://leetcode.com/u/asrithadevineni/" target="_blank" rel="noopener noreferrer"><SiLeetcode/></a>
            <div className="md:hidden flex items-center ml-auto">
                <button ref={buttonRef} onClick={toggleMobileMenu} className="text-white">
                <FaBars size={24} />
                </button>
            </div>
        </div>

        
        
      {isMobileMenuOpen && (
        <div ref={menuRef} className="absolute top-16 right-0 w-[200px] bg-black bg-opacity-80 text-center py-4 z-10">
          <a href="#about" className="block py-2 hover:text-[#6198b5]">About</a>
          <a href="#education" className="block py-2 hover:text-[#6198b5]">Education</a>
          <a href="#experience" className="block py-2 hover:text-[#6198b5]">Experience</a>
          <a href="#skills" className="block py-2 hover:text-[#6198b5]">Skills</a>
          <a href="#blog" className="hover:text-[#6198b5]">Blog</a>
          <a href="#contact" className="block py-2 hover:text-[#6198b5]">Contact</a>
        </div>
        )}
    </nav>
  )
}

export default Navbar

