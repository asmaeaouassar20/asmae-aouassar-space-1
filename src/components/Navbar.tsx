import { Flower } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between p-4 items-center">
            <a href="" className="flex items-center font-bold text-3xl md:text-xl ">
                <Flower className="mr-2" />
                ASMAE <span className="text-neutral">Space</span>
            </a>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="Accueil" className="btn btn-sm btn-ghost">Accueil</a>
                </li>
                  <li>
                    <a href="Accueil" className="btn btn-sm btn-ghost">A propos</a>
                </li>
                  <li>
                    <a href="Accueil" className="btn btn-sm btn-ghost">Mes expériences</a>
                </li>
                  <li>
                    <a href="Accueil" className="btn btn-sm btn-ghost">Mes projets</a>
                </li>
            </ul>

        </div>
    )
}


export default Navbar;