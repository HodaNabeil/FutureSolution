import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";

import "./contact.css";
import { useLang } from "@/Hooks";
function Contact() {
    const Lang = useLang()
    return (
        <div className="contact-page ">


            <div className=" Bg-light">
                <div
                    className=" container relative
                    flex   flex-wrap-reverse   md:flex-nowrap justify-between items-center gap-[30px]
                    pt-[100px] 
                    "
                >
                    <div className=" w-[100%] md:w-[49%]">
                        <img
                            className=" object-cover rounded-[4px] w-[100%]  h-[100vh] "
                            src={`/Img/Img-contact.jpg`}
                            alt=""
                        />
                    </div>

                    <div
                        className="  w-[100%] md:w-[49%] relative   
                       Flex-Center      flex-col    mb-[30px]"
                    >
                        <h2 className=" Second-Color  text-[22px] font-medium   capitalize font-2">
                            contact The{" "}
                            <span className=" active-color">{Lang?.PAGE_HOME?.lANDING?.SUB_TITLE} </span>
                        </h2>
                        <div className=" w-[300px] text-center Second-Color  my-[15px]">
                            <div>
                                <small className="Active-Color  capitalize font-medium mr-[6px]">
                                    Email
                                </small>
                                {Lang?.PAGE_HOME?.lANDING?.SUB_TITLE}@gmail.com
                            </div>
                            <div className=" my-[10px]">
                                <small className="Active-Color   capitalize font-medium mr-[6px]">
                                    {" "}
                                    Phone
                                </small>
                                985-456-1234
                            </div>

                            <div>
                                <small className="Active-Color  capitalize font-medium mr-[6px]">
                                    {" "}
                                    Address
                                </small>
                                55 ST, City EGYPT
                            </div>
                        </div>


                        <div className=" container-icons  flex justify-between items-center gap-[20px] my-[15px] ">
                            <div className="Flex-Center">

                                <FaFacebookF />
                            </div>
                            <div className="Flex-Center">

                                <LuInstagram />
                            </div>
                            <div className="Flex-Center">
                                <IoLogoTwitter />
                            </div>
                            <div className="Flex-Center">
                                <IoLogoWhatsapp />
                            </div>
                        </div>

                        <form action="" className=" container-form">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="/" id="name" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="/" id="email" />
                            </div>
                            <div>
                                <label htmlFor="messge">messge</label>
                                <textarea name="" id="messge"></textarea>
                            </div>
                            <button className=" Main-Btn  bg-white  my-[20px]">send</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Contact;