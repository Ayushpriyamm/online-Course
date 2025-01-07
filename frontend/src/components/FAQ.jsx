import { faArrowRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useState } from "react";

const FAQ=forwardRef((props, ref) =>{
  const [openQues, setOpenQues] = useState({});
  const [showAll, setShowAll] = useState(false);
  const handleToggle = (id) => {
    setOpenQues((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleFAQ = () => {
    setShowAll(!showAll); 
  };

  const faq = [
    {
      id: 1,
      question: "Can I enroll in multiple courses at a time?",
      answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      id: 2,
      question: "What kind of support can I expect from instructors?",
      answer: "Our instructors provide comprehensive support through Q&A sessions, email, and forums.",
    },
    {
      id: 3,
      question: "Are the courses self-paced or do they have specific start and end dates?",
      answer: "Most courses are self-paced, but some may have specific timelines. Check the course details for clarity.",
    },
    {
      id: 4,
      question: "Are there any prerequisites for the courses?",
      answer: "Some courses might have prerequisites. Please check the course details for specific requirements.",
    },
    {
      id: 5,
      question: "Can I download the course materials for offline access?",
      answer: "Yes, most courses allow downloading materials for offline use.",
    },
    {
      id: 6,
      question: "How long do I have access to the course materials?",
      answer: "You will have lifetime access to the course materials once you enroll.",
    },
  ];
  
  const quesVisible = showAll ? faq : faq.slice(0, 4);

  return (
    <div ref={ref} id={props.id} className="mt-32 custom:mt-0 flex flex-col custom:flex-row gap-16 custom:gap-20 items-start mx-auto w-[95%] sm:w-[90%] h-auto bg-white my-10 p-6 sm:p-10 custom:p-16 max-lg:p-20">
      <div className="flex flex-col gap-10 w-full custom:w-1/2">
        <div className="flex flex-col gap-2 justify-center items-start">
          <h1 className="text-4xl font-semibold">Frequently Asked</h1>
          <h1 className="text-4xl font-semibold mb-2">Questions</h1>
          <p className="text-[#59595A] text-sm leading-6 line-clamp-4">
            Still have any questions? Contact our Team via{" "}
            <span>support@priyarjunm.com</span>
          </p>
        </div>
        <span
          onClick={toggleFAQ}
          className="px-4 py-3 w-[8.75rem] cursor-pointer border border-solid border-[#F1F1F3] rounded-md hover:bg-[#E5E5E5] active:bg-orange-500 active:text-white active:scale-95 transition-all ease-in-out duration-200 font-medium text-center"
        >
          {showAll ? "Hide FAQs" : "See All FAQs"}
        </span>
      </div>

      <div className="w-full custom:w-2/3 h-full flex flex-col gap-4 self-stretch items-stretch mx-auto">
        {quesVisible.map((item) => (
          <div
            key={item.id}
            className="border border-solid border-[#F1F1F3] rounded-lg px-8 py-6"
          >
            <div className="w-full flex justify-between items-center">
              <h1 className="text-lg font-medium">{item.question}</h1>
              <div
                className="bg-orange-100 cursor-pointer flex justify-center items-center rounded-md"
                onClick={() => handleToggle(item.id)}
              >
                {openQues[item.id] ? (
                  <div className="rotate-45 px-3 py-2"><FontAwesomeIcon icon={faPlus} /></div>
                ) : (
                  <button className="px-3 py-2">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                )}
              </div>
            </div>
            {openQues[item.id] && (
              <div className="w-full flex-col justify-between items-center border-t border-solid border-[#F1F1F3] mt-4 py-4">
                <p className="text-[#59595A] text-sm leading-6 mb-4">
                  {item.answer}
                </p>
                <div className="bg-[#F1F1F3] p-6 rounded-md items-center justify-between flex">
                  <h1 className="text-sm font-medium">
                    Enrollment Process for Different Courses
                  </h1>
                  <div className="bg-white px-3 py-2 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
);

export default FAQ;
