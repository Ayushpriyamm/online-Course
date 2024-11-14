import {
  adobe,
  amazon,
  head,
  home,
  netflix,
  notion,
  spotify,
  thIm,
  zapier,
  zoom,
} from "../assests";
import Button from "../compoents/Button";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Benefits from "../compoents/Benefits";

function Home() {
  return (
    <>
      {/*Hero Section*/}

      <div className=" flex flex-col items-center my-[100px] mx-auto w-[357px] h-[311px] top-[204px] left-[17px]  gap-[50px] custom:max-w-[941px] sm:h-[265px] sm:max-w-[85%]">
        <div className="relative w-[357px] h-[212px] sm:h-[166px] sm:w-[941px] gap-[16px] flex flex-col">
          <img
            src={thIm}
            alt=""
            className=" absolute z-[10] left-[-10px] top-[-13px] sm:left-[133px] sm:top-[-13px]"
          />

          <div className="flex pl-3 rounded-md items-center w-[357px] h-[76px] sm:w-[643px] sm:h-[78px] gap-0.5 sm:gap-4 bg-white mx-auto">
            <div>
              <img src={head} />
            </div>
            <div className="w-[90%] sm:w-[600px] sm:h-[54px]">
              <h1 className="text-[18px] sm:text-[36px] sm:leading-[54px] font-semibold">
                <span className="text-orange-500 pl-3">Unlock</span> Your
                Creative Potential
              </h1>
            </div>
          </div>
          <div className="text-center flex justify center flex-col items-center w-[357px] h-[120px] sm:w-[941px] sm:h-[72px] gap-[6px]">
            <div className="w-[297px] h-[72px] sm:w-[941px] sm:h-[42px]">
              <h2 className="text-center text-[24px] sm:text-[26px] max-lg:text-[28px]  font-semibold leading-[36px] sm:leading-[42px]">
                with Online Design and Development Courses.
              </h2>
            </div>
            <div className="w-[297px] h-[42px] sm:w-[941px] px-2 sm:h-[24px]">
              <p className="text center font-medium text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px] pt-2">
                <TypeAnimation
                  sequence={[
                    "Learn from Industry Experts and Enhance your Knowledge ",
                    1500,
                    "Learn from Industry Experts and Boost your Career",
                    1500,
                    "Learn from Industry Experts and Transform your Future",
                    1500,
                    "Learn from Industry Experts and Elevate your Potential",
                    1500,
                    "Learn from Industry Experts and Refine your Abilities",
                    1500,
                    "Learn from Industry Experts and Broaden your Perspective",
                    1500,
                    "Learn from Industry Experts and Expand your Horizons",
                    1500,
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </p>
            </div>
          </div>
        </div>
        <div className=" items-center flex justify-between gap-x-4 sm:w-[320px] sm:h-[48px]">
          <Link to="/courses">
            <Button text={"Explore Courses"} orange />
          </Link>
          <Link to="/pricing">
            <Button text={"View Pricing"} />
          </Link>
        </div>
      </div>

      {/*Our Partners*/}
      <div className="flex flex-row items-start border border-solid border-[#F1F1F3] rounded-lg p-2 sm:p-6 bg-white w-[95%] sm:w-[90%] h-[84px] sm:h-[116px] mx-auto overflow-hidden">
        {/* Card */}
        <div
          className="w-[112.33px] h-[64px] sm:w-[140px] custom:w-[160px] max-lg:w-[175.86px] sm:h-[68px]
        justify-center items-center px-7.5 py-5 flex-1 order-0 flex-grow gap-x-7 flex"
        >
          <img src={zapier} />
        </div>

        {/* Line */}
        <div className="rotate-90 self-stretch w-[64px] sm:w-[68px] border border-solid border-[#F1F1F3] flex-none flex-grow-0 h-0 -mx-2 sm:mx-0 my-auto flex"></div>

        {/* Card */}
        <div
          className="w-[112.33px] h-[64px] sm:w-[140px] custom:w-[160px] max-lg:w-[175.86px] sm:h-[68px] 
        justify-center items-center px-7.5 py-5 flex-1 order-0 flex-grow gap-x-7 flex"
        >
          <img src={spotify} />
        </div>

        {/* Line */}
        <div className="rotate-90 self-stretch w-[64px] sm:w-[68px] border border-solid border-[#F1F1F3] flex-none flex-grow-0 h-0 -mx-2 sm:mx-0 my-auto flex"></div>

        {/* Card */}
        <div
          className="w-[112.33px] h-[64px] sm:w-[140px] custom:w-[160px] max-lg:w-[175.86px] sm:h-[68px] 
        justify-center items-center px-7.5 py-5 flex-1 order-0 flex-grow gap-x-7 flex"
        >
          <img src={zoom} />
        </div>

        {/* Line */}
        <div className="rotate-90 self-stretch w-[64px] sm:w-[68px] border border-solid border-[#F1F1F3] flex-none flex-grow-0 h-0 -mx-2 sm:mx-0 my-auto hidden custom:flex"></div>

        {/* Card */}
        <div className="w-[112.33px] h-[64px] sm:w-[140px] custom:w-[160px] max-lg:w-[175.86px] sm:h-[68px] justify-center items-center px-7.5 py-5 flex-1 order-0 flex-grow gap-x-7 hidden custom:flex">
          <img src={amazon} />
        </div>

        {/* Line */}
        <div className="rotate-90 self-stretch w-[64px] sm:w-[68px] border border-solid border-[#F1F1F3] flex-none flex-grow-0 h-0 my-auto hidden max-lg:flex"></div>

        {/* Card */}
        <div className="w-[112.33px] h-[64px] sm:w-[140px] custom:w-[160px] max-lg:w-[175.86px] sm:h-[68px] justify-center items-center px-7.5 py-5 flex-1 order-0 flex-grow gap-x-7 hidden max-lg:flex">
          <img src={adobe} />
        </div>

        {/* Line */}
        <div className="rotate-90 self-stretch w-[64px] sm:w-[68px] border border-solid border-[#F1F1F3] flex-none flex-grow-0 h-0 my-auto hidden max-lg:flex"></div>

        {/* Card */}
        <div className="w-[112.33px] h-[64px] sm:w-[140px] custom:w-[160px] max-lg:w-[175.86px] sm:h-[68px] justify-center items-center px-7.5 py-5 flex-1 order-0 flex-grow gap-x-7 hidden max-lg:flex">
          <img src={notion} />
        </div>

        {/* Line */}
        <div className="rotate-90 self-stretch w-[64px] sm:w-[68px] border border-solid border-[#F1F1F3] flex-none flex-grow-0 h-0 my-auto hidden max-lg:flex"></div>

        {/* Card */}
        <div className="w-[112.33px] h-[64px] sm:w-[140px] custom:w-[160px] max-lg:w-[175.86px] sm:h-[68px] justify-center items-center px-7.5 py-5 flex-1 order-0 flex-grow gap-x-7 hidden max-lg:flex">
          <img src={netflix} />
        </div>
      </div>
      

      {/*Home Image*/}
      <div className="mx-auto w-[95%] h-auto sm:w-[92%] my-5 sm:my-20">
        <img src={home} className="w-full h-full"/>
      </div>

      <Benefits/>

    </>
  );
}

export default Home;
