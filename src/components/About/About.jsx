import { RiEBikeLine } from "react-icons/ri";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import HeroIntro from "../Home/HeroIntro";

const About = () => {
    return (
        <>
       
        <div className='w-[95%] m-auto mt-8'>
            <div className="flex bg-white min-h-[600px] flex-col gap-3 lg:flex-row items-center py-6">
                <div className="h-[250px] w-[900px] lg:h-[400px] lg:w-[1200px]  flex justify-center items-center">
                    <img className="w-[100%] h-[100%]" src="/images/travel.svg" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-[30px] text-center lg:text-[40px] lg:text-left  font-extrabold">About Company</h3>
                    <h2 className="text-[35px] text-center lg:text-[45px] lg:text-left  font-extrabold leading-[50px]">You start the engine and your adventure begins
                    </h2>
                    <p className="text-[14px] text-center lg:text-[16px] lg:text-left ">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                    <div className="flex justify-center items-center flex-wrap gap-3 lg:justify-start">
                        <div className="flex gap-1 justify-center items-center">
                            <RiEBikeLine className="text-[40px] lg:text-[50px] text-orange-500"/>
                            <h1 className="text-[25px] lg:text-[30] font-bold">30 <span className="text-[18px] font-normal">Bike Types</span></h1>
                        </div> 
                        <div className="flex gap-1 justify-center items-center">
                            <PiBuildingOfficeFill className="text-[40px] lg:text-[50px] text-orange-500" />
                            <h1 className="text-[25px] lg:text-[30] font-bold">95 <span className="text-[18px] font-normal">Rental Outlets</span></h1>
                        </div>
                        <div className="flex gap-1 justify-center items-center">
                            <GiAutoRepair className="text-[40px] lg:text-[50px] text-orange-500" />
                            <h1 className="text-[25px] lg:text-[30] font-bold">140 <span className="text-[18px] font-normal">Repair Shop</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HeroIntro></HeroIntro>
        </>
    )
}

export default About
