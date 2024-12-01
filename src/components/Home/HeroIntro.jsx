import { RiEBikeFill } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa6";
import { FaMountainCity } from "react-icons/fa6";

const HeroIntro = () => {
    return (
        <div className="justify-around min-h-[400px]  flex flex-col gap-8 items-center w-[95%] m-auto md:gap-[100px] py-9">
            <div className="flex flex-col items-center">

                <h1 className="text-[40px] font-extrabold text-center">Plan Your Trip Now</h1>
                <h1 className="text-[19px] font-semibold">Quick & easy Bike rental</h1>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex flex-col justify-center items-center  w-[300px] sm:w-[600px] lg:w-[400px] ">
                    <RiEBikeFill className="text-[50px] text-[#ff4d30] box-border" />
                    <h2 className="text-[28px] font-bold">Select Bike</h2>
                    <p className="text-center text-[15px] text-[#706f7b] font-semibold">We offers a big range of vehicles htmlFor all your driving needs. We have the perfect Bike to meet your needs</p>
                </div>
                <div className="flex flex-col justify-center items-center  w-[300px] sm:w-[600px] lg:w-[400px]">
                    <FaHeadset className="text-[50px] text-[#ff4d30]  box-border" />
                    <h2 className="text-[28px] font-bold">Contact Operator</h2>
                    <p className="text-center text-[15px] text-[#706f7b] font-semibold">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>


                <div className="flex flex-col justify-center items-center  w-[300px] sm:w-[600px] lg:w-[400px]">
                    <FaMountainCity className="text-[50px] text-[#ff4d30]  box-border" />
                    <h2 className="text-[28px] font-bold">Let's Drive</h2>
                    <p className="text-center text-[#706f7b] text-[15px] font-semibold">Whether you're hitting the open road, we've got you covered with our wide range of Bike</p>
                </div>
            </div>
        </div>
    )
}

export default HeroIntro
