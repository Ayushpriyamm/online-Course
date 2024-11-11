import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { fbIm, lnIm, logo } from "../assests";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <footer className="bg-white">
        <div className="flex flex-col sm:flex-row bg-white px-10 py-5 sm:justify-around gap-5 sm:gap-2 ">
          <div className=" pt-6">
            <div className="mb-5">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="flex flex-col gap-y-3 text-lg text-gray-700">
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> priyarjunm@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +91 8287260465
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> Delhi
              </p>
            </div>
          </div>
          <div className="pt-6 ">
            <h2 className="font-bold text-xl pb-3 text-gray-800 cursor-pointer" onClick={scrollToTop}>Home</h2>
            <ul className="list-none space-y-2 text-lg text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">Benefits</li>
              <li className="hover:text-gray-800 cursor-pointer">
                Our Courses
              </li>
              <li className="hover:text-gray-800 cursor-pointer">
                Our Testimonials
              </li>
              <li className="hover:text-gray-800 cursor-pointer">Our FAQ</li>
            </ul>
          </div>

          <div className="pt-6">
            <Link to="/about">
            <h2 className="font-bold text-xl pb-3 text-gray-800">About Us</h2></Link>
            <ul className="list-none space-y-2 text-lg text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">Company</li>
              <li className="hover:text-gray-800 cursor-pointer">
                Achievements
              </li>
              <li className="hover:text-gray-800 cursor-pointer">Our Goals</li>
            </ul>
          </div>

          <div className="pt-6">
            <h2 className="font-bold text-xl pb-3 text-gray-800">
              Social Profiles
            </h2>
            <div className="flex gap-x-3">
              <div>
                <img className="cursor-pointer" src={fbIm} alt="Facebook" />
              </div>
              <div>
                <img className="cursor-pointer" src={lnIm} alt="LinkedIn" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-7 mx-10 border-t-2 border-gray-200">
          <p className="text-center text-md sm:text-xs text-gray-600">
            &#169; 2024 PRIYARJUNM. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
