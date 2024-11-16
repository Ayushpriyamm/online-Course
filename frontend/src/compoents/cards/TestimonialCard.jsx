function TestimonialCard({comment,img,name}) {
  return (
    <div className="flex flex-col justify-between items-start flex-grow self-stretch flex-shrink-0 rounded-lg bg-white custom:max-w-[50%] ">
      <div className="w-full self-stretch p-10 border border-solid border-[#F1F1F3] ">
        <p className="text-[#59595A] text-base leading-6 line-clamp-none sm:line-clamp-4 max-lg:line-clamp-3">
          {comment}
        </p>
      </div>
      <div className="flex justify-between items-center w-full px-10 py-5 sm:px-8 max-lg:px-10 bg-[#FCFCFD]">
        <div className=" flex items-center justify-start gap-4 sm:gap-2 custom:gap-4">
          <img
            src={img ? img : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} 
            className="w-[50px] h-[50px] object-contain rounded-md flex-none order-0  flex-grow-0"
          />{" "}
          <span className="font-semibold text-center">{name}</span>
        </div>
        <button className="cursor-pointer text-center font-medium text-sm rounded-md border border-solid border-[#F1F1F3] bg-[#F7F7F8] max-lg:px-4 sm:px-2 px-4 py-3">
          Read Full Story
        </button>
      </div>
    </div>
  );
}

export default TestimonialCard;
