import React, { use } from 'react'
import { FaCheck } from 'react-icons/fa'



const PricingOption = ({pricingPlansPromise}) => {

    const pricingData = use(pricingPlansPromise)
    console.log(pricingData)
  return (
    <div>
        <div className="pt-10 px-4">
            <div className="flex flex-col items-center justify-center text-center mb-20 px-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-2xl font-medium text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
              </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mb-20">
                    {pricingData.map((plan) => (
                        <div key={plan.id} 
                        className={`relative flex flex-col p-7 rounded-3xl shadow-xl transition-all duration-500 
                        ${plan.isPopular ? 'bg-violet-600 text-white scale-105 z-10 w-[390px]': 
                        'glass bg-black/90 text-white border-none'}`}>
                            {plan.isPopular && (
                                <span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-white/50 uppercase tracking-widest text-xs font-bold'>
                                    <span className='bg-linear-to-r from-violet-700 to-indigo-500 text-transparent bg-clip-text'>
                                        {plan.popularLabel}
                                    </span>
                                </span>
                            )} 
                            <h3 className='text-4xl font-semibold mb-2 text-center'>{plan.name}</h3>
                            <p className='text-gray-300 mb-6'>{plan.tagline}</p>
                            <div className='flex items-baseline mb-6'>
                                <span className='text-5xl font-bold'>${plan.price}</span>
                                <span className='text-gray-400 ml-2'>/{plan.period}</span>
                            </div>
                            <ul className='space-y-4 flex-1'>
                                {plan.features.map((feature, index) => (
                                    <li key={index} className='flex items-start gap-3'>
                                         <FaCheck className={`w-5 h-5 ${plan.isPopular ? 
                                            'text-white' 
                                            : 'text-green-600'}`}/>
                                        <span className='font-medium text-base text-gray-300'>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`mt-8 w-full py-4 px-6 rounded-full font-bold transition-all duration-300 ${
                                plan.isPopular 
                                  ? 'bg-white hover:bg-gray-50' 
                                  : 'bg-linear-to-r from-violet-600 to-indigo-600 text-white' 
                              }`}
                            >
                              {plan.isPopular ? (
                                <span className='bg-linear-to-r from-violet-700 to-indigo-500 text-transparent bg-clip-text'>
                                  {plan.buttonText}
                                </span>
                              ) : (
                                plan.buttonText
                              )}
                            </button>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingOption