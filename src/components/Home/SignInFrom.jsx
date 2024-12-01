

const SignInFrom = () => {
    return (


        <div className="max-w-4xl mx-auto font-[sans-serif] p-6]">
            <div className="text-center mb-16">

                <h4 className="text-gray-800 text-3xl font-semibold mt-6">Sign up into your account</h4>
            </div>

            <form>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">First Name</label>
                        <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-[2px]" placeholder="Enter name" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
                        <input name="lname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-[2px]" placeholder="Enter last name" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                        <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-[2px]" placeholder="Enter email" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
                        <input name="number" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-[2px]" placeholder="Enter mobile number" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Password</label>
                        <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-[2px]" placeholder="Enter password" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                        <input name="cpassword" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border-[2px]" placeholder="Enter confirm password" />
                    </div>
                </div>

                <div className="!mt-12">
                    <button type="button" className="py-3.5 px-7 text-sm font-semibold w-[100%] tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Sign up
                    </button>
                </div>
            </form>
        </div>

    )
}

export default SignInFrom
