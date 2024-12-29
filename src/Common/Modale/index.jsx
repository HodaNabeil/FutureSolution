/* eslint-disable react/prop-types */

import { CgClose } from "react-icons/cg";

// eslint-disable-next-line no-unused-vars
function DesModal({ des, img, onClose, ModleRef }) {
    return (
        <div ref={ModleRef} className="Modal">
            <div className=" Overlay-Modal "> </div>

            <div
                className="Content-Modal 
            flex
            justify-center
            items-center 
            flex-col
              w-[90%] m-auto     sm:w-[50%] 
             h-[60vh]  sm:h-[50vh]
            z-10  
            fixed
            top-[50%] left-[50%]  
            translate-x-[-50%] translate-y-[-50%]
            Bg-light
               p-[0.5rem]   sm:p-[0.8rem]      md:p-[1.5rem]          lg:p-[2rem]
            Rounded-6
            "
                style={{
                    boxShadow: "0px 0px 16px 4px #05050587",
                }}
            >
                <div className="   w-[80%]  max-h-full   p-[0.5rem]  overflow-hidden    Flex-Center ">
                    <img
                        className=" max-w-[100%]   max-h-full Rounded-6 object-cover"
                        src={`/Img/Serv/${img}`}
                        alt={des}
                    />
                </div>
                <div className="mt-[1rem]">
                    <p className=" font-bold  text-[0.9rem]  sm:text-[1rem]  Second-Color capitalize leading-[1.7]">
                        {des}
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className=" Flex-Center 
                    Main-Color
                    absolute right-[-0.3rem] 
                    top-[-0.5rem]
                               w-[1.5rem] h-[1.5rem]    sm:h-[2rem] sm:w-[2rem]     md:w-[2.5rem] md:h-[2.5rem]
                    
                    rounded-[50%] Bg-Active
                    hover:bg-white
                    hover:text-[#27cfdb]
                    duration-200
                    transition-all
                
                    "
                >
                    <CgClose className="  text-[1rem] md:text-[1.5rem]" />
                </button>
            </div>
        </div>
    );
}

export default DesModal;
