import { useMemo, useRef, useState } from "react";
import "./services.css";
import DesModal from "../../../Common/Modale";
import CardServies from "./Card";
import { useLang } from "@/Hooks";
import { useSelector } from "react-redux";



const OurServices = () => {

    const [ModalData, setModalData] = useState({
        isOpen: false,
        img: "",
        description: "",
    });
    const { Rtl } = useSelector(state => state.Helper)
    const ModleRef = useRef()
    const Lang = useLang()

    const Options = useMemo(() => {
        if (!window.Config?.ServicesData) return [];
        return window.Config?.ServicesData.map((Item) => ({
            ...Item,
            description: Lang?.PAGE_HOME?.SERVICES?.SERVICE_DESCRIPTION?.[Item.id],
            title: Lang?.PAGE_HOME?.SERVICES?.SERVICE_TITLE?.[Item.id]
        }))
    }, [Lang?.PAGE_HOME?.SERVICES?.SERVICE_DESCRIPTION, Lang?.PAGE_HOME?.SERVICES?.SERVICE_TITLE])
    console.log(Options)
    return (
        <div className="  ">
            <div className="relative "
                dir={Rtl ? "rtl" : 'ltr'}
            >
                <div
                    className="flex justify-between items-center Card-Light Shadow-Lg 
         
                absolute  left-[50%]  w-[80%] m-auto translate-x-[-50%] top-[-50px] "
                >
                    {Options.map((item, index) => (
                        <div key={index} className="flex  flex-col  gap-[0.3rem] md:flex-row items-center  p-[0.1rem]  sm:p-[0.3rem]   sm:px-[0.2rem] sm:py-[1rem]   sm:gap-[0.5rem]">
                            <div className=" w-[1.5rem] h-[1.5rem]   sm:h-[1.9rem]  sm:w-[1.9rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[3.8rem] lg:h-[3.8rem]">
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

            {
                ModalData.isOpen && (
                    <DesModal
                        des={ModalData.description}
                        img={ModalData.img}

                        ModleRef={ModleRef}
                        onClose={() => setModalData({ isOpen: false, img: "", description: "" })


                        }
                    />
                )
            }


            <div className=" container">
                <div className=" pt-[2rem] md:pt-[5rem]  Flex-Center  font-bold text-[1.5rem] Active-Color capitalize ">
                    {Lang?.PAGE_HOME?.SERVICES?.MAN_TITLE}
                </div>

                <div className="Container-servies  grid   gap-[1rem]  sm:grid-cols-2 md:grid-cols-3  my-[2rem] overflow-hidden">

                    {
                        window.Config?.ServiceDetails && window.Config?.ServiceDetails.map((item, index) => {


                            // console.log({})
                            return (<CardServies key={index} item={item} />)


                        })
                    }


                </div>
            </div>


        </div >
    );
};

export default OurServices;
