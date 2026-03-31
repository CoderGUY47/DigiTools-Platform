import React from 'react'

const page = () => {
  return (
    <div className='mb-20'>
      <div className="w-full bg-gray-300 mt-20">
        <div className="w-[80%] lg:w-[63%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 text-white py-12 justify-items-center">
          <div className="glass card flex flex-col items-center justify-center text-center border-none bg-linear-to-br from-violet-600 to-indigo-600 h-[150px] w-full max-w-[320px] mx-auto shadow-xl">
            <div className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              50K+
            </div>
            <div className="text-sm md:text-base text-gray-200 uppercase font-bold mt-2 tracking-widest opacity-80">
              Active Users
            </div>
          </div>

          <div className="glass card flex flex-col items-center justify-center text-center border-none bg-linear-to-br from-violet-600 to-indigo-600 h-[150px] w-full max-w-[320px] mx-auto shadow-xl">
            <div className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              200+
            </div>
            <div className="text-sm md:text-base text-gray-200 uppercase font-bold mt-2 tracking-widest opacity-80">
              Premium Tools
            </div>
          </div>

          <div className="glass card flex flex-col items-center justify-center text-center border-none bg-linear-to-br from-violet-600 to-indigo-600 h-[150px] w-full max-w-[320px] mx-auto shadow-xl">
            <div className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              4.9
            </div>
            <div className="text-sm md:text-base text-gray-200 uppercase font-bold mt-2 tracking-widest opacity-80">
              User Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page