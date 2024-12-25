import { FaArrowRight } from "react-icons/fa";


import "./landin.css"

const Landing = () => {
    return (
        <div className="Main-Bg h-[100vh] w-full  pt-[150px]  "  >

            <div className="  flex  justify-between  items-center   container    ">

                <div className="  Main-Color " >



                    <h1
                        className=" font-bold  text-[1.9rem] capitalize   relative  "
                    >

                        <span className="Sub-Title-Hero text-[13px] ">Future Solutions</span>
                        Innovative
                        <br />
                        Solutions for Your
                        Digital Needs

                    </h1>

                    <p className=" mt-[1.3rem]" >
                        We bring your ideas to life<br />
                        with cutting-edge
                        technology
                    </p>

                    <button className="Main-Btn Second-Color flex items-center  my-[1.2rem] ">
                        <span >
                            Get Consultation
                        </span>
                        <FaArrowRight className="Icon-Main-Btn " />
                    </button>

                </div>

                <div className="  flex  gap-[1rem] relative top-[2.5rem]    ">
                    <div className=" w-[250px]  ">
                        <div className="Box-Landing  relative   ">
                            <img src="/public/Img/lang_1.png" alt="Hero-Landing"
                                className=" object-cover  max-w-[100%] h-[100%] "
                            />
                            <div className="Box-Content    absolute   bottom-[0]    Second-Color      ">

                                <h4 className=" font-bold  text-sm ">Mohmmed Ahmed</h4>
                                <h6 className="  text-sm  ">They care about the smallest details.</h6>

                            </div>
                        </div>
                        <div className="Container-Avatar">
                            <div className=" flex  justify-center gap-x-[2px] ">

                                <div className="Avatar Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt="" />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt="" />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt="" />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt="" />
                                </div>
                                <div className="Avatar Flex-Center">
                                    <img src="/public/Img/lang_1.png" className=" rounded-[50%] object-cover w-full h-[100%]" alt="" />
                                </div>


                            </div>
                            <p className=" my-[0.4rem] text-sm Flex-Center Second-Color  ">  Customer reviews</p>
                        </div>
                    </div>

                    <div className=" relative flex  flex-col gap-x-[1.1rem]  top-[-20px] ">
                        <div
                            className=" flex   flex-col Card-Light  relative top-[-1.3rem]  ">
                            <div className="  flex justify-end  ">
                                <div className="   w-[3.8rem] h-[3.8rem] Flex-Center   rounded-[50%] Bg-Dark ">
                                    <img src="/Img/icon-landing.png" alt="logo"
                                        className="object-cover  w-[2.6rem]  rounded-[50%]"

                                    />
                                </div>
                            </div>
                            <div className=" font-bold ">
                                <h2 className="Active-Color text-[1.4rem]">    547 +</h2>
                                <p className="Second-Color  text-[14px]">Number of clients</p>
                            </div>
                        </div>

                        <div className=" w-[250px]">
                            <div className="Box-Landing  relative bg-slate-500   ">
                                <img src="/public/Img/lang_1.png" alt="Hero-Landing"
                                    className=" object-cover  max-w-[100%] h-[100%] "
                                />
                                <div className="Box-Content   absolute     bottom-[0]  ">
                                    <h4 className=" font-bold  text-sm">Mohmmed Ahmed</h4>
                                    <h6 className="  text-sm  ">They care about the smallest details.</h6>

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
