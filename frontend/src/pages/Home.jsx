import React from "react";
import { head, thIm } from "../assests";
import Button from "../compoents/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" flex flex-col items-center my-[100px] mx-auto w-[357px] h-[311px] top-[204px] left-[17px] gap-[50px] sm:max-w-[941px] sm:h-[265px] sm:top-[232px] sm:left-[266px] sm:gap-[50px]">
      <div className="relative w-[357px] h-[212px] sm:h-[166px] sm:w-[941px] gap-[16px] flex flex-col">
        <img
          src={thIm}
          alt=""
          className=" absolute z-[10] left-[-10px] top-[-13px] sm:left-[133px] sm:top-[-13px]"
        />

        <div className="flex pl-3 rounded-md items-center w-[357px] h-[76px] sm:w-[643px] sm:h-[78px] gap-[14px] bg-white mx-auto">
          <div>
            <img src={head} />
          </div>
          <div className="sm:w-[549px] sm:h-[54px]">
            <h1 className="text-[18px] sm:text-[36px] sm:leading-[54px] font-semibold">
              <span className="text-orange-500 pl-3">Unlock</span> Your Creative
              Potential
            </h1>
          </div>
        </div>
        <div className="text-center flex justify center flex-col items-center w-[357px] h-[120px] sm:w-[941px] sm:h-[72px] gap-[6px]">
          <div className="w-[297px] h-[72px] sm:w-[941px] sm:h-[42px]">
            <h2 className="text-center text-[24px] sm:text-[28px]  font-semibold leading-[36px] sm:leading-[42px]">
              with Online Design and Development Courses.
            </h2>
          </div>
          <div className="w-[297px] h-[42px] sm:w-[941px] px-2 sm:h-[24px]">
            <p className="text center font-medium text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px] pt-2">
              Learn from Industry Experts and Enhance your Skills
            </p>
          </div>
        </div>
      </div>
      <div className=" items-center flex justify-between gap-x-4 sm:w-[297px] sm:h-[48px]">
        <Link to="/courses">
          <Button text={"Explore Courses"} orange />
        </Link>
        <Link to="/pricing">
          <Button text={"View Pricing"} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
