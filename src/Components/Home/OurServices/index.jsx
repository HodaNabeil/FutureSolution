/* eslint-disable react/prop-types */
import { useMemo, useRef, useState } from "react";
import "./services.css";
import DesModal from "../../../Common/Modale";
import CardServies from "./Card";




const OurServices = ({
    Lang,
    Rtl
}) => {

    const [ModalData, setModalData] = useState({
        isOpen: false,
        img: "",
        Description: "",
    });
    const ModleRef = useRef()


    const Options = useMemo(() => {
        if (!window.Config?.ServicesData) return [];
        return window.Config?.ServicesData.map((Item) => ({
            ...Item,
            Description: Lang?.PAGE_HOME?.SERVICES?.SERVICE_DESCRIPTION?.[Item.id],
            title: Lang?.PAGE_HOME?.SERVICES?.SERVICE_TITLE?.[Item.id]
        }))
    }, [Lang?.PAGE_HOME?.SERVICES?.SERVICE_DESCRIPTION, Lang?.PAGE_HOME?.SERVICES?.SERVICE_TITLE])


    const SubOptions = useMemo(() => {
        if (!window.Config?.ServiceDetails) return [];
        return window.Config?.ServiceDetails.map((Item) => ({
            ...Item,
            Description: Lang?.PAGE_HOME?.SERVICES?.SUB_SERVICES?.DESCRIPTION?.[Item.id],

            Title: Lang?.PAGE_HOME?.SERVICES?.SUB_SERVICES?.TITLE?.[Item.id]
        }))
    }, [Lang?.PAGE_HOME?.SERVICES?.SUB_SERVICES?.DESCRIPTION, Lang?.PAGE_HOME?.SERVICES?.SUB_SERVICES?.TITLE])
    return (
        <div className="  "
            id={"Services"}
        >
            <div className="relative "
                dir={Rtl ? "rtl" : 'ltr'}
            >
                <div
                    className="flex justify-between items-center Card-Light Shadow-Lg 
         
                absolute  left-[50%]  w-[80%] m-auto translate-x-[-50%] top-[-50px] "
                >
                    {Options.map((item, index) => (
                        <div key={index} className="flex  flex-col  gap-[0.3rem] md:flex-row items-center  
                        px-[0.1rem] py-0  sm:p-[0.3rem]    sm:gap-[0.5rem]">
                            <div
                                className=" w-[1.5rem] h-[1.5rem]   sm:h-[1.9rem]  
                             sm:w-[1.9rem] md:w-[2.5rem] md:h-[2.5rem]
                              lg:w-[3.8rem] lg:h-[3.8rem]">
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
                                        Description: item.Description,
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

            {
                ModalData.isOpen && (
                    <DesModal
                        des={ModalData.Description}
                        img={ModalData.img}

                        ModleRef={ModleRef}
                        onClose={() => setModalData({ isOpen: false, img: "", Description: "" })


                        }
                    />
                )
            }


            <div className=" container">
                <div className="  pt-[4.5rem]   sm:pt-[4.5rem] md:pt-[4rem]  lg:pt-[5rem] Flex-Center  font-bold text-[1.5rem] Active-Color capitalize ">
                    {Lang?.PAGE_HOME?.SERVICES?.MAN_TITLE}
                </div>

                <div className="Container-servies  grid   gap-[1rem]  sm:grid-cols-2 md:grid-cols-3  my-[2rem] overflow-hidden">

                    {
                        SubOptions?.map((item, index) => {


                            return (<CardServies key={index} item={item} />)


                        })
                    }


                </div>
            </div>


        </div >
    );
};

export default OurServices;
