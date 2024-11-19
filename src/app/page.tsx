import React from 'react';
import Navbar from './components/navbar';  

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Content Section */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[1046px] h-[1028px] flex flex-col items-center gap-20 py-20">
        {/* Main Container */}
        <div className="w-[701px] h-[496px] flex flex-col items-center gap-20">
          
          {/* Header Tag */}
          <h4 className="w-[77px] h-[24px] text-primary font-bold text-[16px] leading-[24px] tracking-[0.1px]">
            Welcome
          </h4>

          {/* Headline */}
          <h1 className="w-[542px] h-[160px] text-light-text font-bold text-[58px] leading-[80px] text-center tracking-[0.2px]">
            Selling on the internet like a pro
          </h1>

          {/* Sub Headline */}
          <h4 className="w-[536px] h-[60px] text-light-text font-normal text-[20px] leading-[30px] text-center tracking-[0.2px]">
            We know how large objects will act, but things on a small scale just do not act the way
          </h4>

          {/* Call to Action Buttons */}
          <div className="flex gap-2 w-[365px] h-[52px]">
            {/* Primary Button */}
            <button className="w-[193px] h-[52px] bg-primary text-light-text rounded-[5px] flex justify-center items-center py-4 px-10">
              <span className="text-[14px] font-bold">Get Quote Now</span>
            </button>

            {/* Secondary Button */}
            <button className="w-[162px] h-[52px] border-[1px] border-primary text-primary rounded-[5px] flex justify-center items-center py-4 px-10">
              <span className="text-[14px] font-bold">Learn More</span>
            </button>
          </div>
        </div>

        {/* Feature Section */}
        <div className="flex gap-8 w-[1046px] h-[292px] bg-gray-800">
          
          {/* Feature 1 */}
          <div className="w-[328px] h-[292px] flex flex-col items-start p-[35px] gap-5 bg-white shadow-lg">
            <div className="w-[70px] h-[76px] bg-accent-2 rounded-[10px] flex justify-center items-center">
              {/* Icon for Feature 1 */}
            </div>
            <h3 className="text-[16px] font-bold text-[#252B42]">Feature Title 1</h3>
            <div className="w-[50px] h-[2px] bg-danger"></div>
            <p className="w-[222px] h-[60px] text-[14px] font-normal text-secondary-text leading-[20px]">
              Description of feature 1 goes here.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="w-[328px] h-[292px] flex flex-col items-start p-[35px] gap-5 bg-white shadow-lg">
            <div className="w-[70px] h-[76px] bg-accent-1 rounded-[10px] flex justify-center items-center">
              {/* Icon for Feature 2 */}
            </div>
            <h3 className="text-[16px] font-bold text-[#252B42]">2,769 online courses</h3>
            <div className="w-[50px] h-[2px] bg-danger"></div>
            <p className="w-[222px] h-[60px] text-[14px] font-normal text-secondary-text leading-[20px]">
            The gradual accumulation of information about atomic and small-scale behaviour..
            </p>
          </div>

          {/* Feature 3 */}
          <div className="w-[328px] h-[292px] flex flex-col items-start p-[35px] gap-5 bg-primary shadow-lg">
            <div className="w-[70px] h-[76px] bg-white rounded-[10px] flex justify-center items-center">
              {/* Icon for Feature 3 */}
            </div>
            <h3 className="text-[16px] font-bold text-light-text">training Courses</h3>
            <div className="w-[50px] h-[2px] bg-white"></div>
            <p className="w-[222px] h-[60px] text-[14px] font-normal text-light-text leading-[20px]">
              The gradual accumulation of information about atomic and small-scale behaviour..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
