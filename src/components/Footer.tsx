import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Logo from "./Logo"

const Footer = () => {
    return (
        <div className="mb-1 py-20 bg-base-200">
            <div className="flex items-center justify-center flex-col gap-2">
                <Logo />
                <p className="text-sm text-gray-500 text-center">
                    © 2026 — Asmae Aouassar
                </p>
            </div>

            <div className="flex text-4xl flex items-center justify-center  gap-6 mt-6">
                <a href="https://github.com/asmaeaouassar20"><FaGithub /></a>
                <a href="https://www.youtube.com/@algostyle5707"><FaYoutube /></a>
                <a href="https://www.linkedin.com/in/asmae-aouassar-2738b624b/"><FaLinkedin /></a>                                
            </div>
        </div>
    )
}

export default Footer;