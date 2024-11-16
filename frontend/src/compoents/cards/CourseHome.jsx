function CourseHome({ thumbnail,time,level,teacher,course_name,description }) {
  return (
    <div className="flex flex-col justify-between items-start p-6 max-lg:p-10 gap-6 custom:gap-9 flex-grow self-stretch rounded-lg bg-white custom:max-w-[50%] ">
      <img src={thumbnail} />
      <div className="w-full flex flex-col custom:flex-row justify-start sm:justify-between gap-4">
        <div className="flex gap-2">
          <span className="border text-sm text-[#59595A] font-medium px-2 py-1.5 rounded-md">{time}</span>
          <span className="border text-sm text-[#59595A] font-medium px-2 py-1.5  rounded-md">{level}</span>
        </div>
        <h3 className="font-semibold text-[#262626] flex justify-start items-center">{teacher}</h3>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{course_name}</h2>
        <p className="font-normal text-sm leading-[150%] text-[#59595A] flex-none self-stretch flex-grow-1 line-clamp-5 sm:line-clamp-none">{description}</p>
      </div>
      <div className="bg-[#F1F1F3] flex justify-center items-center w-full h-[49px] rounded-lg cursor-pointer hover:bg-[#E5E5E5] active:bg-[#4C4C4D] active:text-white active:scale-95 transition-all ease-in-out duration-200">
        <button>Get it Now</button>
      </div>
    </div>
  );
}

export default CourseHome;
