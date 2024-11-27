import React, { useState } from "react";
import PricingCard from "../components/cards/PricingCard";
import FAQ from "../components/FAQ";

function Pricing() {
  const [priceType, setPriceType] = useState("monthly");
  return (
    <>
      <div className="my-10 sm:my-20 flex flex-col items-end mx-auto w-[95%] sm:w-[90%] h-auto ">
        <div className="flex w-full h-auto flex-col custom:flex-row gap-5 custom:gap-12 max-lg:gap-14 items-start justify-around mb-16 border-b border-solid border-[#E4E4E7] pb-9 px-0 custom:px-12 max-lg:px-16">
          <h1 className="font-semibold text-4xl w-full custom:w-1/2">
            Our Pricing
          </h1>
          <p className="w-full custom:w-2/3 text-[#59595A] text-base leading-6">
            Welcome to Acadify's Pricing Plan page, where we offer two
            comprehensive options to cater to your needs: Free and Pro. We
            believe in providing flexible and affordable pricing options for our
            services. Whether you're an individual looking to enhance your
            skills or a business seeking professional development solutions, we
            have a plan that suits you. Explore our pricing options below and
            choose the one that best fits your requirements.
          </p>
        </div>

        <div className=" flex w-full justify-center items-center mb-10">
          <div className="w-[13rem] h-auto px-3 py-3 bg-white rounded-md flex gap-2 items-center justify-center mx-auto sm:mx-0">
            <div
              className={` px-4 py-2 text-center rounded-md cursor-pointer ${
                priceType === "monthly" ? "bg-orange-500 text-white" : ""
              }`}
              onClick={() => setPriceType("monthly")}
            >
              Monthly
            </div>
            <div
              className={`px-4 py-2 text-center rounded-md cursor-pointer ${
                priceType === "yearly" ? "bg-orange-500 text-white" : ""
              }`}
              onClick={() => setPriceType("yearly")}
            >
              Yearly
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col custom:flex-row items-center px-7 py-7 custom:py-14 custom:px-12 max-lg:px-20 max-lg:py-16 justify-center custom:gap-12 max-lg:gap-16 gap-10 flex-grow-0 self-stretch bg-white rounded-lg mb-10">
          <PricingCard isFree priceType={priceType} />
          <PricingCard isFree={false} priceType={priceType} />
        </div>
      </div>
      <FAQ />
    </>
  );
}

export default Pricing;
