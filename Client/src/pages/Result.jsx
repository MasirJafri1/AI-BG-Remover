import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const { resultImage, image } = useContext(AppContext);
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh] bg-slate-50">
      <div className="bg-white rounded-xl px-8 py-8 shadow-lg border border-slate-100">
        {/* image container  */}
        <div className="flex flex-col sm:grid grid-cols-2 gap-10">
          {/* Left Side  */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-3 text-lg">
              Original Image
            </h3>
            <div className="relative group">
              <img
                className="rounded-lg border border-slate-200 w-full object-cover transition-all duration-300 group-hover:shadow-md"
                src={image ? URL.createObjectURL(image) : ""}
                alt="Original image"
              />
            </div>
          </div>

          {/* Right Side  */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-slate-700 mb-3 text-lg">
              Background Removed
            </h3>
            <div className="rounded-lg border border-slate-200 h-full relative bg-[#f8fafc] overflow-hidden group transition-all duration-300 hover:shadow-md">
              <img
                src={resultImage ? resultImage : ""}
                alt="Image with background removed"
                className="w-full h-full object-contain"
              />
              {!resultImage && image && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                  <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Buttons  */}
        {resultImage && (
          <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-8">
            <button className="px-8 py-2.5 text-violet-600 text-sm font-medium border-2 border-violet-600 rounded-full hover:bg-violet-50 hover:scale-[1.02] transition-all duration-300 focus:ring-2 focus:ring-violet-200 focus:ring-offset-2">
              Try another image
            </button>
            <a
              className="px-8 py-2.5 text-white text-sm font-medium bg-gradient-to-r from-violet-600 to-violet-500 rounded-full hover:from-violet-500 hover:to-violet-400 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow focus:ring-2 focus:ring-violet-200 focus:ring-offset-2"
              href={resultImage}
              download
            >
              Download image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
