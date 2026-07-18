
import defaultImg from '../../assets/default.png';
import toolTalk from '../../assets/projets/toolTalk.png';
import stageTrack from '../../assets/projets/stageTrack.png';
import type { ProjetInterface } from '../../utilities/ProjetInterface';
import Title from '../Title';
import ProjetCard from './ProjetCard';

const projects : ProjetInterface[] = [
  {
    id: 1,
    title: "stageTrack : Application Web pour la gestion des rapports de stage",
    description:
      "Application web pour simplifier et centraliser la gestion des rapports de stage des étudiants de l'ENSA de Fès. Son objectif est de faciliter le dépôt, la validation, le suivi et l'archivage des rapports de stage, tout en améliorant la communication entre les étudiants, les enseignants et l'administration.",
    image: stageTrack,
    technologies: ["Spring Boot", "Angular", "Spring Security", "Bootstrap" , "MySQL"],
    github: "https://github.com/votre-compte/task-manager",
  },
  {
    id: 2,
    title: "toolTalk",
    description:
      "Plateforme communautaire de retours d'expérience sur les outils IA. Postez vos tests, avis, propositions, conseils, découvertes, cas d'usage ...",
    image: toolTalk,
    technologies: ["php", "Laravel", "Tailwind CSS"],
    github: "https://github.com/asmaeaouassar20/ToolTalk",
  },
  {
    id: 3,
    title: "Portfolio Personnel",
    description:
      "Portfolio moderne présentant mes compétences, expériences et projets.",
    image: defaultImg,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/votre-compte/portfolio",  
  },
];

const Projets = () => {
    return (
        <div className='mt-32 mb-12' id="projets" >
            <Title title='Projets' />
            <div className="md:grid md:grid-cols-3 gap-6 items-stretch mt-8">
              {
                projects.map( (project , index)=> 
                    <ProjetCard key={index} projet={project} />
                )
              }
            </div>
        </div>
    )
}

export default Projets;