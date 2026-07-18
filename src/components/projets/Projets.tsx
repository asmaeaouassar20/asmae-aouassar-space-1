
import defaultImg from '../../assets/default.png';
import type { ProjetInterface } from '../../utilities/ProjetInterface';
import Title from '../Title';
import ProjetCard from './ProjetCard';

const projects : ProjetInterface[] = [
  {
    id: 1,
    title: "Application de Gestion des Tâches",
    description:
      "Application web permettant de créer, modifier et supprimer des tâches avec authentification.",
    image: defaultImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/votre-compte/task-manager",
  },
  {
    id: 2,
    title: "Site E-commerce",
    description:
      "Plateforme de vente en ligne avec panier, paiement et tableau de bord administrateur.",
    image: defaultImg,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/votre-compte/ecommerce",
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
        <div className='my-20' id="projets">
            <Title title='Projets' />
            <div>
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