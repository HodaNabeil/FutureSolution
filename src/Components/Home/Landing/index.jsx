/* eslint-disable react/prop-types */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./landin.css";

const Landing = ({ Lang, Rtl }) => {
    const DirButtonIcon = Rtl ? " Icon-Main-Btn-Rtl " : " Icon-Main-Btn";
    const DirButton = Rtl ? " Main-Btn-Rtl " : " Main-Btn";
    // "Eng sabry"
    // const StyleWidthBoxTwo = Rtl ? " basis-[75%]   " : "  basis-[67%] "
    const HandleGoTo = (To) => {
        if (To?.startsWith("#")) {
            const Element = document.getElementById(To?.slice(1))
            if (Element) {
                return Element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
            return
        }
    }
    return (
        <div className="Main-Bg h-[100vh] w-full   relative">
            <div
                dir={Rtl ? "rtl" : "ltr"}
                className="         flex flex-col  pt-[2.5rem]   md:pt-0  md:flex-row  gap-[1.5rem] absolute   container  
               top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]  "
            >
                <div className="  Main-Color   flex  flex-col items-center      md:items-start     w-[100%] md:w-[45%]  lg:w-[55%] ">
                    <div className=" font-bold text-[l.1rem]  md:text-[1.3rem]  lg:text-[1.9rem] capitalize   relative  ">
                        <h1 className="Sub-Title-Hero  md:text-[1rem] text-[1.01rem] ">
                            {Lang?.PAGE_HOME?.lANDING?.SUB_TITLE}
                        </h1>
                        {Lang?.PAGE_HOME?.lANDING?.TOP_TITLE}
                        <br />
                        <span
                            className=" Bg-Active p-[4px] rounded-[2px]
                                inline-block
                        hover:translate-y-[10px]
                        duration-300
            
                         "
                        >
                            {Lang?.PAGE_HOME?.lANDING?.UNIQUE_KEY_TITLE}
                        </span>{" "}
                        {Lang?.PAGE_HOME?.lANDING?.PART_OF_TITLE}
                    </div>

                    <p className=" mt-[1.3rem]">
                        {Lang?.PAGE_HOME?.lANDING?.DES_LANDING}
                        <br />

                        {Lang?.PAGE_HOME?.lANDING?.SUB_DES_LANDING}
                    </p>

                    <button
                        type="button"
                        aria-label="button"
                        title={Lang?.PAGE_HOME?.lANDING?.TEXT_BUTTON}
                        className={`Main-Btn Second-Color w-fit  flex items-center my-[0.8rem]  md:my-[1rem] lg:my-[1.2rem] ${DirButton}`}
                        onClick={() => HandleGoTo("#Contact")}
                    >
                        <span>{Lang?.PAGE_HOME?.lANDING?.TEXT_BUTTON}</span>
                        {Rtl ? (
                            <FaArrowLeft className={`${DirButtonIcon} `} />
                        ) : (
                            <FaArrowRight className={`${DirButtonIcon}`} />
                        )}
                    </button>
                </div>

                <div className="  Right-Landing    w-[100%]  md:w-[55%] lg:w-[45%]    grid grid-cols-2   gap-[1rem] relative top-[2.5rem]    ">
                    <div className="  Col-1 relative ">
                        <div className="  Box-1  overflow-hidden  relative   top-[-2.8rem] md:top-[-1.8rem] Bg-Second Rounded-6    h-[75%]    ">
                            <img
                                src="/Img/lang_1.png"
                                alt="Hero-Landing"
                                className=" object-cover  w-[100%] h-[100%] "
                            />
                            <div
                                className=" Content-Box-1 text-center md:text-left  
                              absolute  Bg-light  p-[0.5rem] bottom-[0px] m-[0.6rem] 
                                 Second-Color   Rounded-6    "
                            >
                                <h4 className=" font-bold    text-[0.9rem]  ">
                                    {Lang?.PAGE_HOME?.lANDING?.CARD_1?.TITLE}{" "}
                                </h4>
                                <h6 className="  text-[0.7rem]  sm:text-[0.9rem] ">
                                    {Lang?.PAGE_HOME?.lANDING?.CARD_1?.DES}.
                                </h6>
                            </div>
                        </div>

                        <div className="   Box-2   absolute bottom-0 left-0 w-full    Bg-light  Rounded-6 px-[0.5rem] py-[0.7rem]">
                            <div className=" flex  justify-center gap-x-[2px] ">
                                <div className="Avatar  Flex-Center">
                                    <img
                                        src="/Img/lang_1.png"
                                        className=" rounded-[50%] object-cover w-full h-[100%]"
                                        alt=" Avatar"
                                    />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img
                                        src="/Img/lang_1.png"
                                        className=" rounded-[50%] object-cover w-full h-[100%]"
                                        alt=" Avatar"
                                    />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img
                                        src="/Img/lang_1.png"
                                        className=" rounded-[50%] object-cover w-full h-[100%]"
                                        alt=" Avatar"
                                    />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img
                                        src="/Img/lang_1.png"
                                        className=" rounded-[50%] object-cover w-full h-[100%]"
                                        alt="Avatar "
                                    />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img
                                        src="/Img/lang_1.png"
                                        className=" rounded-[50%] object-cover w-full h-[100%]"
                                        alt="Avatar "
                                    />
                                </div>
                            </div>
                            <p className="  text-sm Flex-Center Second-Color pt-[0.2rem]  ">
                                {" "}
                                {Lang?.CUSTOMER_REVIEWS}
                            </p>
                        </div>
                    </div>

                    <div className=" Col-2  relative flex justify-end  flex-col  ">
                        <div
                            className={`   Box-1 flex  absolute left-0  top-[-4.2rem] lg:top-[-5.2rem]    w-full  z-[3] flex-col  Card-Light `}
                        >
                            <div className="  flex justify-end  ">
                                <div className="w-[2.2rem] h-[2.2rem]   md:w-[2.5rem] md:h-[2.5rem]  lg:w-[3.8rem] lg:h-[3.8rem] Flex-Center   rounded-[50%] Bg-Dark ">
                                    <img
                                        src="/Img/icons/96.png"
                                        alt="logo"
                                        className="object-cover   w-[100%]  rounded-[50%]"
                                    />
                                </div>
                            </div>

                            <div className=" font-bold ">
                                <h2 className="Active-Color   text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]">
                                    {" "}
                                    547 +
                                </h2>
                                <p className="Second-Color   text-[14px]">
                                    {" "}
                                    {Lang?.PAGE_HOME?.lANDING?.NUMBER_CLIENT}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`   Box-2  sm:basis-[75%]    overflow-hidden   Bg-Second Rounded-6    relative `}
                        >
                            <img
                                src="/Img/client_2.jpg"
                                alt="Hero-Landing"
                                className=" object-cover  w-[100%] h-[100%] "
                            />
                            <div
                                className=" text-center md:text-left  
                              absolute  Bg-light  p-[0.5rem] bottom-[0px] m-[0.6rem] 
                                 Second-Color   Rounded-6    "
                            >
                                <h4 className=" font-bold  text-sm ">
                                    {Lang?.PAGE_HOME?.lANDING?.CARD_2?.TITLE}{" "}
                                </h4>
                                <h6 className=" text-[0.7rem]  sm:text-[0.9rem]  ">
                                    {Lang?.PAGE_HOME?.lANDING?.CARD_2?.DES}.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
