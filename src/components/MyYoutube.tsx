import { FaYoutube } from "react-icons/fa";
import Title from "./Title";
import ytbALGOSTYLE from "../assets/ytb-algostyle.png";


const MyYoutube = () => {
    return (
        <div className="my-10 p-16" id="algostyle">
            <Title title="Créatrice de contenu" />
            <div className="md:flex gap-10 p-5 mt-8">
                <div className="md:flex flex-col  justify-between items-start">
                    <p className="py-8 text-justify">En plus de mon activité de développeur Full Stack, je crée du contenu pédagogique sur YouTube afin d’aider les développeurs à progresser, partager mes connaissances et documenter mon évolution dans ce domaine.
                    </p>
                    <a href="https://www.youtube.com/@algostyle5707" role="button" className="btn flex items-center justify-center gap-4 mb-6 mt-3">Découvrir ma chaîne YouTube <FaYoutube className="text-2xl" /></a>
                </div>
                <div>
                    <a href="https://www.youtube.com/@algostyle5707"><img src={ytbALGOSTYLE} alt="Ma chaîne YouTube" /></a>
                    <span className="font-bold">Créée le 18 juillet 2026 </span>
                </div>
            </div>

        </div>
    )
}

export default MyYoutube;