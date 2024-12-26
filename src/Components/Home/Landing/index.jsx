import { FaArrowRight } from "react-icons/fa";


import "./landin.css"
import { Lang } from "@/Lang/Lang";

const Landing = () => {
    return (
        <div className="Main-Bg h-[100vh] w-full   relative"  >

            <div className="  flex flex-col  pt-[2.5rem]   md:pt-0  md:flex-row  md:justify-between  absolute items-center   container  
               top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]  ">

                <div className="  Main-Color " >
                    <h1
                        className=" font-bold text-[l.1rem]  md:text-[1.3rem]  lg:text-[1.9rem] capitalize   relative  "
                    >
                        <span className="Sub-Title-Hero  md:text-[0.5rem] text-[1.01rem] ">{Lang?.PAGE_HOME?.lANDING?.SUB_TITLE}</span>
                        {Lang?.PAGE_HOME?.lANDING?.TOP_TITLE}
                        <br />
                        <span className=" Bg-Active p-[4px] rounded-[2px]
                                inline-block
                        hover:translate-y-[10px]
                        duration-300
            
                         ">
                            {Lang?.PAGE_HOME?.lANDING?.UNIQUE_KEY_TITLE}</span>  {Lang?.PAGE_HOME?.lANDING?.PART_OF_TITLE}
                    </h1>

                    <p className=" mt-[1.3rem]" >

                        {Lang?.PAGE_HOME?.lANDING?.DES_LANDING}<br />

                        {Lang?.PAGE_HOME?.lANDING?.SUB_DES_LANDING}

                    </p>

                    <button className="Main-Btn Second-Color flex items-center my-[0.8rem]  md:my-[1rem] lg:my-[1.2rem] ">
                        <span >
                            {Lang?.PAGE_HOME?.lANDING?.TEXT_BUTTON}
                        </span>
                        <FaArrowRight className="Icon-Main-Btn " />
                    </button>

                </div>

                <div className="  flex  gap-[1rem] relative top-[2.5rem]    ">
                    <div className=" sm:w-[10rem]  sm:h-[13rem]  md:w-[12rem] lg:w-[15.6rem]  ">
                        <div className="Box-Landing  relative   ">
                            <img src="/public/Img/lang_1.png" alt="Hero-Landing"
                                className=" object-cover  max-w-[100%] h-[100%] "
                            />
                            <div className="Box-Content text-center md:text-left    absolute   bottom-[0]    Second-Color      ">

                                <h4 className=" font-bold  text-sm ">{Lang?.PAGE_HOME?.lANDING?.CARD_1?.TITLE} </h4>
                                <h6 className="  text-sm  ">{Lang?.PAGE_HOME?.lANDING?.CARD_1?.DES}.</h6>

                            </div>
                        </div>
                        <div className="Container-Avatar">
                            <div className=" flex  justify-center gap-x-[2px] ">

                                <div className="Avatar  Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt=" Avatar" />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt=" Avatar" />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt=" Avatar" />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt="Avatar " />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt="Avatar " />
                                </div>


                            </div>
                            <p className=" my-[0.4rem] text-sm Flex-Center Second-Color  "> {Lang?.CUSTOMER_REVIEWS}</p>
                        </div>
                    </div>

                    <div className=" relative flex  flex-col gap-x-[1rem] md:gap-x-[1.1rem]  top-[-20px] ">
                        <div
                            className=" flex   flex-col Card-Light  relative top-[-1.3rem]  ">
                            <div className="  flex justify-end  ">
                                <div className="w-[2.2rem] h-[2.2rem]   md:w-[2.5rem] md:h-[2.5rem]  lg:w-[3.8rem] lg:h-[3.8rem] Flex-Center   rounded-[50%] Bg-Dark ">
                                    <img src="/Img/icon-landing.png" alt="logo"
                                        className="object-cover   w-[80%]  rounded-[50%]"

                                    />
                                </div>
                            </div>
                            <div className=" font-bold ">
                                <h2 className="Active-Color text-[1.2rem] md:text-[1.4rem]">    547 +</h2>
                                <p className="Second-Color  text-[14px]"> {Lang?.PAGE_HOME?.lANDING?.NUMBER_CLIENT}</p>
                            </div>
                        </div>

                        <div className=" sm:w-[10rem]  sm:h-[13rem]  md:w-[12rem] lg:w-[15.6rem] ">
                            <div className="Box-Landing  relative   ">
                                <img src="/public/Img/Landing-img-2.png" alt="Hero-Landing"
                                    className=" object-cover  max-w-[100%] h-[100%] "
                                />
                                <div className="Box-Content text-center md:text-left     absolute   bottom-[0]    Second-Color      ">

                                    <h4 className=" font-bold  text-sm ">{Lang?.PAGE_HOME?.lANDING?.CARD_1?.TITLE} </h4>
                                    <h6 className="  text-sm  ">{Lang?.PAGE_HOME?.lANDING?.CARD_1?.DES}.</h6>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
