/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


import "./reviewslider.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
function ReviewSlider({
    Lang,
    Rtl
}) {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const reviewSlider = [
        {
            url: "/Img/client_1.jpg",
            name: Lang?.PAGE_HOME?.REVIEWSLIDER?.TITLE?.[0],
            des: Lang?.PAGE_HOME?.REVIEWSLIDER?.DESCRIPTION?.[0]
        },
        {
            url: "/Img/client_2.jpg",
            name: Lang?.PAGE_HOME?.REVIEWSLIDER?.TITLE?.[1],
            des: Lang?.PAGE_HOME?.REVIEWSLIDER?.DESCRIPTION?.[1]
        },
        {
            url: "/Img/client_3.jpg",
            name: Lang?.PAGE_HOME?.REVIEWSLIDER?.TITLE?.[2],
            des: Lang?.PAGE_HOME?.REVIEWSLIDER?.DESCRIPTION?.[2]
        },
    ];

    const nextReview = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === reviewSlider.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevReview = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex === 0 ? reviewSlider.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextReview();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Bg-light review-slider pt-[80px] "
            id={"Reviews"}
        >
            <div className=" container  bg-white py-[50px] "
                dir=
                {
                    Rtl ? "rtl" : "ltr"
                }>


                <h2 className=" Flex-Center font-bold   text-[1.1rem] md:text-xl lg:text-2xl Active-Color">{Lang?.CUSTOMER_REVIEWS}</h2>
                <div className=" w-[70%] m-auto relative Rounded-6 p-[1.2rem] mt-[80px]  Bg-Review-Slider ">
                    <div className=" Flex-Center m-auto">
                        <img
                            className=" w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] 
                             lg:w-[180px] lg:h-[180px] rounded-[50%] "
                            src={reviewSlider[currentReviewIndex].url}
                            alt={`Client ${currentReviewIndex + 1}`}
                        />
                    </div>
                    <h3 className=" Main-Color t my-[8px] font-bold  tracking-[1px]">{reviewSlider[currentReviewIndex].name}</h3>
                    <p className=" Second-Color  text-sm sm:text-[15px]  md:text-[16px] text-dark ">{reviewSlider[currentReviewIndex].des}</p>
                    <button
                        className="btn-slider left Flex-Center   "
                        onClick={prevReview}
                    >
                        <FaArrowLeft className=" icon-slider  fa-solid" />
                    </button>
                    <button
                        className="btn-slider rigth Flex-Center   "
                        onClick={nextReview}
                    >
                        <FaArrowRight className=" icon-slider    fa-solid" />
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ReviewSlider;