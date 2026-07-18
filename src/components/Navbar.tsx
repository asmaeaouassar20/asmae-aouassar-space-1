import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";
import type { CSSProperties } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const styles: CSSProperties = {
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: '9999'
    }
    const size=35;
    return (
        <div className="flex justify-center md:justify-between p-4 items-center">
            <Logo />
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#accueil" className="btn btn-sm btn-ghost">Accueil</a>
                </li>
                <li>
                    <a href="#about" className="btn btn-sm btn-ghost">A propos</a>
                </li>
                <li>
                    <a href="#algostyle" className="btn btn-sm btn-ghost">Ma chaîne YouTube</a>
                </li>
                <li>
                    <a href="#experiences" className="btn btn-sm btn-ghost">Mes expériences</a>
                </li>
                <li>
                    <a href="#projets" className="btn btn-sm btn-ghost">Mes projets</a>
                </li>
            </ul>

            <button style={styles} className="hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
                {isOpen ? <X size={size} /> : <Menu size={size} />}
            </button>

            {
                isOpen && <div className="fixed top-0 right-0 menu-burger bg-base-300">
                    <ul className="flex flex-col  space-y-4  p-5 h-screen" >
                        <li onClick={()=>setIsOpen(false)}>
                            <a href="#accueil" className="btn btn-sm btn-ghost">Accueil</a>
                        </li>
                        <li onClick={()=>setIsOpen(false)}>
                            <a href="#about" className="btn btn-sm btn-ghost">A propos</a>
                        </li>
                        <li onClick={()=>setIsOpen(false)}>
                            <a href="#algostyle" className="btn btn-sm btn-ghost">Ma chaîne YouTube</a>
                        </li>
                        <li onClick={()=>setIsOpen(false)}>
                            <a href="#experiences" className="btn btn-sm btn-ghost">Mes expériences</a>
                        </li>
                        <li onClick={()=>setIsOpen(false)}>
                            <a href="#projets" className="btn btn-sm btn-ghost">Mes projets</a>
                        </li>
                    </ul>
                </div>
            }

        </div>
    )
}


export default Navbar;