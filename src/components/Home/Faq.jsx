import { useState } from "react"
import { FaArrowUpLong } from "react-icons/fa6";

const Faq = () => {

    const [getAcc1, setAcc1] = useState(false)
    const [getAcc2, setAcc2] = useState(false)
    const [getAcc3, setAcc3] = useState(false)



    return (
        <div className="min-h-[600px] m-auto w-[95%] flex justify-center items-center gap-4 flex-col ">
            <div className="flex flex-col justify-center items-center   md:w-[65%]">
                <h1 className="text-[35px] md:text-[3.9vw] text-center font-bold ">Frequently Asked Questions</h1>
                <p className="text-[14px] md:text-[16px] text-center">Frequently Asked Questions About the Bike Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
            </div>
            <div className="flex flex-col shadow-2xl w-[100%] md:w-[70%] p-1 md:p-0 gap-1 ">
                <div className="m-auto  w-[100%] ">
                    <div className={`${getAcc1 ? ' bg-[#cececee3]' : 'bg-[#dfdfdf]'} cursor-pointer h-[50px] flex justify-between items-center p-2`} onClick={() => setAcc1(!getAcc1)}>
                        <h1 className="text-[18px] font-[500]">What is special about comparing rental Bike deals?</h1>
                        <FaArrowUpLong className={`${getAcc1 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                    {getAcc1 && <div className="">
                        <p className="text-gray-600 p-9">Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value htmlFor your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.</p>
                    </div>}
                </div>
                <div className="m-auto  w-[100%] ">
                    <div className={`${getAcc2 ? ' bg-[#cececee3]' : 'bg-[#dfdfdf]'} cursor-pointer h-[50px] flex justify-between items-center p-2`} onClick={() => { setAcc2(!getAcc2) }}>
                        <h1 className="text-[18px] font-[500]">How do I find the Bike rental deals?</h1>
                        <FaArrowUpLong className={`${getAcc2 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                    {getAcc2 && <div className="duration-500 transition-all delay-500">
                        <p className="text-gray-600 p-9">You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up htmlFor email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.</p>
                    </div>}
                </div>
                <div className="m-auto  w-[100%] ">
                    <div className={`${getAcc3 ? ' bg-[#cececee3]' : 'bg-[#dfdfdf]'} cursor-pointer h-[50px] flex justify-between items-center p-2`} onClick={() => setAcc3(!getAcc3)}>
                        <h1 className="text-[18px] font-[500]">How do I find such low rental Bike prices?</h1>
                        <FaArrowUpLong className={`${getAcc3 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                    {getAcc3 && <div className="duration-500 transition-all delay-500">
                        <p className="text-gray-600 p-9">Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look htmlFor discount codes and coupons: Search htmlFor discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.</p>
                    </div>}
                </div>

            </div>
        </div>
    )
}

export default Faq
