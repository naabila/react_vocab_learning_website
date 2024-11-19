import React from "react";
import bgOverlay from "../assets/background.png";

function PageBanner({ text }) {
  return (
    <div
      className="hero h-[300px] bg-lightBlue/50 text-deepBlue font-semibold"
      style={{ backgroundImage: `url(${bgOverlay})`, backgroundSize: "cover", backgroundPosition: "top center" }}
    >
      <div className="hero-overlay bg-opacity-50 bg-white"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <p className="text-2xl">{text}</p>
          {/* <p className="text-sm text-gray-500 mt-2">Home &gt; {text}</p> */}
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
