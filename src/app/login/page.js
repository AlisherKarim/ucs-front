import React from 'react'
import LoginForm from '../components/login/LoginForm'

const LoginPage = () => {
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <LoginForm />
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
            <img src="https://readymadeui.com/login-image.webp" className="w-full h-full object-cover" alt="Dining Experience" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage