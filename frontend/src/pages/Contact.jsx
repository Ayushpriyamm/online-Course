import React from "react";
import { fbIm, lnIm, loc, mail, phone } from "../assests";


function Contact() {
  return (
    <div className="mt-10 sm:mt-20 flex flex-col items-end mx-auto w-[95%] sm:w-[90%] h-auto ">
      <div className="flex w-full h-auto flex-col custom:flex-row gap-5 custom:gap-12 max-lg:gap-14 items-start justify-around border-b border-solid border-[#E4E4E7] pb-9 px-0 custom:px-12 max-lg:px-16">
        <h1 className="font-semibold text-4xl w-full custom:w-1/2">
          Contact Us
        </h1>
        <p className="w-full custom:w-2/3 text-[#59595A] text-base leading-6">
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>

      <div className="w-full flex flex-col custom:flex-row my-10 gap-[3px] items-stretch">
        <form className="bg-white rounded-lg flex flex-col gap-8 items-center justify-between p-8 custom:p-12 max-lg:p-16 w-full">
          <div className="w-full flex gap-6 flex-col">
            <div className="flex flex-col custom:flex-row gap-5">
            <div className="flex flex-col items-start justify-between gap-2 flex-1">
              <label htmlFor="firstname" className="font-medium">FirstName</label>
              <input className="flex flex-row items-center px-[18px] py-[20px] sm:py-[30px] sm:px-[20px] border-[1px] border-solid border-[#F1F1F3] rounded-lg  sm:h-10 bg-[#FCFCFD] text-[#656567]
                focus:outline-orange-200 focus:bg-orange-100
                focus:text-black self-stretch" required type="text" name="firstname" id="firstname" placeholder="Enter First Name" />
              </div>
              <div className="flex flex-col items-start justify-between gap-2 flex-1">
              <label htmlFor="lastname" className="font-medium">LastName</label>
              <input className="flex flex-row items-center px-[18px] py-[20px] sm:py-[30px] sm:px-[20px] border-[1px] border-solid border-[#F1F1F3] rounded-lg  sm:h-10 bg-[#FCFCFD] text-[#656567]
                focus:outline-orange-200 focus:bg-orange-100
                focus:text-black self-stretch" required type="text" name="lastname" id="lastname" placeholder="Enter Last Name" />
              </div>
            </div>
            <div className="flex flex-col custom:flex-row gap-5">
            <div className="flex flex-col items-start justify-between gap-2 flex-1">
             <label htmlFor="email" className="font-medium">Email</label>
             <input className="flex flex-row items-center px-[18px] py-[20px] sm:py-[30px] sm:px-[20px] border-[1px] border-solid border-[#F1F1F3] rounded-lg  sm:h-10 bg-[#FCFCFD] text-[#656567]
                focus:outline-orange-200 focus:bg-orange-100
                focus:text-black self-stretch" required type="email" name="email" id="email" placeholder="Enter your Email" />
             </div>
             <div className="flex flex-col items-start justify-between gap-2 flex-1">
             <label htmlFor="phone" className="font-medium">Phone</label>
             <input className="flex flex-row items-center px-[18px] py-[20px] sm:py-[30px] sm:px-[20px] border-[1px] border-solid border-[#F1F1F3] rounded-lg  sm:h-10 bg-[#FCFCFD] text-[#656567]
                focus:outline-orange-200 focus:bg-orange-100
                focus:text-black self-stretch" required type="tel" name="phone" id="phone" placeholder="Enter Phone Number" pattern="\d{10}"/>
             </div>
            </div>
            <div className="w-full flex flex-col">
            <div className="flex flex-col items-start justify-between gap-2">
             <label htmlFor="subject" className="font-medium">Subject</label>
             <input className="flex flex-row items-center px-[18px] py-[20px] sm:py-[30px] sm:px-[20px] border-[1px] border-solid border-[#F1F1F3] rounded-lg  sm:h-10 bg-[#FCFCFD] text-[#656567]
                focus:outline-orange-200 focus:bg-orange-100
                focus:text-black self-stretch" required type="text" name="subject" id="subject" placeholder="Enter your Subject"/>
             </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="message" className="font-medium text-lg">Message</label>
            <input className=" flex flex-row items-center px-[18px] py-[20px] sm:py-[30px] sm:px-[20px] border-[1px] border-solid border-[#F1F1F3] rounded-lg h-36 sm:h-48 bg-[#FCFCFD] text-[#656567]
                focus:outline-orange-200 focus:bg-orange-100
                focus:text-black self-stretch
                placeholder:absolute placeholder:top-4" required type="message" name="message" id="message" placeholder="Enter your Message here..."/>
                
          </div>
          <div className="w-full flex items-center justify-center"><button className="bg-orange-500 text-white px-5 py-4 rounded-md">Send Your Message</button></div>
        </form>


        <div className="flex flex-col gap-5 items-center  bg-white rounded-lg p-8 custom:p-12 max-lg:p-16 ">
          <div className="bg-[#FCFCFD] w-full p-10 custom:p-8 max-lg:p-10 flex flex-col gap-4 items-center justify-center border border-solid border-[#F1F1F3] rounded-md">
              <div className="cursor-pointer"><img src={mail}/></div>
              <p className="font-medium text-[#59595A]">support@priyarjunm.com</p>
          </div>
          <div className="bg-[#FCFCFD] w-full p-10 custom:p-8 max-lg:p-10 flex flex-col gap-4 items-center justify-center border border-solid border-[#F1F1F3] rounded-md">
              <div className="cursor-pointer"><img src={phone}/></div>
              <p className="font-medium text-[#59595A]">+91 8287260465</p>
          </div>
          <div className="bg-[#FCFCFD] w-full p-10 custom:p-8 max-lg:p-10 flex flex-col gap-4 items-center justify-center border border-solid border-[#F1F1F3] rounded-md">
              <div className="cursor-pointer"><img src={loc}/></div>
              <p className="font-medium text-[#59595A]">New Delhi, Delhi</p>
          </div>
          <div className="bg-[#FCFCFD] w-full p-10 custom:p-8 max-lg:p-10 flex flex-col gap-4 items-center justify-center border border-solid border-[#F1F1F3] rounded-md">
              <div className="flex items-center justify-center gap-2">
                <div className="cursor-pointer"><img src={fbIm}/></div>
                <div className="cursor-pointer"><img src={lnIm}/></div>
              </div>
              <p className="font-medium text-[#59595A]">Social Profiles</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
