import { TbBrandApple } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";


const Download = () => {
  return (
    <div className='flex flex-col h-[700px] md:gap-2 xl:gap-4 justify-center items-center w-[95%] xl:flex-row m-auto md:justify-between xl:h-[500px] '>
        <div className='w-[380px] md:w-[470px] h-[280px] m-auto xl:w-[80%] xl:h-[490px] flex justify-center items-center '>

            <img src="images/undraw-download.svg" alt="" className=''/>
        </div>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <h1 className='text-[44px] font-extrabold leading-[50px] text-center xl:text-left'>Download our app to get most out of it</h1>
            <p className='font-semibold text-gray-700 text-center xl:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quas repellat amet modi doloremque a laboriosam soluta laudantium nisi, nemo nulla! Laborum minima vitae nostrum doloremque aliquam officia ex, a modi aliquid eligendi consequatur ab, dolorum quod?</p>
            <div className="flex gap-4 xl:items-start xl:w-[100%]">
                <button className="bg-[#ff4d30]  hover:text-black border-[1px] hover:border-black gap-2 rounded-md flex justify-center items-center w-36 px-2 py-3 text-[18px] hover:bg-transparent transition ease-in-out delay-150 ">Download <TbBrandApple className="text-[20px]" /></button>
                <button className="bg-[#ff4d30]  hover:text-black border-[1px] hover:border-black gap-2 rounded-md flex justify-center items-center w-36 px-2 py-3 text-[18px] hover:bg-transparent transition ease-in-out delay-150 ">Download <IoLogoGooglePlaystore className="text-[20px]" /></button>
            </div>
        </div>
    </div>

  )
}

export default Download
