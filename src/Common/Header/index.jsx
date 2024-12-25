
import "./header.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SetNewLang } from "@/Redux";
import { useLang } from "@/Hooks";
import { Helper } from "@/Utility";


// eslint-disable-next-line react/prop-types
function Header({ schangebackground }) {

    const Lang = useLang()
    const HeaderRef = useRef();
    const [OpenNav, setOpenNav] = useState(false);



    // eslint-disable-next-line no-unused-vars
    const [ActiveLinke, setActiveLinke] = useState("Home");
    const Dispatch = useDispatch()
    useEffect(() => {
        const HandleScroll = () => {
            if (HeaderRef.current) {
                HeaderRef.current.style.background = window.scrollY
                    ? "#177f9a"
                    : "transparent";

                HeaderRef.current.style.color = window.scrollY ? "#f8f2EE" : "#f8f2EE"
            }
        };

        window.addEventListener("scroll", HandleScroll);

        return () => {
            window.removeEventListener("scroll", HandleScroll);
        };
    }, [schangebackground]);

    useEffect(() => {
        const HandleClikOutSide = (e) => {
            if (
                OpenNav &&
                !e.target.closest(".nav-links") &&
                !e.target.closest(".menu-icon")
            ) {
                setOpenNav(false);
            }
        };

        window.addEventListener("click", HandleClikOutSide);

        return () => {
            window.removeEventListener("click", HandleClikOutSide);
        };
    }, [OpenNav]);
    const Links = [
        { NameLink: Lang?.NAVBAR_LINKS?.[0] || "Home", to: "/" },
        { NameLink: Lang?.NAVBAR_LINKS?.[1] || "About", to: "#about" },
        { NameLink: Lang?.NAVBAR_LINKS?.[2] || "Services", to: "#services" },
        { NameLink: Lang?.NAVBAR_LINKS?.[3] || "Contact", to: "#contact" },
    ];
    function HandleActiveLinke(link) {
        setActiveLinke(link);
    }
    function Toggle() {
        setOpenNav((prev) => !prev);
    }
    return (
        <header ref={HeaderRef} className="header ">

            <div className=" flex gap-x-[0.3rem] items-center ">
                <div className=" w-[50px] h-[50px] ">
                    <img src="/Img/logo2.jpg" className=" w-full object-cover   rounded-[50%]" alt="logo" />
                </div>

                {
                    Helper.Locals.map((lang) => {
                        return (
                            <div key={lang.Value} className=" Box-Lang flex justify-center  items-center
                            hover:scale-[1.05]
                            duration-300
                            "
                                onClick={() => Dispatch(SetNewLang(lang.Value))}
                            >
                                <p >{lang.Value}</p>
                            </div>
                        )
                    })
                }

            </div>

            <nav>
                <ul className={`nav-links ${OpenNav == true ? "show" : ""}`}>
                    {Links?.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.to}
                                    onClick={() => {
                                        HandleActiveLinke(link.NameLink);
                                    }}
                                    to={link.to}
                                    className={`nav-link ${OpenNav ? "show" : ""}`}
                                >
                                    {link.NameLink}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className="icon-links">
                    <div onClick={Toggle} className="menu-icon">
                        {[1, 2, 3].map((_, index) => (
                            <span
                                key={index}
                                className={`menu-bar ${OpenNav ? "active-menu" : ""}`}
                            ></span>
                        ))}
                    </div>
                </div>

            </nav>


        </header>
    );
}

export default Header;