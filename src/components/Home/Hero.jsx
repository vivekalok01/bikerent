
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
const Hero = () => {

    return (
        <div className="max-w-[95%] m-auto min-h-[600px] mt-3 -z-2 ">
            <div className="flex gap-5 flex-wrap items-center xl:flex-nowrap justify-between w-[100%] ">
                <div className="  flex flex-col text-center xl:text-left justify-center items-center xl:justify-center gap-5 xl:items-start "> 
                    <h3 className="text-[45px] xl:text-6xl font-[800] md:text-5xl">
                        Plan your trip now
                    </h3>
                    <h1 className="text-2xl font-[500]">Save big with our Bike rental</h1>
                    <p className="font-[600] text-[14px] md:text-[17px]">
                        Rent the bike of your dreams. Unbeatable prices, unlimited
                        miles,flexible pick-up options and much more.
                    </p>
                    <div className="flex gap-3 ">
                        <button
                            className="bg-gray-900 text-white text-[19px] px-[55px] font-bold border-[2px] border-black rounded-md py-4 cursor-pointer hover:bg-transparent hover:text-gray-900 transition ease-out delay-150 flex justify-center items-center gap-3"
                         
                        >
                         <Link to="/signin">Sign In</Link>
                        </button>
                        <button className="bg-gray-900 text-white text-[19px] px-[55px] font-bold border-[2px] border-black rounded-md py-4 cursor-pointer hover:bg-transparent hover:text-gray-900 transition ease-out delay-150 flex justify-center items-center gap-3">
                         <Link to="/login">LogIn </Link>
                         
                         
                        </button>
                    </div>
                </div>
                <div className=" max-w-[600px] min-w-[400px]">
                    <img src="/images/profile.png" alt="" />
                </div>
            </div>

           
        </div>
    );
};

export default Hero;
