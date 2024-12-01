import { useState } from "react";


const Form = ({ setBookingForm, getBikeDetails }) => {
    const [ getMessage, setMessage ] = useState(false);
    function getformvalue(e) {
        e.preventDefault();

        let val = e.target[ 0 ].value;
        console.log(val);
    }

    return (
        <div className="bg-yellow-100 rounded-lg absolute  top-0 w-[90%] left-[5%]">
            <h2
                className="text-[30px] relative top-2 left-5 cursor-pointer"
                onClick={() => setBookingForm(!getformvalue)}
            >x
            </h2>

            {getMessage && (
                <h3 className="bg-green-300 flex justify-center w-[60%] m-auto text-[20px] rounded-md p-2">
                    Check your email to confirm an order
                </h3>
            )}

            <div className="w-[95%]  m-auto mb-[50px] flex flex-col gap-4 rounded-md ">
                <form action="" onSubmit={getformvalue}>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 ">
                        <div className=" py-8">
                            <div className=" mb-9 p-[30px] ">
                                <img
                                    src={getBikeDetails.url}
                                    className="w-[60%] h-[60%] m-auto"
                                    alt=""
                                />
                            </div>

                            <div className="w-[70%] sm:w-[60%] lg:w-[50%] m-auto">
                                <div className="flex justify-between">
                                    <h1 className="text-[18px] font-bold">Company</h1>
                                    <h1 className="">{getBikeDetails.company}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-[18px] font-bold">model</h1>
                                    <h1>{getBikeDetails.model}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-[18px] font-bold">Mileage</h1>
                                    <h1>{getBikeDetails.Mileage}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-[18px] font-bold">Displacement</h1>
                                    <h1>{getBikeDetails.Displacement}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-[18px] font-bold">FuelCapacity</h1>
                                    <h1>{getBikeDetails.FuelCapacity}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-[18px] font-bold">MaxPowe</h1>
                                    <h1>{getBikeDetails.MaxPowe}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-[18px] font-bold">type</h1>
                                    <h1>{getBikeDetails.type}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-[18px] font-bold">price</h1>
                                    <h1>{getBikeDetails.price}</h1>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center">
                            <h4 className="py-3 text-[18px] font-semibold">
                                Query Questions :-
                            </h4>
                            <div className=" flex gap-3  flex-col">
                                <div className=" flex flex-col gap-3">
                                    <div className="flex gap-3 flex-col md:flex-row">
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                Pick Up Location <b>*</b>
                                            </label>
                                            <select
                                                id="pickup"
                                                name="pickup"
                                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                required
                                            >
                                                <option value="india Gate">india Gate</option>
                                                <option value="Qutab Minar">Qutab Minar</option>
                                                <option value="Sarojini Nagar Market">
                                                    Sarojini Nagar Market
                                                </option>
                                                <option value="Gurudwara Bangla Sahib">
                                                    Gurudwara Bangla Sahib
                                                </option>
                                            </select>
                                        </span>
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                Drop-of Location <b>*</b>
                                            </label>
                                            <select
                                                id="pickup"
                                                name="pickup"
                                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                required
                                            >
                                                <option value="india Gate">india Gate</option>
                                                <option value="Qutab Minar">Qutab Minar</option>
                                                <option value="Sarojini Nagar Market">
                                                    Sarojini Nagar Market
                                                </option>
                                                <option value="Gurudwara Bangla Sahib">
                                                    Gurudwara Bangla Sahib
                                                </option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="flex gap-3 flex-col md:flex-row">
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                Pick Up Date <b>*</b>
                                            </label>
                                            <input
                                                className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type="date"
                                                required
                                                placeholder="Enter your first name"
                                            />
                                        </span>
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                Drop-of Date <b>*</b>
                                            </label>
                                            <input
                                                className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type="date"
                                                required
                                                placeholder="Enter your last name"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex gap-3 flex-col md:flex-row">
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                Pick Up Time <b>*</b>
                                            </label>
                                            <input
                                                className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type="time"
                                                required
                                                placeholder="Enter your first name"
                                            />
                                        </span>
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                Drop-of Time <b>*</b>
                                            </label>
                                            <input
                                                className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type="time"
                                                required
                                                placeholder="Enter your last name"
                                            />
                                        </span>
                                    </div>
                                    <h1 className="text-[18px] font-semibold">
                                        Personal Details :-
                                    </h1>
                                    <div className="flex gap-3 flex-col md:flex-row">
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                First Name <b>*</b>
                                            </label>
                                            <input
                                                className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type="text"
                                                required
                                                placeholder="Enter your first name"
                                            />
                                        </span>
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                Last Name <b>*</b>
                                            </label>
                                            <input
                                                className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type="text"
                                                required
                                                placeholder="Enter your last name"
                                            />
                                        </span>
                                    </div>
                                    <div className="flex gap-3 flex-col md:flex-row">
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                Phone Number <b>*</b>
                                            </label>
                                            <input
                                                className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type="tel"
                                                required
                                                placeholder="Enter your phone number"
                                            />
                                        </span>
                                        <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                            <label>
                                                Age <b>*</b>
                                            </label>
                                            <input
                                                className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type="number"
                                                required
                                                placeholder="18"
                                            />
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-3 flex-col md:flex-row">
                                    <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                        <label>
                                            Email <b>*</b>
                                        </label>
                                        <input
                                            className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                            type="email"
                                            required
                                            placeholder="Enter your email address"
                                        />
                                    </span>
                                    <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                        <label>
                                            Address <b>*</b>
                                        </label>
                                        <input
                                            className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                            type="text"
                                            required
                                            placeholder="Enter your street address"
                                        />
                                    </span>
                                </div>

                                <div className="flex gap-3 flex-col md:flex-row">
                                    <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                        <label>
                                            City <b>*</b>
                                        </label>
                                        <input
                                            className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                            type="text"
                                            placeholder="Enter your city"
                                            required
                                        />
                                    </span>
                                    <span className="flex flex-col w-full max-w-sm min-w-[200px]">
                                        <label>
                                            Zip Code <b>*</b>
                                        </label>
                                        <input
                                            className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                            type="text"
                                            placeholder="Enter your zip code"
                                            required
                                        />
                                    </span>
                                </div>

                                <div className=" flex flex-col w-full max-w-sm min-w-[100%]  ">
                                    <button
                                        type="submit"
                                        className="w-full bg-transparent placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow hover:bg-green-300"
                                        onClick={() => setMessage(!getMessage)}
                                    >
                                        Reserve Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
