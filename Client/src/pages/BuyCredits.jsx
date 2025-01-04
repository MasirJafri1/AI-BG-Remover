import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredits = () => {
  return (
    <div className="min-h-[90vh] text-center pt-14 mb-8 bg-slate-50">
      <button className="inline-flex items-center justify-center rounded-full px-8 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-slate-100 hover:bg-slate-200 border border-slate-200 shadow-sm mb-8">
        Our Plans
      </button>
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-4">
        Choose the plan that's right for you
      </h1>
      <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
        Select a plan that suits your needs and start creating amazing content
        today
      </p>
      <div className="flex flex-wrap justify-center gap-8 text-left px-4">
        {plans.map((item, index) => {
          return (
            <div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-slate-100 transition-all duration-300 ease-in-out hover:translate-y-[-4px] w-full max-w-sm"
              key={index}
            >
              <div className="flex items-center justify-between mb-6">
                <img
                  width={60}
                  src={assets.logo_icon}
                  alt=""
                  className="rounded-lg"
                />
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-slate-100 text-slate-800">
                  {item.id}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-slate-900">
                  ₹{item.price}
                </span>
                <span className="text-slate-600 ml-2">
                  / {item.credits} credits
                </span>
              </div>
              <button className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-slate-50 shadow hover:bg-slate-800">
                Purchase Plan
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyCredits;
