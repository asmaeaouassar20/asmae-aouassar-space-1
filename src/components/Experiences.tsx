import Title from "./Title";


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
        role: "Développeur Frontend",
        company: "Tech Solutions",
        period: "Jan 2024 - Présent",
        description: [
            "Développement d'interfaces modernes avec React et Tailwind CSS.",
            "Optimisation des performances et amélioration de l'expérience utilisateur.",
        ],
        image: chufes,
    },
    {
        id: 2,
        role: "Développeur Full Stack",
        company: "Digital Agency",
        period: "Juin 2023 - Déc 2023",
        description: [
            "Création d'APIs REST avec Node.js et Express.",
            "Développement d'applications web avec React et MongoDB.",
        ],
        image: enhancedtechnologies,
    },
    {
        id: 3,
        role: "Stagiaire Développeur Web",
        company: "Startup Innov",
        period: "Fév 2023 - Mai 2023",
        description: [
            "Participation au développement d'une plateforme de gestion.",
            "Correction de bugs et ajout de nouvelles fonctionnalités.",
        ],
        image: mtwinsfes,
    },
];

const Experiences = () => {
    return (
        <div id="experiences">
            <Title title="Experiences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className="flex justify-center items-center flex-col">
                                <div className="w-24 h-24 p-2 rounded-full  border-2 border-accent">
                                    <img
                                        src={skill.image}
                                        alt={`logo de la techno ${skill.name}`}
                                        className="object-cover rounded-full h-full w-full"
                                    />
                                </div>
                                <span className="mt-2 text-sm">{skill.name}</span>
                            </div>
                        ))
                    }
                </div>


                <div className="md:ml-4 flex flex-col space-y-4">
                    {
                        experiences.map((exp) => (
                            <div key={exp.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                                <div className="flex items-center">
                                    <img src={exp.image} alt={`logo de la socitété ${exp.company}`} className="object-cover h-10 w-10" />
                                    <div className="ml-4">
                                        <h1 className="text-xl text-accent font-bold">{exp.role} , {exp.company}</h1>
                                        <span className="text-sm">{exp.period}</span>
                                    </div>
                                </div>
                                <ul className="list-disc ml-16 mt-2">
                                    {
                                        exp.description.map((desc, index) => (
                                            <li key={index}>
                                                {desc}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experiences;