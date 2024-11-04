import React, { useState } from "react";
import Button from "../compoents/Button";
import { eye, eyeN, google, left, right, upR } from "../assests";
import { Link } from "react-router-dom";

function SignUp() {
  const [see, setSee] = useState(false);
  const handleSee = () => {
    setSee(!see);
  };
  return (
    <div className=" flex flex-col mx-auto mt-0 custom:mt-[4rem] mb-[100px] items-center custom:items-center justify-center custom:justify-evenly gap-12 sm:gap-y-7
    custom:gap-8 max-lg:gap-16 w-[85%] h-[1380px] sm:w-[95%] custom:w-[90%] custom:h-[816px] custom:flex-row ">



      {/*TESTIMONIALS PAGE*/}
      <div className="w-full min-w-[24rem] max-w-[60%] custom:w-[32rem] max-lg:w-[649px] flex flex-col order-1 custom:order-0 mx-auto self-stretch items-end gap-y-[40px] w-inherit h-[510px] sm:gap-y-[60px] sm:my-auto  sm:h-[509px]">
        <div className="flex flex-col items-center flex-none order-0 self-stretch flex-grow-0 w-inherit h-[155px] sm:h-[121px] p-0 gap-1">
          <h1 className="w-inherit h-[45px] flex-none order-0 self-stretch flex-grow-0 font-bold text-[30px] leading-[150%] ">
            Students Testimonials
          </h1>

          <p className="w-inherit h-[110px] sm:h-[72px] font-normal text-[16px] leading-[150%] text-[#59595A] flex-none order-1 self-stretch flex-grow-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quasi eos suscipit possimus quidem ullam voluptatum, dolore
            laboriosam est molestiae amet doloremque repudiandae nostrum
            distinctio voluptates, iste quisquam laborum excepturi?
          </p>
        </div>

        <div className="flex flex-col items-end gap-[40px] sm:gap-6 flex-none order-1 self-stretch flex-grow-0 w-inherit h-[329px] sm:h-[328px]">
          <div
            className="flex flex-col items-center w-inherit h-[255px] sm:h-[250px] bg-white border-[1px] border-solid border-[#F1F1F3] rounded-[10px]
          flex-none order-0 self-stretch flex-grow-0"
          >
            <div className="flex flex-row items-start flex-none order-0 self-stretch flex-grow-0 max-lg:p-[40px] sm:p-[30px] p-[40px] gap-[10px] w-inherit h-[195px] sm:max-h-[180px] max-lg:h-[152px] border-b-[1px] border-solid border-[#F1F1F3]">
              <p className="w-[297px] h-auto sm:w-full sm:h-auto font-normal text-[16px] leading-[150%] text-[#4C4C4D] flex-none order-0 flex-grow">
                The web design course provided a solid foundation for me. The
                instructors were knowledgeable and supportive, and the
                interactive learning environment was engaging. I highly
                recommend it!
              </p>
            </div>
            <div className="flex flex-row items-center flex-none order-2 self-stretch flex-grow-0 py-[24px] px-[40px] w-inherit h-[90px] sm:h-[98px] bg-[#FCFCFD]">
              <div
                className="flex flex-row items-center gap-[10px]  h-[50px]
              flex-none order-0 flex-grow"
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="profile"
                  className="w-[50px] h-[50px] rounded-[6px] flex-none order-0  flex-grow-0"
                />{" "}
                <span className="font-semibold text-[16px] leading-[150%] text-[#333333] flex-none order-1 flex-grow">
                  John Doe
                </span>
              </div>
              <div className="bg-[#F7F7F8] border border-solid border-[#F1F1F3] px-[16px] py-[14px] rounded-[6px]">
                <button className="w-[105px] h-[21px] font-[500] text-[14px] leading-[150%] text-center">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center sm:justify-end items-center w-inherit h-[54px] flex-none order-1 sm:mt-4 max-lg:mt-0 self-stretch flex-grow-0">
            <div className="flex flex-row items-center gap-[10px]">
              <img src={left} className="cursor-pointer" />
              <img src={right} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* SIGNUP PAGE*/}
      <div className="w-full min-w-[24rem] max-w-[60%] mx-auto custom:w-[25rem] max-lg:w-[540px] flex  order-0 custom:order-1 flex-col flex-none  h-[786px] self-stretch items-start p-[30px] sm:p-[40px] gap-[30px] sm:h-[816px] bg-white rounded-[10px]">
        <div className="flex flex-col justify-center items-center w-full h-[79px] self-stretch sm:h-[76px] gap-2 order-0">
          <h1 className="w-inherit h-[35px] sm:h-[48px] font-bold text-[28px] leading-[35px] sm:text-[38px] sm:leading-[48.07px] text-center self-stretch flex-grow-0 order-0">
            Sign Up
          </h1>
          <p className=" w-inherit h-[20px] font-normal text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] text-center order-1 self-stretch flex-grow-0">
            Create an account to unlock exclusive features.
          </p>
        </div>

        <form className="flex flex-col gap-6 items-start w-inherit h-[550px] sm:h-[620px] self-stretch order-1">
          <div className="flex flex-col items-start gap-[20px] w-inherit h-[447px] sm:h-[537px] self-stretch order-0">
            <div className="flex flex-col items-start gap-[10px] w-inherit h-[92px] sm:h-[98px] self-stretch order-0">
              <label htmlFor="name" className="font-semibold">
                Full Name
              </label>
              <input
                className=" flex flex-row items-center px-[18px] py-[20px] sm:py-[30px] sm:px-[20px] border-[1px] border-solid border-[#F1F1F3] rounded-[8px]  sm:h-[48px] bg-[#FCFCFD] text-[#656567]
                focus:outline-orange-200 focus:bg-orange-100
                focus:text-black self-stretch"
                type="name"
                name="name"
                id="name"
                placeholder="Enter your Name"
              />
            </div>
            <div className="flex flex-col items-start gap-[10px] w-inherit h-[92px] sm:h-[98px] self-stretch order-1">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                className=" flex flex-row items-center px-[18px] py-[20px] sm:py-[30px] sm:px-[20px] border-[1px] border-solid border-[#F1F1F3] rounded-[8px]  sm:h-[48px] bg-[#FCFCFD] text-[#656567]
                focus:outline-orange-200 focus:bg-orange-100
                focus:text-black self-stretch"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col items-start gap-[10px] w-inherit h-[123px] sm:h-[132px] self-stretch order-2">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <div className=" relative flex flex-row border-[1px] border-solid border-[#F1F1F3] rounded-[8px] self-stretch w-inherit">
                <input
                  className="flex flex-row self-stretch items-center px-[18px] py-[20px] sm:py-[30px] sm:px-[20px] w-full sm:h-[48px] text-[#656567] focus:outline-orange-200 bg-[#FCFCFD] focus:bg-orange-100 focus:text-black"
                  type={see ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                />
                <img
                  src={see ? eye : eyeN}
                  width={24}
                  height={24}
                  className="absolute top-[20px] right-[15px] cursor-pointer"
                  onClick={handleSee}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-[8px] w-inherit w-inherit h-[24px] self-stretch order-3">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="w-[24px] h-[24px] rounded bg-[#F7F7F8]"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div className=" self-stretch w-inherit sm:h-[49px] order-4">
              <Button text={"Login"} orange />
            </div>
          </div>

          <div class="flex flex-row justify-center items-center p-0 gap-3 w-inherit h-auto self-stretch order-2">
            <div class="flex-none order-0 w-[126.5px] sm:w-inherit h-0 border border-[#E4E4E7] flex-grow"></div>
            <span class="flex-none order-1 w-[20px] h-[21px] font-normal text-[14px] leading-[150%] flex items-center text-center text-[#98989A] flex-grow-0">
              OR
            </span>
            <div class="flex-none order-2 w-[126.5px] sm:w-inherit h-0 border border-[#E4E4E7] flex-grow"></div>
          </div>

          <div className="w-inherit sm:h-[49px] order-2">
            <img src={google} className="cursor-pointer hover:shadow-md" />
          </div>
          <Link
            to="/signup"
            className="flex flex-row justify-center items-center p-0 gap-[6px] w-inherit h-[21px] sm:h-[24px] text-center font-medium text-[18px] leading-[150%] self-stretch order-3"
          >
            Don't have an account ? <span className="underline"> Sign Up </span>
            <span>
              <img src={upR} />
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;