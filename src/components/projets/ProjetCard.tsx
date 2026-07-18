import type { ProjetInterface } from "../../utilities/ProjetInterface";
import { FaGithub } from "react-icons/fa";

interface ProjetCardProps {
    projet: ProjetInterface
}

const ProjetCard = ({ projet }: ProjetCardProps) => {
    return (
        <div className="w-full my-12 shadow-xl py-3 px-12">
            <div>
                <img src={projet.image} alt={`image du projet intitulé ${projet.title}`} />
            </div>
            <div>
                <div>
                    <h2 className="font-bold my-3">{projet.title}</h2>
                    <p className="font-light">{projet.description}</p>
                </div>
                <div>
                    <div className="flex gap-2 py-3">
                        {
                            projet.technologies.map(techno => <div className="badge badge-accent">{techno}</div>)
                        }
                    </div>
                    
                        <a href="#"  className="mt-8 mb-2 py-1.5 bg-base-300 hover:bg-base-200 rounded-lg hover:cursor-pointer flex gap-4 items-center justify-center">
                            <span className="hover:underline">Lien GitHub</span>
                            <FaGithub className="inline  text-xl " />
                        </a>
                    
                </div>
            </div>
        </div>
    )
}

export default ProjetCard;