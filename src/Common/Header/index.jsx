
import "./header.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetNewLang } from "@/Redux";
import { useLang } from "@/Hooks";
import { Helper } from "@/Utility";
import OurServices from "@/Components/Home/OurServices";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Header({ schangebackground }) {

    const Lang = useLang()
    const HeaderRef = useRef();
    const [OpenNav, setOpenNav] = useState(false);
    const { Lang: CurrentLang, Rtl } = useSelector(state => state.Helper)


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
                !e.target.closest(".Nav-Links") &&
                !e.target.closest(".Menu-Icon")
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
        { NameLink: Lang?.NAVBAR_LINKS?.[1] || "Our Services", to: <OurServices /> },
        { NameLink: Lang?.NAVBAR_LINKS?.[2] || "About", to: "#about" },
        { NameLink: Lang?.NAVBAR_LINKS?.[3] || "Contact", to: "#contact" },
    ];

    function Toggle() {
        setOpenNav((prev) => !prev);
    }
    return (
        <header ref={HeaderRef} className="Header">
            <div className=" flex gap-x-[0.3rem] items-center ">
                <div className=" w-[50px] h-[50px] ">
                    <img src="/Img/icons/96.png" className=" w-full object-cover   rounded-[50%]" alt="logo" />
                </div>

                {
                    Helper.Locals.map((lang) => {
                        if (lang.Value == CurrentLang) return null
                        return (
                            <div
                                onClick={() => Dispatch(SetNewLang(lang.Value))}
                                key={lang.Value} className={`
                            Box-Lang
                            hover:scale-[1.05]
                            duration-300
                            Shadow-Lg
                            cursor-pointer
                                `}
                                // ==============================Eng Sabry 
                                style={{
                                    background: `url('/Img/Lang/${lang.Value}.svg') no-repeat`,
                                    backgroundSize: "cover",
                                    objectFit: "cover"

                                }}

                            />
                        )
                    })
                }

            </div>

            <nav>
                <ul className={`Nav-Links ${OpenNav == true ? "Show" : ""}`}
                    dir={Rtl ? "rtl" : 'ltr'}
                >
                    {Links?.map((link, index) => {
                        const DirClass = Rtl ? "nav-link-Rtl" : " "
                        return (
                            <li key={index}

                            >
                                <Link to={link.to}

                                    className={`nav-link ${DirClass} ${OpenNav ? "Show" : ""}`}
                                >
                                    {link.NameLink}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="Icon-Links ">
                    <div onClick={Toggle} className="Menu-Icon">
                        {[1, 2, 3].map((_, index) => (
                            <span
                                key={index}
                                className={`Menu-Bar ${OpenNav ? "Active-Menu" : ""}`}
                            ></span>
                        ))}
                    </div>
                </div>

            </nav>


        </header>
    );
}

export default Header;