import { useRef, useState } from "react";
import "./services.css";
import DesModal from "../../../Common/Modale";
import CardServies from "./Card";



const OurServices = () => {
    const [ModalData, setModalData] = useState({
        isOpen: false,
        img: "",
        description: "",
    });

    const ModleRef = useRef()


    return (
        <div className="  ">
            <div className="relative ">
                <div
                    className="flex justify-between items-center Card-Light Shadow-Lg 
         
                absolute  left-[50%]  w-[80%] m-auto translate-x-[-50%] top-[-50px] "
                >
                    {window.Config?.ServicesData && window.Config?.ServicesData?.map((item, index) => (
                        <div key={index} className="flex  flex-col  gap-[0.3rem] md:flex-row items-center    p-[0.3rem]   sm:px-[0.2rem] sm:py-[1rem]   sm:gap-[0.5rem]">
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
                        window.Config?.ServiceDetails && window.Config?.ServiceDetails.map((item, index) => {


                            // console.log({})
                            return (<CardServies key={index} item={item} />)


                        })
                    }


                </div>
            </div>


        </div>
    );
};

export default OurServices;
