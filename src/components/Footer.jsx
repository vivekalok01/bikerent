import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="w-[95%] min-h-[450px] m-auto bg-[#e7e5e59a] rounded-lg flex justify-center items-center mt-5">
            <div className="flex flex-col lg:flex-row gap-9 p-3">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-bold uppercase">Subscription</h1>
                    <h3 className="text-[17px]">Subscribe your Email address For latest news & updates</h3>
                    <form action="" className="flex flex-col gap-3">
                        <input type="email" placeholder="Email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                        <input type="text" placeholder="Name" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-600 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                        <button className="w-full bg-orange-500 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"> Submit</button>
                    </form>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-bold uppercase">Bike Rental</h1>
                    <p className="text-[17px]">We offers a big range of vehicles htmlFor all your driving needs. We have the perfect bike to meet your needs.</p>

                    <a href="mailto: example@email.com"><MdOutlineMail /> bikerental@email.com </a>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-bold uppercase">Working Hours</h1>
                    <h3 className="text-[17px]">Mon - Fri: 9:00AM - 9:00PM</h3>
                    <h3 className="text-[17px]">Sat: 9:00AM - 10:00PM</h3>
                    <h3 className="text-[17px]">Sun: <span className="text-[#ff0909]">Closed</span></h3>

                </div>
            </div>
        </div>
    )
}

export default Footer
