import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
        {/* 1st card  */}
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Start by uploading the image you <br /> want to edit. Simply drag
              and <br />
              drop or click to select the file.
            </p>
          </div>
        </div>
        {/* 2nd card  */}
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Remove background</p>
            <p className="text-sm text-neutral-500 mt-1">
              Use our AI-powered tool to <br /> automatically remove the
              background <br />
              in just seconds.
            </p>
          </div>
        </div>
        {/* 3rd card  */}
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Download image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Save the processed image to <br /> your device and use it wherever{" "}
              <br /> you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
