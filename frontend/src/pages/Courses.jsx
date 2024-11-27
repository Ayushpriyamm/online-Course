import { h10, h11, h12, h13, h14, h15, h7, h8, h9 } from "../assests";
import CoursesCard from "../components/cards/CoursesCard";
import Course from "./Course";
function Courses() {
  return (
    <div className="mt-10 sm:mt-20 flex flex-col items-end mx-auto w-[95%] sm:w-[90%] h-auto ">
      <div className="flex w-full h-auto flex-col custom:flex-row gap-5 custom:gap-12 max-lg:gap-14 items-start justify-around mb-16 border-b border-solid border-[#E4E4E7] pb-9 px-0 custom:px-12 max-lg:px-16">
        <h1 className="font-semibold text-4xl w-full custom:w-1/2">
          Online Courses on Design and Development
        </h1>
        <p className="w-full custom:w-2/3 text-[#59595A] text-base leading-6">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>

      <div className="w-full flex items-center justify-end gap-4 mb-8">
        <div className="relative w-full max-w-xl">
          <input
            type="search"
            placeholder="Search for courses..."
            className="w-full px-4 py-3 rounded-lg border border-[#E4E4E7] focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors placeholder:text-[#59595A]"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#59595A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button className="hover:bg-orange-400 active:bg-[#E5E5E5] active:text-[#262626] active:scale-95 transition-all ease-in-out duration-200 text-white bg-orange-500 px-4 py-3 rounded-lg">
          Search
        </button>
      </div>

      <div className="flex flex-col gap-8 items-start self-stretch w-inherit flex-grow-0 h-auto mb-16">
        <CoursesCard
          course_name={"Web Design Fundamentals"}
          describe={
            "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
          }
          time={"4 Weeks"}
          level={"Beginner"}
          teacher={"By Ayush Priyam"}
          p1={"Introduction to HTML"}
          p2={"Styling with CSS"}
          p3={"Introduction to Responsive Design"}
          p4={"Design Principles for Web"}
          p5={"Building a Basic Website"}
          im1={h7}
          im2={h8}
          im3={h9}
        />

        <CoursesCard
          course_name={"UI/UX Design"}
          describe={
            "Master the art of creating intuitive user interfaces(UI) and enhancing user experiences(UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
          }
          time={"6 Weeks"}
          level={"Intermediate"}
          teacher={"By Ayush Priyam"}
          p1={"Introduction to UI/UX Design"}
          p2={"User Research and Personas"}
          p3={"Wireframing and Prototyping"}
          p4={"Visual Design and Branding"}
          p5={"Usability Testing and Iteration"}
          im1={h10}
          im2={h11}
          im3={h12}
        />

        <CoursesCard
          course_name={"Mobile App Development"}
          describe={
            "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
          }
          time={"8 Weeks"}
          level={"Intermediate"}
          teacher={"By Ayush Priyam"}
          p1={"Introduction to Mobile App Development"}
          p2={"Fundamentals of Swift Programming (iOS)"}
          p3={"Fundamentals of Kotlin Programming (Android)"}
          p4={"Building User Interfaces"}
          p5={"App Development and Testing"}
          im1={h13}
          im2={h14}
          im3={h15}
        />

        <CoursesCard
          course_name={"Graphics Design for Beginners"}
          describe={
            "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
          }
          time={"10 Weeks"}
          level={"Beginner"}
          teacher={"By Ayush Priyam"}
          p1={"Introduction to Graphic Design"}
          p2={"Typography and Color Theory"}
          p3={"Layout Design and Composition"}
          p4={"Image Editing and Manipulation"}
          p5={"Designing for Print and Digital Media"}
          im1={h7}
          im2={h8}
          im3={h9}
        />

        <CoursesCard
          course_name={"Front-End Web Development"}
          describe={
            "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
          }
          time={"10 Weeks"}
          level={"Intermediate"}
          teacher={"By Ayush Priyam"}
          p1={"HTML Fundamentals"}
          p2={"CSS Styling and Layouts"}
          p3={"JavaScript Basics"}
          p4={"Building Responsive Websites"}
          p5={"Introduction to Bootstrap and React"}
          im1={h7}
          im2={h8}
          im3={h9}
        />
      </div>
    </div>
  );
}

export default Courses;
