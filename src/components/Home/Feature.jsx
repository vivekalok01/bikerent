import fet from '/images/featureimg.png'
import { GrMapLocation } from "react-icons/gr";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GrHide } from "react-icons/gr";

const Feature = () => {
    return (
        <div className='w-[95%] m-auto mt-6'>

            <div className='flex justify-center gap-5 flex-wrap items-center lg:justify-around lg:flex-nowrap w-[100%]'>
                <div className=''>
                    <img src={fet} alt="" className='h-[350px] w-[280px] sm:h-[500px] sm:w-[400px]' />
                </div>
                <div className='flex flex-col gap-3 w-[400px] '>

                    <div className='flex flex-col justify-center items-center gap-3 sm:gap-9 sm:flex-row'>
                        <GrMapLocation className='text-[30px] sm:text-[50px] md:text-[100px] text-[#ff0909]' />
                        <div>
                            <h1 className='text-[20px] font-bold text-center sm:text-left'>Cross Country Drive</h1>
                            <p className='text-center sm:text-left'>Take your driving experience to the next level with our top-notch vehicles htmlFor your cross-country adventures.</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-3 sm:gap-9 sm:flex-row'>
                        <RiMoneyRupeeCircleLine className=' text-[30px] sm:text-[50px] md:text-[100px] text-[#ff0909]' />
                        <div>
                            <h1 className='text-[20px] font-bold text-center sm:text-left'>All Inclusive Pricing</h1>
                            <p className='text-center sm:text-left'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 sm:gap-9 sm:flex-row'>
                        <GrHide className='text-[30px] sm:text-[70px] md:text-[100px] text-[#ff0909]' />
                        <div>
                            <h1 className='text-[20px] font-bold text-center sm:text-left'>No Hidden Charges</h1>
                            <p className='text-center sm:text-left'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
