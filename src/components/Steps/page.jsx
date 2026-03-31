import React, { use } from "react";
import { FaUserPlus } from "react-icons/fa";
import { RiBox3Line } from "react-icons/ri";
import { MdOutlineRocketLaunch } from "react-icons/md";

const allIcons = {
  FaUserPlus,
  RiBox3Line,
  MdOutlineRocketLaunch,
};

const page = ({ stepDataPromise }) => {
  const steps = use(stepDataPromise);
  console.log(steps);
  return (
    <div>
      {/* create gradient help with ai */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
      <div className="pt-30 mb-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Get Started in 3 Steps
          </h1>
          <p className="max-w-2xl font-medium text-gray-400 text-lg md:text-xl leading-relaxed">
            Start using premium digital tools in minutes, not hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 mb-20 w-full lg:p-1.5 lg:bg-gray-50 lg:rounded-full lg:border lg:border-gray-100 lg:shadow-xs">
            {steps.map((step) => {
              const StepIcon = allIcons[step.icon] || null;
              return (
                <div key={step.id} className="glass card flex flex-col bg-linear-to-tl from-violet-200 to-indigo-200 text-gray-900 justify-center items-center h-auto min-h-[300px] lg:min-h-[400px] w-full max-w-[400px] mx-auto rounded-[3rem] shadow-sm">
                  <div className="card-body p-8 sm:p-10 w-full flex flex-col items-center justify-center text-center">
                    <div className="flex w-full justify-end items-center mb-6 lg:mb-14">
                      <span className="flex items-center justify-center text-base lg:text-lg font-bold bg-linear-to-tl from-violet-600 to-indigo-600 text-white h-12 w-12 lg:h-14 lg:w-14 rounded-full shadow-md">
                        {step.step}
                      </span>
                    </div>
                    <StepIcon
                      className="text-indigo-600 w-12 h-12 lg:w-14 lg:h-14 mb-4 lg:mb-6"
                      style={{ fill: "url(#iconGradient)" }}
                      size={56}
                    />
                    <h3 className="font-bold text-2xl lg:text-3xl text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="font-medium text-sm lg:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
