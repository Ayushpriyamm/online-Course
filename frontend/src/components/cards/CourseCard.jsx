import { tm } from "../../assests";

function CourseCard({lno,lname,l1,l2,l3,t1,t2,t3}) {
  return (
    <div className="flex flex-col p-6 gap-8 bg-white rounded-lg flex-1 w-full custom:w-1/2 flex-grow self-stretch">
      <div className="flex items-center justify-end text-5xl font-extrabold">
        {lno}
      </div>
      <div className="text-left font-bold max-lg:text-xl">{lname}</div>
      <div className="flex flex-col gap-3">
        <div className="flex p-3 flex-col justify-between items-start custom:items-center custom:flex-row self-stretch flex-grow border border-solid border-[#E4E4E7] rounded-md hover:shadow-orange-100 hover:shadow-equal hover:transition-shadow duration-300 hover:border-orange-100 gap-2">
          <div className="flex flex-col gap-2 self-stretch">
            <h3 className="text-sm max-lg:text-base font-medium">{l1}</h3>
            <p className="text-[#59595A] font-normal text-sm max-lg:text-base leading-5">Lesson 01</p>
          </div>
          <div className="flex items-center justify-center px-1 py-2 bg-[#F6F6F8] rounded-md w-[5.5rem]">
              <img src={tm}/>
              <span className="ml-1 text-xs max-lg:text-sm text-[#59595A] font-medium">{t1}</span>
          </div>
        </div>
        <div className="flex p-3 flex-col justify-between items-start custom:items-center custom:flex-row self-stretch flex-grow border border-solid border-[#E4E4E7] rounded-md hover:shadow-orange-100 hover:shadow-equal hover:transition-shadow duration-300 hover:border-orange-100 gap-2">
          <div className="flex flex-col gap-2 self-stretch">
            <h3 className="text-sm max-lg:text-base font-medium">{l2}</h3>
            <p className="text-[#59595A] font-normal text-sm max-lg:text-base leading-5">Lesson 02</p>
          </div>
          <div className="flex items-center justify-center px-1 py-2 bg-[#F6F6F8] rounded-md w-[5.5rem]">
              <img src={tm}/>
              <span className="ml-1 text-xs max-lg:text-sm text-[#59595A] font-medium">{t2}</span>
          </div>
        </div>
        <div className="flex p-3 flex-col justify-between items-start custom:items-center custom:flex-row self-stretch flex-grow border border-solid border-[#E4E4E7] rounded-md hover:shadow-orange-100 hover:shadow-equal hover:transition-shadow duration-300 hover:border-orange-100 gap-2">
          <div className="flex flex-col gap-2 self-stretch">
            <h3 className="text-sm max-lg:text-base font-medium">{l3}</h3>
            <p className="text-[#59595A] font-normal text-sm max-lg:text-base leading-5">Lesson 03</p>
          </div>
          <div className="flex items-center justify-center px-1 py-2 bg-[#F6F6F8] rounded-md w-[5.5rem]">
              <img src={tm}/>
              <span className="ml-1 text-xs max-lg:text-sm text-[#59595A] font-medium">{t3}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default CourseCard;
