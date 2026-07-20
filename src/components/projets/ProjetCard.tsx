import type { ProjetInterface } from "../../utilities/ProjetInterface";
import { FaGithub } from "react-icons/fa";

interface ProjetCardProps {
    projet: ProjetInterface
}

const ProjetCard = ({ projet }: ProjetCardProps) => {
    return (
        <div className="relative my-12 py-3 px-12 shadow-xl  md:my-0 md:py-3 md:px-3 ">
            <div>
                <img className="w-full h-full object-cover" src={projet.image} alt={`image du projet intitulé ${projet.title}`} />
            </div>
            <div>
                <div>
                    <h2 className="font-bold my-3">{projet.title}</h2>
                    <p className="font-light">{projet.description}</p>
                </div>

                
                    <div className="flex gap-2 py-3 flex-wrap mb-[50px]">
                        {
                            projet.technologies.map((techno, index) => <div key={index} className="badge badge-accent text-[10px]">{techno}</div>)
                        }
                    </div>
                    
                    <a href="#" className="absolute bottom-0 left-3 right-3  mt-8 mb-2 py-1.5 bg-base-300 hover:bg-base-200 rounded-lg hover:cursor-pointer flex gap-4 items-center justify-center">
                        <a href={projet.github} className="hover:underline">Lien GitHub</a>
                        <FaGithub className="inline  text-xl " />
                    </a>

               
            </div>
        </div>
    )
}

export default ProjetCard;