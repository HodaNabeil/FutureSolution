/* eslint-disable react/prop-types */




const CardServies = ({ item }) => {
    const { Img, Title, Description } = item
    return (
        <div className=" Box-servies
        Bg-light
        p-[0.9rem]
        Flex-Center
        flex-col
        Rounded-6
        hover:scale-[1.04]
        duration-300
        ">
            <div className="h-[30%] Flex-Center  mb-[1.3rem]" >
                <img src={Img}
                    className=" object-cover max-w-[100%] h-[100%] "
                    alt="" />
            </div>
            <div className=" Flex-Center flex-col  " >
                <h2 className="Active-Color mb-[1.5rem] capitalize">{Title}</h2>
                <p className=" Second-Color text-center ">
                    {
                        Description
                    }
                </p>
            </div>
        </div>
    );
}

export default CardServies;
