import { Send } from "lucide-react";
import imgPerso from '../assets/asmae.jpeg';

import { motion } from "motion/react";

const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="accueil">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mt-5 md:mt-0">
                    Bonjour, <br />
                    Je suis
                    <span className="text-success"> Asmae</span> <span className="text-neutral"> Aouassar</span>

                </h1>
                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur fullstack.<br />
                    Contactez-moi si vous avez besoin de moi
                </p>
                <a href="https://www.linkedin.com/in/asmae-aouassar-2738b624b/" className="btn btn-accent h-10 w-full  md:w-40">
                    <Send />
                    Contactez-moi
                </a>
            </div>

            <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    duration : 2
                }} 
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="md:ml-60">
                <img
                    src={imgPerso}
                    alt="Ma photo personnelle"
                    className="w-80 h-80 object-cover border-8 border-accent shadow-xl"
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                />
            </motion.div>
        </div>
    )
}

export default Home;