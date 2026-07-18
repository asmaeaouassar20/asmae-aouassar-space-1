import { CircleChevronUp } from "lucide-react";
import { useEffect, useState } from "react"


const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect( ()=>{
        const handleScroll = () => {
            setVisible(window.scrollY > 300);            
        }

        window.addEventListener("scroll" , handleScroll);

        return () => {
            window.removeEventListener("scroll" , handleScroll);
        }
    } , []);

    const scrollToTop = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        });
    }

    return <button className={`fixed bottom-4 right-4 hover:cursor-pointer ${visible ? '' : 'hidden'}`} onClick={()=>scrollToTop()}>
        <CircleChevronUp size={40} />
    </button>
}

export default BackToTopButton;