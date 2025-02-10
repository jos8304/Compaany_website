import React from "react";
import HeroImage from "../../assets/image.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-b from-gray-50 to-white pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl 2xl:text-7xl font-bold text-gray-900 leading-tight mb-6 lg:mb-12">
              Welcome to the <span className="text-blue-600">AI-Powered</span>{" "}
              Job Portal
            </h1>

            <p className="text-lg sm:text-xl text-gray-800 text-semibold mb-8 max-w-2xl mx-auto">
              We are a team of AI experts who are passionate about helping you
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
                Apply Now
              </button>

              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300 text-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <div className="relative">
              <img
                src={HeroImage}
                className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "AI Experts", label: "100+" },
            { name: "Jobs Available", value: "100+" },
            { name: "Location", value: "Remote" },
            { name: "Salary", value: "100k - 200k" },
            { name: "Working Hours", value: "Full Time" },
            { name: "Education", value: "Bachelor's degree" },
            { name: "Experience", value: "5+ years" },
            { name: "Industry", value: "Tech" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-2xl font-bold">{stat.number}</div>
              <div className="text-lg text-gray-600">{stat.label}</div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
