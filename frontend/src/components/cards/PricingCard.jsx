import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function PricingCard({isFree,priceType}) {
  const price = isFree ? 0 : priceType === "monthly" ? 500 : 5000;

  return (

      isFree ? (
      <>
        <div className="flex flex-col p-5 custom:p-5 max-lg:p-10 items-stretch self-stretch flex-grow rounded-lg border border-solid border-[#F1F1F3] bg-[#F6F6F8]">
          <div className="w-full border border-orange-500 bg-orange-100 p-2 text-center my-2 rounded-md font-medium">Free Plan</div>
          <div className="flex w-full items-end justify-center my-9">
            <h1 className="text-6xl font-bold">₹{price}</h1>
            <p className="text-sm font-semibold text-[#59595A]">{priceType==="monthly" ? "/month":"/year"}</p>
          </div>
          <div className="flex flex-col bg-white rounded-t-lg w-full py-4  px-5 sm:px-10 custom:px-2 max-lg:px-10">
            <div className="flex flex-col p-2 items-center w-full gap-3">
              <h2 className="text-lg font-medium mb-3">Available Features</h2>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
               <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Access to selected free courses.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Limited course material and resources.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Basic community support.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">No certification upon completion.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Ad-supported platform.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
               <div className="bg-[#F1F1F3] border border-solid px-2 py-1 rounded-md"><div className="rotate-45"><FontAwesomeIcon icon={faPlus} /></div></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Access to exclusive Pro Plan community forums.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md mb-3">
              <div className="bg-[#F1F1F3] border border-solid px-2 py-1 rounded-md"><div className="rotate-45"><FontAwesomeIcon icon={faPlus} /></div></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Early access to new courses and updates.</p>
              </div>
            </div>
          </div>
          <Link>
          <div className="py-4 bg-orange-500 w-full text-center text-white cursor-pointer rounded-b-lg ">Get Started</div>
          </Link>
        </div>
      </>
      ):(<>
        <div className="flex flex-col  p-5 custom:p-5 max-lg:p-10 items-stretch self-stretch flex-grow rounded-lg border border-solid border-[#F1F1F3] bg-[#F6F6F8]">
          <div className="w-full border border-orange-500 bg-orange-100 p-2 text-center my-2 font-medium rounded-md">Pro Plan</div>
          <div className="flex w-full items-end justify-center my-9">
            <h1 className="text-6xl font-bold">₹{price}</h1>
            <p className="text-sm font-semibold text-[#59595A]">{priceType==="monthly" ? "/month":"/year"}</p>
          </div>
          <div className="flex flex-col bg-white rounded-t-lg w-full py-4 px-5 sm:px-10 custom:px-2 max-lg:px-10 ">
            <div className="flex flex-col p-2 items-center w-full gap-3">
              <h2 className="text-lg font-medium mb-3">Available Features</h2>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
               <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Unlimited access to all courses.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Unlimited course material.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Priority support from instructors.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Course completion certification.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Ad-free experience.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Access to exclusive Pro Plan community forums.</p>
              </div>
              <div className="flex w-full items-center justify-start gap-3 border border-solid border-[#F1F1F3] p-2 rounded-md mb-3">
              <div className="bg-orange-100 px-2 py-1 rounded-md"> <FontAwesomeIcon icon={faCheck} /></div>
               <p className="text-sm text-[#59595A] line-clamp-2">Early access to new courses and updates.</p>
              </div>
            </div>
          </div>
          <Link>
          <div className="py-4 bg-orange-500 w-full text-center text-white cursor-pointer rounded-b-lg ">Get Started</div>
          </Link>
        </div>
      </>)
  );
}
export default PricingCard;
