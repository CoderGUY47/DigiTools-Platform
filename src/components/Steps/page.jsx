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

          <div className="flex items-center gap-3 mt-14 mb-20 p-1.5 bg-gray-50 rounded-full border border-gray-100 shadow-xs">
            {steps.map((step) => {
              const StepIcon = allIcons[step.icon] || null;
              return (
                <div className="glass card flex bg-linear-to-tl from-violet-200 to-indigo-200 text-white items-center gap-3 h-[400px] w-[400px] mb-20">
                  <div className="card-body p-6 flex flex-col items-center justify-center text-center">
                    <div className="flex w-full justify-end items-center mb-14">
                      <span className="flex items-center justify-center text-lg font-bold bg-linear-to-tl from-violet-600 to-indigo-600 text-white h-14 w-14 rounded-full">
                        {step.step}
                      </span>
                    </div>
                    <StepIcon
                      className="bg-linear-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text w-14 h-14 mb-6"
                      style={{ fill: "url(#iconGradient)" }}
                      size={56}
                    />
                    <h3 className="font-bold text-4xl text-gray-900">
                      {step.title}
                    </h3>
                    <p className="font-light text-base text-gray-500 leading-6">
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
