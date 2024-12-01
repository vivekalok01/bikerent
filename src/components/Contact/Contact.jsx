import React from "react";

const Contact = () => {
    return (
        <div className="w-[95%] flex flex-col gap-7 py-5 m-auto ">
            <div className="flex flex-col justify-center items-center">
                <p className="text-[25px] font-semibold">Bike rental group</p>
                <h1 className="text-[30px] font-extrabold">Contact Us</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <form action="" className="lg:p-0 p-0">
                        <div className="relative mb-2">
                            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                                Full Name{" "}
                                <svg
                                    width="7"
                                    height="7"
                                    className="ml-1"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                        fill="#EF4444"
                                    />
                                </svg>
                            </label>
                            <input
                                type="text"
                                id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none "
                                placeholder="Name..."
                                required=""
                            />
                        </div>
                        <div className="relative mb-2">
                            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                                Email{" "}
                                <svg
                                    width="7"
                                    height="7"
                                    className="ml-1"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                        fill="#EF4444"
                                    />
                                </svg>
                            </label>
                            <input
                                type="text"
                                id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none "
                                placeholder="Email address..."
                                required=""
                            />
                        </div>
                        <div className="relative mb-2">
                            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                                Phone{" "}
                                <svg
                                    width="7"
                                    height="7"
                                    className="ml-1"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                        fill="#EF4444"
                                    />
                                </svg>
                            </label>
                            <input
                                type="number"
                                id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none "
                                placeholder="Phone Number..."
                                required=""
                            />
                        </div>
                        <div className="relative mb-3">
                            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                                Message{" "}
                                <svg
                                    width="7"
                                    height="7"
                                    className="ml-1"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                        fill="#EF4444"
                                    />
                                </svg>
                            </label>
                            <textarea
                                type="number"
                                id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none "
                                placeholder="Message..."
                                required=""
                            />
                        </div>


                        <button className="w-52 h-12 shadow-sm rounded-md bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="flex flex-col justify-center gap-3 ">
                    <h1 className="text-[40px] font-bold">Need additonal information</h1>
                    <p className="text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nisi saepe minima culpa omnis consequatur est asperiores rem pariatur molestias delectus blanditiis dicta necessitatibus?</p>
                    <h1 className="text-[20px] font-bold">example@gmail.com</h1>
                    <h1 className="text-[20px] font-bold">Delhi, India</h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;
