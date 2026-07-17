import { Send } from "lucide-react";
import imgPerso from '../assets/asmae.jpeg';

const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center itels-center md:my-32 my-10">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mt-5 md:mt-0">
                    Bonjour, <br/>
                    Je suis
                    <span className="text-success"> Asmae</span> <span className="text-neutral"> Aouassar</span>

                </h1>
                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur fullstack.<br/>
                    Contactez-moi si vous avez besoin de moi
                </p>
                <a href="" className="btn btn-accent h-10 w-full  md:w-40">
                    <Send />    
                    Contactez-moi                
                </a>
            </div>

            <div className="md:ml-60">
                <img 
                    src={imgPerso}
                    alt="Ma photo personnelle" 
                    className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                    style={{
                        borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                    />
            </div>
        </div>
    )
}

export default Home;