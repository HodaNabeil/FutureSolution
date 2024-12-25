import { useRef, useState } from "react";
import "./services.css";
import DesModal from "../../../Common/Modale/Des-Modal";
import CardServies from "./Card";

const OurServices = () => {
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
            description:
                "The company’s technological efficiency and quality reflect its ability to deliver innovative and reliable products...",
        },
        {
            icon: "serv-2.png",
            title: "Efficiency",
            img: "Modal-2.jpg",
            description:
                "The efficiency of a technology company means providing innovative and high-quality solutions...",
        },
        {
            icon: "serv-3.png",
            title: "Data Security",
            img: "Modal-3.jpg",
            description:
                "The efficiency, quality, and security of data in a technology company form the basis of its success...",
        },
        {
            icon: "serv-4.png",
            title: "Customer Support",
            img: "Modal-4.jpg",
            description:
                "Efficiency, quality, data security, and customer support are the cornerstones of a successful technology company...",
        },
        {
            icon: "serv-5.png",
            title: "Web App Development",
            img: "serv-5.png",
            description:
                "Efficiency, quality, data security, customer support, and web app development are vital for a thriving technology company...",
        },
    ];


    const DataServices = [
        {
            Img: "/public/Img/Serv/Imgser1.png",
            Title: "ِApplction Design",
            Des: "We design high-quality, user-focused applications that blend creativity with advanced functionality, turning your ideas into intuitive, impactful solutions.",

        },
        {
            Img: "/public/Img/Serv/Imgser2.png",
            Title: "Web Hosting",
            Des: "We provide fast and secure web hosting services tailored to your business needs. Whether you're managing a small website or a large platform, we offer solutions.",

        },
        {
            Img: "/public/Img/Serv/Imgser3.png",
            Title: "Seo Optimization",
            Des: "Fast, secure web hosting with built -in SEO optimization to enhance visibility and drive traffic.",

        },
        {
            Img: "/public/Img/Serv/Imgser4.png",
            Title: "Data analysis",
            Des: "We help transform data into actionable insights that help improve decision making, identify opportunities, and enhance performance for sustainable growth and higher efficiency.",

        },
        {
            Img: "/public/Img/Serv/Imgser5.png",
            Title: "Website programming  ",
            Des: "We provide fast and secure web hosting services tailored to your business needs. Whether you're managing a small website or a large platform, we offer solutions.",

        },
        {
            Img: "/public/Img/Serv/Imgser6.png",
            Title: "Desktop Application",
            Des: "We provide a fast and secure environment to get tasks done efficiently, while ensuring data security and easy access without the need for the Internet. It can also be customized to meet the needs of the project, which enhances productivity and provides a superior user experience.",

        },
    ]




    return (
        <div className="container  overflow-hidden">
            <div className="flex justify-between items-center Card-Light Shadow-Lg mt-[-65px]">
                {services?.map((item, index) => (
                    <div key={index} className="flex items-center px-[0.2rem] py-[1rem] gap-[0.5rem]">
                        <div className="w-[60px] h-[60px]">
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
                            className="hover:Active-Color duration-150 transition-all cursor-pointer"
                        >
                            {item.title}
                        </h3>
                    </div>
                ))}
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

            <div className="pt-[5rem]  Flex-Center  font-bold text-[1.5rem] Active-Color capitalize ">
                Our Servies
            </div>


            <div className="Container-servies  grid   gap-[1rem] md:grid-cols-3  my-[2rem] overflow-hidden">

                {
                    DataServices.map((item, index) => {
                        return (<CardServies key={index} item={item} />)


                    })
                }


            </div>
        </div>
    );
};

export default OurServices;
