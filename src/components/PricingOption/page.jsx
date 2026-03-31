import React, { use } from 'react'
import { FaCheck } from 'react-icons/fa'



const PricingOption = ({pricingPlansPromise}) => {

    const pricingData = use(pricingPlansPromise)

    const displayPricingCard = (plan) => (
      <div 
        className={`relative flex flex-col p-5 md:p-7 rounded-3xl shadow-xl transition-all duration-500 w-full lg:w-[390px] mx-auto 
        ${plan.isPopular ? 
          'bg-violet-600 text-white z-10 lg:scale-105' : 
          'glass bg-black/90 text-white border-none h-full'}
          `}>
          
          {plan.isPopular && (
              <span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-white/50 uppercase tracking-widest text-[10px] md:text-xs font-bold'>
                  <span className='bg-linear-to-r from-violet-700 to-indigo-500 text-transparent bg-clip-text'>
                      {plan.popularLabel}
                  </span>
              </span>
          )} 

          <h3 className='text-3xl md:text-4xl font-semibold mb-2 text-center'>{plan.name}</h3>
          <p className='text-gray-300 mb-6 text-sm md:text-base text-center'>{plan.tagline}</p>
          <div className='flex items-baseline mb-6 justify-center'>
              <span className='text-4xl md:text-5xl font-bold'>${plan.price}</span>
              <span className='text-gray-400 ml-2 text-sm md:text-base'>/{plan.period}</span>
          </div>
          <ul className='space-y-3 md:space-y-4 flex-1'>
              {plan.features.map((feature, index) => (
                  <li key={index} className='flex items-start gap-3'>
                        <FaCheck className={`w-4 h-4 md:w-5 md:h-5 mt-1 ${plan.isPopular ? 'text-white' : 'text-green-600'}`}/>
                      <span className='font-medium text-sm md:text-base text-gray-300'>{feature}</span>
                  </li>
              ))}
          </ul>

          <button className={`mt-8 w-full py-3 md:py-4 px-6 rounded-full font-bold transition-all duration-300 text-sm md:text-base ${
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
    );

  return (
    <div>
        <div className="pt-10 px-4">
            <div className="flex flex-col items-center justify-center text-center mb-20 px-6">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-2xl font-medium text-gray-400 text-base md:text-xl leading-relaxed mb-6">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
              </p>
                <div className="w-95 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-14 mb-20 w-full items-center">
                    {pricingData.map((plan) => (
                      <div key={plan.id} className="w-full px-2 md:px-0">
                        {displayPricingCard(plan)}
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingOption