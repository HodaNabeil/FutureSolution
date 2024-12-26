
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";


function ScrollTopButton() {

    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScrollTop(true)
            } else {
                setScrollTop(false)
            }
        })
    }, []);

    const scroolUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div >
            {
                scrollTop &&
                <FaArrowUp onClick={() => scroolUp()} className=" Scroll-Top" />

            }
        </div>
    )
}

export default ScrollTopButton