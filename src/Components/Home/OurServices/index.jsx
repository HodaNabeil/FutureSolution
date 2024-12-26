import { useRef, useState } from "react";
import "./services.css";
import DesModal from "../../../Common/Modale/Des-Modal";
import CardServies from "./Card";

import { useLang } from "@/Hooks";

const OurServices = () => {
    const Lang = useLang()
    const [ModalData, setModalData] = useState({
        isOpen: false,
        img: "",
        description: "",
    });

    const ModleRef = useRef()

    const services = [
        {
            icon: "serv-1.png",
            title: "Quality",
            img: "Modal-1.jpg",
            description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[0]
        },
        {
            icon: "serv-2.png",
            title: "Efficiency",
            img: "Modal-2.jpg",
            description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[1]
        },
        {
            icon: "serv-3.png",
            title: "Data Security",
            img: "Modal-3.jpg",
            description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[2]
        },
        {
            icon: "serv-4.png",
            title: "Customer Support",
            img: "Modal-4.jpg",
            description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[3]
        },
        {
            icon: "serv-5.png",
            title: "Web App Development",
            img: "serv-5.png",
            description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[4]
        },
    ];


    const DataServices = [
        {
            Img: "/public/Img/Serv/Imgser1.png",
            Title: "ِApplction Design",
            Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[0]

        },
        {
            Img: "/public/Img/Serv/Imgser2.png",
            Title: "Web Hosting",
            Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[1]

        },
        {
            Img: "/public/Img/Serv/Imgser3.png",
            Title: "Seo Optimization",
            Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[2]

        },
        {
            Img: "/public/Img/Serv/Imgser4.png",
            Title: "Data analysis",
            Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[3]

        },
        {
            Img: "/public/Img/Serv/Imgser5.png",
            Title: "Website programming  ",
            Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[4]

        },
        {
            Img: "/public/Img/Serv/Imgser6.png",
            Title: "Desktop Application",
            Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[5]

        },
    ]




    return (
        <div className="  ">
            <div className="relative ">
                <div className="flex justify-between items-center Card-Light Shadow-Lg absolute  left-[50%]  w-[80%] m-auto translate-x-[-50%] top-[-50px] ">
                    {services?.map((item, index) => (
                        <div key={index} className="flex  flex-col md:flex-row items-center    p-[0.3rem]   sm:px-[0.2rem] sm:py-[1rem]   sm:gap-[0.5rem]">
                            <div className=" w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
                                <img
                                    src={`/Img/Serv/${item.icon}`}
                                    className="object-cover w-full h-full"
                                    alt={`Service-${item.title}`}
                                />
                            </div>
                            <h3
                                onClick={() =>
                                    setModalData({
                                        isOpen: true,
                                        img: item.img,
                                        description: item.description,
                                    })
                                }
                                className="hover:Active-Color duration-150 transition-all cursor-pointer   text-center md:text-left text-[10px] sm:text-[14px] sm:text-sm lg:text-[1rem]"
                            >
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Render the Modal if isOpen is true */}
            {ModalData.isOpen && (
                <DesModal
                    des={ModalData.description}
                    img={ModalData.img}

                    ModleRef={ModleRef}
                    onClose={() => setModalData({ isOpen: false, img: "", description: "" })


                    }
                />
            )}


            <div className=" container">
                <div className="pt-[5rem]  Flex-Center  font-bold text-[1.5rem] Active-Color capitalize ">
                    Our Servies
                </div>

                <div className="Container-servies  grid   gap-[1rem]  sm:grid-cols-2 md:grid-cols-3  my-[2rem] overflow-hidden">

                    {
                        DataServices.map((item, index) => {
                            return (<CardServies key={index} item={item} />)


                        })
                    }


                </div>
            </div>


        </div>
    );
};

export default OurServices;
