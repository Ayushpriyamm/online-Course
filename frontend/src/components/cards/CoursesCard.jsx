import React from "react";
import { Link } from "react-router-dom";



function CoursesCard({ time, level, teacher, p1, p2, p3, p4, p5, course_name, describe, im1, im2, im3 }) {
  return (
    <div className="w-full flex flex-col p-5 custom:p-8 bg-white gap-9">
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col custom:flex-row justify-between items-start custom:items-center gap-4 custom:gap-16">
          <div className="self-stretch flex flex-col ">
            <h1 className="font-semibold text-lg custom:text-xl">{course_name}</h1>
            <p className="text-[#59595A] font-normal text-sm leading-5 custom:text-base">
             {describe}
            </p>
          </div>
          <Link to="/course">
            <button className="flex justify-center items-center py-3 w-[8rem] h-[50px] self-stretch border border-solid border-[#E4E4E7] rounded-md bg-[#F6F6F8] hover:bg-[#E5E5E5] active:bg-orange-500 active:text-white active:scale-95 transition-all ease-in-out duration-200">
              View Course
            </button>
          </Link>
        </div>
        <div className="flex gap-2 rounded-md">

          {/*Width="540" height="455" for every svg */}
          <div className=""><img src={im1} className="rounded-md"/></div>
          <div className=""><img src={im2} className="rounded-md"/></div>
         <div className=""> <img src={im3} className="rounded-md"/></div>
        </div>
        <div className="w-full flex justify-between gap-4">
          <div className="flex gap-2">
            <span className="border text-sm text-[#59595A] font-medium px-2 py-1.5 rounded-md">
              {time}
            </span>
            <span className="border text-sm text-[#59595A] font-medium px-2 py-1.5  rounded-md">
              {level}
            </span>
          </div>
          <h3 className="font-semibold text-[#262626] flex justify-start items-center">
            {teacher}
          </h3>
        </div>
      </div>
      <div className="flex flex-col border border-solid border-[#E4E4E7] rounded-lg">
        <div className="flex justify-start items-center px-4 py-3 border-b border-solid border-[#E4E4E7]">
          <h1 className="font-semibold text-lg">Curriculum</h1>
        </div>
        <div className="flex flex-col custom:flex-row py-5 custom:py-6 px-4 custom:px-10 gap-5 custom:gap-10 ">
          <div className="flex flex-col items-start justify-around flex-1">
            <h1 className="font-extrabold text-[40px]">01</h1>
            <p className="font-medium text-sm text-[#59595A]">{p1}</p>
          </div>
          <div className="border border-solid border-[#F1F1F3]"></div>
          <div className="flex flex-col items-start justify-around flex-1">
            <h1 className="font-extrabold text-[40px]">02</h1>
            <p className="font-medium text-sm text-[#59595A]">{p2}</p>
          </div>
          <div className="border border-solid border-[#F1F1F3]"></div>
          <div className="flex flex-col items-start justify-around flex-1">
            <h1 className="font-extrabold text-[40px]">03</h1>
            <p className="font-medium text-sm text-[#59595A]">{p3}</p>
          </div>
          <div className="border border-solid border-[#F1F1F3]"></div>
          <div className="flex flex-col items-start justify-around flex-1">
            <h1 className="font-extrabold text-[40px]">04</h1>
            <p className="font-medium text-sm text-[#59595A]">{p4}</p>
          </div>
          <div className="border border-solid border-[#F1F1F3]"></div>
          <div className="flex flex-col items-start justify-around flex-1">
            <h1 className="font-extrabold text-[40px]">05</h1>
            <p className="font-medium text-sm text-[#59595A]">{p5}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
