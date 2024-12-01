import { useContext, useState } from "react";
import { BikeData } from "../../Store/BIkeStore";

const BikeModels = () => {
    const { getBikeModel } = useContext(BikeData);
    console.log(getBikeModel)
    const [getvalue, setvalue] = useState({
        id: 1,
        company: "Honda",
        model: "Honda Livo",
        Mileage: "60 kmpl",
        Displacement: "109.51 cc",
        FuelCapacity: "9 L",
        MaxPowe: "8.79 PS",
    });
    return (
        <div className=" max-w-[95%] mt-[30px] m-auto  md:mt-[90px] md:mb-[90px]  px-3 py-5">
            <div className="flex justify-center items-center flex-col w-[100%] gap-9 m-auto">
                <div className="flex justify-center flex-col items-center">
                    <h4 className="text-[38px] font-bold">Vehical Models</h4>
                    <h1 className="text-[22px] font-semibold">Our Rental Bikes</h1>
                    <p className="text-[17px] text-center ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
                        ipsum temporibus repellat excepturi exercitationem rem reiciendis,
                        cumque eligendi nesciunt sed?
                    </p>
                </div>
                <div className=" flex flex-col justify-between xl:flex-row w-[100%] pb-4">
                    <div className=" flex justify-center flex-col w-[100%] xl:w-[22%] pb-2">
                        <div className=" flex justify-center mb-[30px] ">
                            {/* <h3 className="text-[23px] font-bold">Details</h3> */}
                        </div>
                        <div className="flex gap-3 flex-col ">
                            {getBikeModel.map((bike, i) => (
                                <div
                                    key={i}
                                    className="p-2 py-3.5 font-semibold text-[17px] border-[1px] border-gray-300 bg-[#e9e9e9] hover:bg-[#f5472d] cursor-pointer
                            "
                                    onClick={() => setvalue(bike)}
                                >
                                    {bike.company}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center  w-[100%] xl:w-[50%] ">
                        <img
                            className="object-contain min-h-[300px]  max-h-[300px] max-w-[420px] md:min-h-[400px]  md:max-h-[400px] md:max-w-[420px]"
                            src={`./images/bike_${getvalue.id}.png`}
                            alt=""
                        />
                    </div>
                    <div className="  flex justify-center flex-col rounded-lg w-[100%] gap-2 xl:w-[22%] ">
                        <div className=" flex justify-center mb-[30px]">
                            {/* <h3 className="text-[23px] font-bold">Details</h3> */}
                        </div>

                        <div className="flex justify-between p-2 border-[1px] border-gray-400">
                            <div>
                                <h3 className="text-[17px] font-bold">Brand</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">{getvalue.company}</h3>
                            </div>
                        </div>
                        <div className="flex justify-between p-2 border-[1px] border-gray-400">
                            <div className="">
                                <h3 className="text-[17px] font-bold">Model</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">{getvalue.model}</h3>
                            </div>
                        </div>
                        <div className="flex justify-between p-2 border-[1px] border-gray-400">
                            <div>
                                <h3 className="text-[17px] font-bold">Milage</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">{getvalue.Mileage}</h3>
                            </div>
                        </div>
                        <div className="flex justify-between p-2 border-[1px] border-gray-400">
                            <div>
                                <h3 className="text-[17px] font-bold">Fule Capacity</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">{getvalue.FuelCapacity}</h3>
                            </div>
                        </div>
                        <div className="flex justify-between p-2 border-[1px] border-gray-400">
                            <div>
                                <h3 className="text-[17px] font-bold">Displacement</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">{getvalue.Displacement}</h3>
                            </div>
                        </div>
                        <div className="flex justify-between p-2 border-[1px] border-gray-400">
                            <div>
                                <h3 className="text-[17px] font-bold">MaxPower</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">{getvalue.MaxPowe}</h3>
                            </div>
                        </div>
                    </div>

                  
                </div>
            </div>
        </div>
    );
};

export default BikeModels;
