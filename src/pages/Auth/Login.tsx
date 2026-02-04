import { Lock, User } from 'lucide-react'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router'

export default function Login() {




  return (
    <div className="bg-[url(/LoginImage.jpeg)] min-h-screen  bg-no-repeat bg-center p-2  flex justify-center items-center  bg-cover">


      <div className="flex items-center justify-center rounded-4xl">
    
        <div className="bg-[#000000CC] backdrop-blur-sm border border-white/30 shadow-2xl shadow-black space-y-8 px-8 py-10 w-full rounded-4xl  ">

   
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="" />

          </div>

          <h1 className="text-white text-3xl font-medium text-center tracking-wider">
            Admin Portal
          </h1>

          <div className="space-y-5">
            {/* Email Input */}
            <div className="flex items-center border-b border-white/20 py-2 group focus-within:border-blue-500 transition-colors">
              <User size={20} className="text-gray-500 group-focus-within:text-blue-500" />
              <input
                className="bg-transparent w-full text-gray-200 px-3 outline-none placeholder:text-gray-600"
                type="email"
                placeholder="Your Email Address"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center border-b border-white/20 py-2 group focus-within:border-blue-500 transition-colors">
              <Lock size={20} className="text-gray-500 group-focus-within:text-blue-500" />
              <input
                className="bg-transparent w-full text-gray-200 px-3 outline-none placeholder:text-gray-600"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>

       
         <Link className='' to={'/dashboard'}>
         
          <button className="w-full cursor-pointer  bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]">
            Sign In
          </button></Link>


           <div className="flex mt-6 justify-center">
            <Link className=' cursor-pointer' to={'forgetpass'}>
              <span className="text-sm text-gray-200 hover:text-blue-400 cursor-pointer transition-colors">
              Forgot Password?
            </span></Link>
          
          </div>
        </div>
      </div>
    </div>
  )
}
