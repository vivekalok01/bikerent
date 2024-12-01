import { AiTwotoneMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { CiLock } from "react-icons/ci";
import { FaFacebookMessenger } from "react-icons/fa";

const Login = () => {
    return (
        <div className="border-gray-300 border-[1px] bg-gray-50 flex h-[600px] w-[400px] m-auto rounded-xl">

            <form action="" className="flex flex-col m-auto w-[90%] gap-[40px] justify-center items-center">
                <h1 className="text-4xl text-gray-700 font-bold">Welome</h1>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col relative">
                    <AiTwotoneMail  className="absolute text-[24px] top-2 left-1 text-gray-400 font-light"/>
                        <input type="email" placeholder="Email Or UserName" className="pl-8 w-[300px]] h-[40px]  rounded-[8px] border-[1px] border-gray-400" />
                    </div>
                    <div className="flex flex-col relative">
                    <CiLock  className="absolute text-[24px] top-2 left-1 text-gray-400 font-light" />
                        <input type="password" placeholder="Password"  className="pl-8 w-[300px] h-[40px] rounded-[8px] border-[1px] border-gray-400" />
                    </div>
                    <div className="flex justify-end">

                        <a href="#" className="hover:text-blue-500">Forget Password?</a>
                    </div>
                    <button className="px-3 py-2  rounded-3xl bg-blue-600 text-white hover:bg-blue-700">Log In</button>
                </div>
                <div className="flex flex-col gap-3 w-[86%] items-center">
                    <div>
                        <h2>Or</h2>
                    </div>
                    <div className="flex justify-between w-[100%]">
                        <div className="relative flex ">
                        <FcGoogle className="absolute text-[24px] top-3 left-3 text-gray-400 font-light" />
                            <button className="px-[40px] py-3 border-[1px] border-blue-700 rounded-3xl hover:bg-blue-700 hover:text-white">Google</button>
                        </div>
                        <div className="relative">
                        <FaFacebookMessenger className="absolute text-[22px] top-3 left-3 text-blue-600 font-light   hover:text-white" />
                        <button className="px-[40px] py-3 border-[1px] border-blue-700 rounded-3xl hover:bg-blue-700 hover:text-white">FaceBook</button>
                        </div>
                    </div>
                    <div>
                        <h3>Have no account yet?</h3>
                    </div>
                    
                        <button className="px-8 py-2 border-[1px] text-blue-700 hover:bg-blue-700 hover:text-white rounded-3xl border-blue-700 w-[100%]">Registration</button>
                    
                </div>
            </form>
        </div>

    )
}

export default Login
