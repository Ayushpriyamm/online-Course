import {clogo} from '../assests';
import CourseCard from '../components/cards/CourseCard';
function Course({course_name,desc}) {
  return (
    <div className="mt-10 sm:mt-20 flex flex-col items-end mx-auto w-[95%] sm:w-[90%] h-auto ">
      <div className="flex w-full h-auto flex-col custom:flex-row gap-5 custom:gap-12 max-lg:gap-14 items-start justify-around border-b border-solid border-[#E4E4E7] pb-9 px-0 custom:px-12 max-lg:px-16">
        <h1  className="font-semibold text-4xl w-full custom:w-1/2">UI/UX Design Course</h1>
        <p className="w-full custom:w-2/3 text-[#59595A] text-base leading-6">Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum</p>
      </div>

      <div className="mx-auto w-full my-12">
        <img src={clogo} className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-5 items-start self-stretch w-inherit flex-grow-0 h-auto mb-16">
      <div className="w-full flex flex-col custom:flex-row gap-5 h-auto items-center px-3 max-lg:px-5">
        <CourseCard/>
        <CourseCard/>
      </div>
      <div className="w-full flex flex-col custom:flex-row gap-5 h-auto items-center px-3 max-lg:px-5">
        <CourseCard/>
        <CourseCard/>
      </div>
      <div className="w-full custom:w-1/2 flex flex-col sm:flex-row gap-5 h-auto items-center px-3 max-lg:px-5">
        <CourseCard/>
      </div>
      </div>
    </div>
  )
}

export default Course
