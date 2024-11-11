import { useEffect, useState } from "react";
import BenefitCard from "./cards/BenefitCard";

function Benefits() {
  const [view,setView] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setView(true); 
      } else {
        setView(false); 
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <div className="mt-32 sm:mt-0 flex flex-col gap-10 sm:gap-16 items-end mx-auto w-[95%] sm:w-[90%] h-auto sm:h-[935px] ">
      <div className="flex flex-col sm:flex-row justify-end 
      items-start sm:items-end gap-8 sm:gap-16 custom:gap-32 max-lg:gap-64 w-inherit h-[128px] max-lg:h-[110px] self-stretch">
        <div className="flex flex-col gap-3 flex-grow-0 self-stretch justify-between">
          <h1 className="font-semibold text-4xl flex-grow-0 self-stretch">Benefits</h1>
          <p className="text-[#59595A] text-base leading-6 line-clamp-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque culpa porro voluptatibus similique, ea ipsam. Ipsa iusto asperiores ab blanditiis tempore dicta, aut, quibusdam quas consequuntur deserunt voluptate fugiat?
          </p>
        </div>
        <button className="sm:w-[21rem] h-[50px] px-5 py-3 bg-[#FCFCFD] rounded-md border border-solid border-[#F1F1F3] hover:bg-[#F1F1F3] transition-all:duration-3000 sm:hidden"
        onClick={() => setView(!view)}>
            {view ? "View Less" : "View All"}
        </button>
      </div>

      <div className="flex flex-col gap-5 items-start self-stretch w-inherit flex-grow-0 h-auto mb-16 sm:h-[700px]">
        <div className="w-full flex flex-col sm:flex-row gap-5 self-stretch flex-grow h-auto items-center">
        <BenefitCard
          num="01"
          heading="Flexible Learing Schedule"
          text="Fit your coursework around your existing commitments and obligations."
        />
        <BenefitCard
          num="02"
          heading="Expert Instruction"
          text="Learn from industry experts who have hands-on experience in design and development."
        />
        <BenefitCard
          num="03"
          heading="Diverse Course Offerings"
          text="Explore a wide range of design and development courses covering various topics."
        />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-5 self-stretch flex-grow h-auto items-center">
        <BenefitCard
          num="04"
          heading="Updated Curriculum"
          text="Access courses with up-to-date content reflecting the latest trends and industry practices."
        />

         {(view || window.innerWidth >= 640) && (
            <>
              <BenefitCard
                num="05"
                heading="Practical Projects and Assignments"
                text="Develop a portfolio showcasing your skills and abilities to potential employers."
              />
              <BenefitCard
                num="06"
                heading="Interactive Learning Environment"
                text="Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."
              />
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Benefits;
