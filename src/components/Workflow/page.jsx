import React from 'react';

const Workflow = () => {
  return (
    <section className="mt-20 w-full mx-auto">
      <div className="bg-linear-to-r from-violet-600 to-indigo-600 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Ready To Transform Your Workflow?
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl md:text-xl font-light text-gray-300 mb-7 leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
            <button className="px-10 py-5 bg-white text-violet-600 rounded-full font-semibold text-lg hover:bg-violet-200/90 cursor-pointer transition-all duration-300 shadow-xl shadow-black/10">
              Explore Products
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white/50 text-white rounded-full font-semibold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 cursor-pointer">
              View Pricing
            </button>
          </div>

          <div className="flex flex-wrap  mt-10 items-center justify-center gap-4 text-sm md:text-base font-semibold text-violet-100/80 uppercase tracking-widest leading-none">
            <span>14-day free trial</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-200/80"></span>
            <span>No credit card required</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-200/80"></span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;