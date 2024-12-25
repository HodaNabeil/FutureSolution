import { NavLink } from "react-router-dom";

import "./header.css";
import { useEffect, useRef, useState } from "react";


// eslint-disable-next-line react/prop-types
function Header({ schangebackground }) {


    const HeaderRef = useRef();
    const [OpenNav, setOpenNav] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [ActiveLinke, setActiveLinke] = useState("Home");

    useEffect(() => {
        const HandleScroll = () => {
            if (HeaderRef.current) {
                HeaderRef.current.style.background = window.scrollY
                    ? "#D39C80"
                    : schangebackground;

                HeaderRef.current.style.color = window.scrollY ? "#f8f2EE" : "#353431"
            }
        };

        window.addEventListener("scroll", HandleScroll);

        return () => {
            window.removeEventListener("scroll", HandleScroll);
        };
    }, [schangebackground]);

    useEffect(() => {
        const handleClikOutSide = (e) => {
            if (
                OpenNav &&
                !e.target.closest(".nav-links") &&
                !e.target.closest(".menu-icon")
            ) {
                setOpenNav(false);
            }
        };

        window.addEventListener("click", handleClikOutSide);

        return () => {
            window.removeEventListener("click", handleClikOutSide);
        };
    }, [OpenNav]);
    const Links = [
        { NameLink: "Home", to: "/s" },
        { NameLink: "Our Services", to: "/ss" },
        { NameLink: "About", to: "/s" },
        { NameLink: "Contact", to: "/ss" },

    ];

    function HandleActiveLinke(link) {
        setActiveLinke(link);
    }

    return (
        <header ref={HeaderRef} className="header ">

            <div className=" flex gap-x-[0.3rem] items-center ">
                <div className=" w-[50px] h-[50px] ">
                    <img src="/Img/logo2.jpg" className=" w-full object-cover   rounded-[50%]" alt="logo" />
                </div>
                <div className=" Box-Lang flex justify-center  items-center">
                    <p >En</p>
                </div>

            </div>



            <nav>
                <ul className={`nav-links ${OpenNav === true ? "show" : ""}`}>
                    {Links.map((link, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    onClick={() => {
                                        HandleActiveLinke(link.NameLink);
                                    }}
                                    to={link.to}
                                    className={`nav-link ${OpenNav ? "show" : ""}`}
                                >
                                    {link.NameLink}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>

        </header>
    );
}

export default Header;