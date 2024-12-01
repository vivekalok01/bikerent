import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="max-w-[95%] flex justify-between items-center text-black  m-auto mt-3 border-b-4 bg-[#e7e5e59a] rounded-lg pl-2">
            <Link to="/">
                <img src="/images/headerlogo.png" alt="" className="hover:scale-105" />
            </Link>
            <ul className="hidden xl:flex items-center gap-5 text-[17px] text-gray-800 font-semibold">
                <Link to='/'>
                    <li className="p-3 hover:underline underline-offset-8 rounded-md transition-all cursor-pointer">
                        HOME
                       
                    </li>
                </Link>
                <Link to="/bike">
                    <li className="p-3 hover:underline underline-offset-8  rounded-md transition-all cursor-pointer">
                       BIKES
                    </li>
                </Link>
                <Link to="/about">
                    <li className="p-3 hover:underline underline-offset-8  rounded-md transition-all cursor-pointer">
                         ABOUT
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="p-3 hover:underline underline-offset-8  rounded-md transition-all cursor-pointer">
                    CONTACT
                    </li>
                </Link>
               

                <li></li>
            </ul>
            <IoMdMenu
                className="bx bx-menu text-black xl:hidden block text-5xl cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && (
                <div
                    className={`z-50 absolute top-[70px] right-[15px] xl:hidden w-[60%] flex flex-col items-start bg-[#e7e5e5] rounded-lg  font-semibold text-lg ease-out transform transition-transform `}
                >
                    <Link to="/">
                        <li className="list-none w-full text-center p-4 text-[15px]  hover:text-[#fd6767] transition-all cursor-pointer ">
                            HOME
                        </li>
                    </Link>
                    <Link to="/bike">
                        <li className="list-none w-full text-center p-4 text-[15px] hover:text-[#fd6767] transition-all cursor-pointer">
                            BIKES
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="list-none w-full text-center p-4 text-[15px] hover:text-[#fd6767] transition-all cursor-pointer">
                            ABOUT US
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="list-none w-full text-center p-4 text-[15px]  hover:text-[#fd6767] transition-all cursor-pointer">
                            CONTACT
                        </li>
                    </Link>

                  
                </div>

            )}
        </header>
    );
};

export default Header;
