import React, { useState } from 'react'
import toast from "react-hot-toast"
import apis from "../api/apis"
import httpAction from '../utils/httpAction'
import useProvideHooks from '../hooks/useProvideHooks'

const Signup = () => {
    const [formData, setFormData] = useState({
        name:"",
        email : "",
        password: ""
    }); 
    const {navigate} = useProvideHooks(); 
    
    const handleChange = (e)=>{
        const name = e.target.name 
        const value = e.target.value
        setFormData({...formData, [name]:value}); 
    }

    const submitHandler = async (e) => {
        e.preventDefault(); 
        try {
            const data = {
                url: apis().registerUser, 
                method: "POST", 
                body: JSON.stringify(formData),
            };
    
            const result = await httpAction(data); 
            // console.log("API Response:", result);
    
            if (result?.status) {
                toast.success(result.message);
                navigate('/login')
            }
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(error);
        }

        setFormData({
            name:"",
            email:"",
            password:""
        })
    };
    
    return (
        <>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow border border-gray-300 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign Up
                    </h1>
                    <form onSubmit={submitHandler} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                            <input type="text" name="name" id="name" className="bg-white border border-gray-300 text-gray-900 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={formData.password} onChange={handleChange} />
                        </div>
                        
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Sign Up
                        </button>
                       
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup
