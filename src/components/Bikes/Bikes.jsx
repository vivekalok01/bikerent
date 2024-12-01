import React, { useContext, useState } from "react";
import { BikeData } from "../../Store/BIkeStore";
import Form from "./Form";

const Bikes = () => {
    const { getBikeModels, handleCategorys, handleSearcFun } = useContext(BikeData);
    const [getCategory, setCategory] = useState(false);
    const [getBookingForm, setBookingForm] = useState(false);
    const [getBikeDetails, setBikeDetails] = useState();
    function handelSearch(e) {
        e.preventDefault();
        const bike = e.target[0].value;
        handleSearcFun(bike);
        e.target[0].value = "";
    }
    function handelCategory(a) {
        handleCategorys(a);
    }
    function handlePricing(e){

    }

    return (
        <div className="relative mt-6">
            <div className="w-[95%] m-auto flex flex-col gap-6 ">
                <div className="flex justify-evenly gap-3 items-center">
                    <div className="hidden gap-4 lg:flex uppercase font-semibold text-[#3d3d3df8]">
                        <h2
                            onClick={() => handelCategory("All")}
                            className="bg-transparent border-[1px] border-black text-[16px] px-2 py-0 flex justify-center items-center hover:bg-red-200 cursor-pointer  active:bg-red-300"
                        >
                            All
                        </h2>
                        <h2
                            onClick={() => handelCategory("comfort")}
                            className="bg-transparent border-[1px] border-black text-[16px] px-5 py-2.5 hover:bg-red-200 cursor-pointer active:bg-red-300"
                        >
                            Comfort
                        </h2>
                        <h2
                            onClick={() => handelCategory("Sports")}
                            className="bg-transparent border-[1px] border-black text-[16px] px-5 py-2.5 hover:bg-red-200 cursor-pointer active:bg-red-300"
                        >
                            Sports
                        </h2>
                        <h2
                            onClick={() => handelCategory("Cruiser")}
                            className="bg-transparent border-[1px] border-black text-[16px] px-5 py-2.5 hover:bg-red-200 cursor-pointer active:bg-red-300"
                        >
                            Cruiser
                        </h2>
                        <h2
                            onClick={() => handelCategory("Scooters")}
                            className="bg-transparent border-[1px] border-black text-[16px] px-5 py-2.5 hover:bg-red-200 cursor-pointer active:bg-red-300"
                        >
                            Scooters
                        </h2>
                      <form action="" onSubmit={handlePricing}>
                        <select
                            className="bg-transparent border-[1px] border-black text-[16px] px-2 py-2.5 hover:bg-red-200 cursor-pointer active:bg-red-300"
                            id="cars"
                            name="cars"
                        >
                            <option value="volvo">Price</option>
                            <option value="saab">Low to high</option>
                            <option value="fiat">High to low</option>
                        </select>
                </form>
                    </div>
                    <div
                        className="block lg:hidden cursor-pointer p-[10px] uppercase font-semibold text-[#3d3d3df8] rounded-lg  relative"
                        onClick={() => setCategory(!getCategory)}
                    >
                        <h2>Category</h2>
                        {getCategory && (
                            <div className="flex  flex-col gap-1 bg-white absolute top-[100%] left-[-20%] w-[180px] border-[1px] rounded-md p-2 ">
                                <h2
                                    onClick={() => handelCategory("All")}
                                    className="bg-red-300 text-[15px] font-semibold px-3 py-1.5 hover:bg-red-500 cursor-pointer rounded-md active:bg-red-600"
                                >
                                    All
                                </h2>
                                <h2
                                    onClick={() => handelCategory("comfort")}
                                    className="bg-red-300 text-[15px] font-semibold px-3 py-1.5 hover:bg-red-500 cursor-pointer rounded-md active:bg-red-600 "
                                >
                                    Comfort
                                </h2>
                                <h2
                                    onClick={() => handelCategory("Sports")}
                                    className="bg-red-300 text-[15px] font-semibold px-3 py-1.5 hover:bg-red-500 cursor-pointer rounded-md active:bg-red-600"
                                >
                                    Sports
                                </h2>
                                <h2
                                    onClick={() => handelCategory("Cruiser")}
                                    className="bg-red-300 text-[15px] font-semibold px-3 py-1.5 hover:bg-red-500 cursor-pointer rounded-md active:bg-red-600"
                                >
                                    Cruiser
                                </h2>
                                <h2
                                    onClick={() => handelCategory("Scooters")}
                                    className="bg-red-300 text-[15px] font-semibold px-3 py-1.5 hover:bg-red-500 cursor-pointer rounded-md active:bg-red-600"
                                >
                                    Scooters
                                </h2>
                            </div>
                        )}
                    </div>
                    <form className="" onSubmit={handelSearch}>
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative w-[250px]">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>

                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-2 ps-10 bg-transparent border-[1px] border-black rounded-lg"
                                placeholder="Search Bike"
                            />
                        </div>
                    </form>
                </div>
                <div className="flex flex-wrap justify-center gap-10">
                    {getBikeModels.map((bike) => (
                        <div
                            className="border-[0.5px] max-w-[300px] py-3 bg-white border-gray-300 "
                            key={bike.id}
                        >
                            <div className="h-[70%] w-[100%] flex justify-center items-center ">
                                <img src={bike.url} alt="" className="h-[85%] w-[90%]" />
                            </div>
                            <div className="flex flex-col gap-1 p-1">
                                <h2 className="text-[16px] flex justify-between">
                                    Company <span className=" ml-2">{bike.company}</span>
                                </h2>
                                <h2 className="text-[16px] flex justify-between">
                                    Model <span className=" ml-2">{bike.model}</span>
                                </h2>
                                <h2 className="text-[16px] flex justify-between">
                                    Price <span className=" ml-2">{bike.price}</span>
                                </h2>
                            </div>
                            <button
                                onClick={() => {
                                    setBookingForm(!getBookingForm), setBikeDetails(bike);
                                }}
                                className="bg-[#D8D2C2]  hover:bg-[#cfc4a4] w-[100%] py-3 font-semibold text-[17px]"
                            >
                                Rent Bike
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {getBookingForm && (
                <Form
                    setBookingForm={setBookingForm}
                    getBikeDetails={getBikeDetails}
                ></Form>
            )}
        </div>
    );
};

export default Bikes;
