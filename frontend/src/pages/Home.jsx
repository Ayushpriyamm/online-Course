import {
  adobe,
  amazon,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  home,
  netflix,
  notion,
  spotify,
  thIm,
  zapier,
  zoom,
} from "../assests";
import Button from "../components/Button";
import { Link} from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Benefits from "../components/Benefits";
import CourseHome from "../components/cards/CourseHome";
import { useState } from "react";
import TestimonialCard from "../components/cards/TestimonialCard";
import FAQ from "../components/FAQ";
import PricingCard from "../components/cards/PricingCard";

function Home() {
  const [view, setView] = useState(true);
  const [view2, setView2] = useState(false);
  const [priceType, setPriceType] = useState("monthly");

  return (
    <>
      {/*Hero Section*/}

      <div className=" flex flex-col items-center my-[100px] mx-auto w-[357px] h-[311px] gap-[50px] custom:max-w-[941px] sm:h-[265px] sm:max-w-[85%]">
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
        <img src={home} className="w-full h-full" />
      </div>

      {/* Benefits */}
      <Benefits />

      {/* Courses */}

      <div className="my-32 sm:mt-0 flex flex-col gap-10 sm:gap-16 items-end mx-auto w-[95%] sm:w-[90%] h-auto">
        <div
          className="flex flex-col sm:flex-row justify-end 
      items-start sm:items-end gap-8 sm:gap-16 custom:gap-32 max-lg:gap-64 w-inherit h-[128px] max-lg:h-[110px] self-stretch"
        >
          <div className="flex flex-col gap-3 flex-grow-0 self-stretch justify-between">
            <h1 className="font-semibold text-4xl flex-grow-0 self-stretch">
              Our Courses
            </h1>
            <p className="text-[#59595A] text-base leading-6 line-clamp-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium neque culpa porro voluptatibus similique, ea ipsam.
              Ipsa iusto asperiores ab blanditiis tempore dicta, aut, quibusdam
              quas consequuntur deserunt voluptate fugiat?
            </p>
          </div>
          <button
            className="sm:w-[28rem] custom:w-[20rem] h-[51px] px-5 py-3 bg-[#FCFCFD] rounded-md border border-solid border-[#F1F1F3] hover:bg-[#E5E5E5] active:bg-orange-500 active:text-white active:scale-95 transition-all ease-in-out duration-200"
            onClick={() => setView(!view)}
          >
            {view ? "View Less" : "View All"}
          </button>
        </div>
        <div className="flex flex-col w-inherit h-auto flex-grow-0  gap-4">
          <div className="flex flex-col sm:flex-row w-inherit flex-grow gap-4 ">
            <CourseHome
              thumbnail={h1}
              time="4 weeks"
              level="Beginner"
              teacher="By Priyam Sahab"
              course_name="Web Design Fundamentals"
              description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
            />

            <CourseHome
              thumbnail={h2}
              time="6 weeks"
              level="Intermediate"
              teacher="By Priyam John"
              course_name="UI/UX Design"
              description="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
            />
          </div>
          <div className="flex flex-col sm:flex-row w-inherit flex-grow gap-4 ">
            <CourseHome
              thumbnail={h3}
              time="5 weeks"
              level="Intermediate"
              teacher="By Ayush One"
              course_name="Mobile App Development"
              description="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
            />

            <CourseHome
              thumbnail={h4}
              time="10 weeks"
              level="Beginner"
              teacher="By Priyam Yadav"
              course_name="Graphic Designer for Beginners"
              description="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
            />
          </div>
          {view && (
            <>
              <div className="flex flex-col sm:flex-row w-inherit flex-grow gap-4">
                <CourseHome
                  thumbnail={h5}
                  time="10 weeks"
                  level="Intermediate"
                  teacher="By Priyam Jha"
                  course_name="Front-End Web Development"
                  description="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
                />

                <CourseHome
                  thumbnail={h6}
                  time="6 weeks"
                  level="Advanced"
                  teacher="By Ayush Priyam"
                  course_name="Advance JavaScript"
                  description="Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/*Testimonials*/}
      <div className="my-32 sm:mt-0 flex flex-col gap-10 sm:gap-16 items-end mx-auto w-[95%] sm:w-[90%] h-auto">
        <div
          className="flex flex-col sm:flex-row justify-end 
      items-start sm:items-end gap-8 sm:gap-16 custom:gap-32 max-lg:gap-64 w-inherit h-[128px] max-lg:h-[110px] self-stretch"
        >
          <div className="flex flex-col gap-3 flex-grow-0 self-stretch justify-between">
            <h1 className="font-semibold text-4xl flex-grow-0 self-stretch">
              Our Testimonials
            </h1>
            <p className="text-[#59595A] text-base leading-6 line-clamp-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium neque culpa porro voluptatibus similique, ea ipsam.
              Ipsa iusto asperiores ab blanditiis tempore dicta, aut, quibusdam
              quas consequuntur deserunt voluptate fugiat?
            </p>
          </div>
          <button
            className="sm:w-[28rem] custom:w-[20rem] h-[51px] px-5 py-3 bg-[#FCFCFD] rounded-md border border-solid border-[#F1F1F3] hover:bg-[#E5E5E5] active:bg-orange-500 active:text-white active:scale-95 transition-all ease-in-out duration-200"
            onClick={() => setView2(!view2)}
          >
            {view2 ? "View Less" : "View All"}
          </button>
        </div>

        <div className="flex flex-col w-inherit h-auto flex-grow-0  gap-4">
          <div className="flex flex-col custom:flex-row w-inherit flex-grow gap-4 ">
            <TestimonialCard
              name="Ayush Priyam"
              comment="The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Ty!"
            />
            <TestimonialCard
              name="Ayush Priyam"
              comment="The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"
            />
          </div>
          <div className="flex flex-col custom:flex-row w-inherit flex-grow gap-4 ">
            <TestimonialCard
              name="Ayush Priyam"
              comment="The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"
            />
            <TestimonialCard
              name="Ayush Priyam"
              comment="I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities. I'm grateful for this course!"
            />
          </div>
          {view2 && (
            <>
              <div className="flex flex-col custom:flex-row w-inherit flex-grow  gap-4">
                <TestimonialCard
                  name="Ayush Priyam"
                  comment="The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"
                />
                <TestimonialCard
                  name="Ayush Priyam"
                  comment="The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/*Pricing*/}
      <div className="my-32 sm:mt-0 flex flex-col gap-10 sm:gap-16 items-end mx-auto w-[95%] sm:w-[90%] h-auto">
        <div
          className="flex flex-col sm:flex-row justify-end 
      items-start sm:items-end gap-8 sm:gap-16 custom:gap-32 max-lg:gap-64 w-inherit h-[128px] max-lg:h-[110px] self-stretch"
        >
          <div className="flex flex-col gap-3 flex-grow-0 self-stretch justify-start">
            <h1 className="font-semibold text-4xl flex-grow-0 self-stretch">
              Our Pricing
            </h1>
            <p className="text-[#59595A] text-base leading-6 line-clamp-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium neque culpa porro voluptatibus similique, ea ipsam.
              Ipsa iusto asperiores ab blanditiis tempore dicta, aut, quibusdam
              quas consequuntur deserunt voluptate fugiat?
            </p>
          </div>
          <div className="sm:w-[28rem] custom:w-[20rem] h-auto px-3 py-3 bg-white rounded-md flex gap-2 items-center justify-center mx-auto sm:mx-0">
            <div
              className={
                ` px-4 py-2 text-center rounded-md cursor-pointer ${
                  priceType==="monthly" ? "bg-orange-500 text-white" :""}`}
                  onClick={() => setPriceType("monthly")}
            >
              Monthly
            </div>
            <div
              className={
                `px-4 py-2 text-center rounded-md cursor-pointer ${priceType==="yearly" ? "bg-orange-500 text-white" : ""}`}
                onClick={() => setPriceType("yearly")}
            >
              Yearly
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col custom:flex-row items-center px-10 py-10 custom:py-14 custom:px-12 max-lg:px-20 max-lg:py-16 justify-center custom:gap-12 max-lg:gap-16 gap-10 flex-grow-0 self-stretch bg-white rounded-lg">
          <PricingCard isFree  priceType={priceType}/>
          <PricingCard isFree={false} priceType={priceType}/>
        </div>
      </div>
      
      {/*FAQ*/}

      <FAQ />
    </>
  );
}

export default Home;
