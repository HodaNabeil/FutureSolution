import { useLang } from "@/Hooks";

// eslint-disable-next-line react-hooks/rules-of-hooks
const Lang = useLang();

window.Config = {
  Contact: {
    Email: "",
    Phone: "201148371185",
    Addres: "",
  },
  Social: [
    {
      Name: "FaceBook",
      Url: "https://www.facebook.com/futuresolutionsdev",
      Img: "FaFacebookF",
    },
    {
      Name: "Whatsapp",
      Url: "https://wa.me/201148371185",
      Img: "FaWhatsapp",
    },
  ],
  ServicesData: [
    {
      icon: "serv-1.png",
      title: "Quality",
      img: "Modal-1.jpg",
      description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[0],
    },
    {
      icon: "serv-2.png",
      title: "Efficiency",
      img: "Modal-2.jpg",
      description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[1],
    },
    {
      icon: "serv-3.png",
      title: "Data Security",
      img: "Modal-3.jpg",
      description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[2],
    },
    {
      icon: "serv-4.png",
      title: "Customer Support",
      img: "Modal-4.jpg",
      description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[3],
    },
    {
      icon: "serv-5.png",
      title: "Web App Development",
      img: "serv-5.png",
      description: Lang?.PAGE_HOME?.SERVICES?.DATA_SER?.[4],
    },
  ],
  ServiceDetails: [
    {
      Img: "/Img/Serv/Imgser1.png",
      Title: "ِApplction Design",
      Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[0],
    },
    {
      Img: "/Img/Serv/Imgser2.png",
      Title: "Web Hosting",
      Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[1],
    },
    {
      Img: "/Img/Serv/Imgser3.png",
      Title: "Seo Optimization",
      Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[2],
    },
    {
      Img: "/Img/Serv/Imgser4.png",
      Title: "Data analysis",
      Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[3],
    },
    {
      Img: "/Img/Serv/Imgser5.png",
      Title: "Website programming  ",
      Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[4],
    },
    {
      Img: "/Img/Serv/Imgser6.png",
      Title: "Desktop Application",
      Des: Lang?.PAGE_HOME?.SERVICES?.DATA_SER_2[5],
    },
  ],
};
