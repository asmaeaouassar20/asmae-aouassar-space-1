import Title from "./Title";
import {motion} from "motion/react";

import imgHTML from '../assets/logos-techno/html.png';
import imgCSS from '../assets/logos-techno/css.png';
import imgJS from '../assets/logos-techno/js.png';
import imgREACT from '../assets/logos-techno/react.png';
import imgPHP from '../assets/logos-techno/php.png';
import imgTAILWIND from '../assets/logos-techno/tailwindcss.png';
import imgTYPE from '../assets/logos-techno/ts.png';
import imgJAVA from '../assets/logos-techno/java.png';
import imgANGULAR from '../assets/logos-techno/angular.png';


import chufes from '../assets/lieu-stage/chufes.png';
import enhancedtechnologies from '../assets/lieu-stage/enhancedtechnologies.png';
import mtwinsfes from '../assets/lieu-stage/mtwinsfes.png';




const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgPHP },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgJAVA },
    { id: 9, name: "Prisma", image: imgANGULAR },
];

const experiences = [
    {
        id: 1,        
        role: "Stagiaire Développeur Web FullStack",
        company: "MTWINS - Fès",
        period: "Fév 2026 - Mai 2026",        
        description: [
            "Mise en place d'une plateforme numérique d'intermédiation pour la location automobile "
        ],
        image: mtwinsfes,
    },
    {
        id: 2,
        role: "Stagiaire Développeur Web FullStack",
        company: "ENHANCED TECHNOLOGIES - Rabat",
        period: "juil. 2025 - août 2025",
        description: [
           "Conception et développement d'une plateforme collaborative pour l'e-gouvernement marocain."
        ],
        image: enhancedtechnologies,
    },
    {
        id: 3,
        role: "Stagiaire Analyse et Étude de Système d'Information",
        company: "Centre Hospitalier Universitaire Hassan II - Fès",
        period: "juil. 2024",
        description: [
            "Étude de satisfaction au Système d'Information Hospitalier  HOSIX chez les employés"
        ],
        image: chufes,
    },
];

const Experiences = () => {
    return (
        <div id="experiences">
            <Title title="Experiences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-12">
                {/* logos techno */}
                <div className="flex flex-wrap gap-4 justify-center items-center  mt-4 md:mt-0">
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className="flex justify-center items-center flex-col">
                                <div className="w-24 h-24 p-2 rounded-full  border-2 border-accent flex items-center justify-center">
                                    <motion.img
                                    animate={{ rotate:360}} transition={{duration:4, repeat:Infinity , ease: "linear"}}
                                        src={skill.image}
                                        alt={`logo de la techno ${skill.name}`}
                                        className="object-contain rounded-full h-[90%] w-[90%]"
                                    />
                                </div>
                                <span className="mt-2 text-sm">{skill.name}</span>
                            </div>
                        ))
                    }
                </div>

                    {/* expériences de stage */}
                <div className="md:ml-4 flex flex-col space-y-4">
                    {
                        experiences.map((exp) => (
                            <div key={exp.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                                <div className="flex items-center">
                                    <img   src={exp.image} alt={`logo de la socitété ${exp.company}`} className="object-cover h-10 w-10" />
                                    <div className="ml-4">
                                        <h1 className="text-xl text-accent font-bold">{exp.role} , {exp.company}</h1>
                                        <span className="text-sm">{exp.period}</span>
                                    </div>
                                </div>
                                <p className="mt-5">
                                    {exp.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experiences;