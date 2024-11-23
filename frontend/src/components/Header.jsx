import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";
import { logo } from "../assests";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import {
  signoutFailure,
  signoutStart,
  signoutSuccess,
} from "../redux/user/userSlice";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userName =
    currentUser?.user?.name ||
    currentUser?.newUser?.name ||
    currentUser?.existingUser.name ||
    "Guest";
  const userAvatar =
    currentUser?.user?.avatar ||
    currentUser?.newUser?.avatar ||
    currentUser?.existingUser.avatar ||
    "default-avatar-url";

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    try {
      dispatch(signoutStart());

      const res = await fetch("http://localhost:8000/api/v1/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensure cookies are sent
      });

      const data = await res.json().catch(() => null);

      if (!data || !res.ok || !data.success) {
        dispatch(signoutFailure(data?.message || "Failed to sign out"));
        return;
      }

      dispatch(signoutSuccess());
      navigate("/");
    } catch (error) {
      console.error("Signout error:", error);
      dispatch(
        signoutFailure(error.message || "An error occurred during signout")
      );
    }
  };

  return (
    <>
      <Link to="/courses">
        <div className="w-[95%] sm:w-[98%] mx-auto mt-5 text-center py-3 rounded-lg bg-orange-500 text-white cursor-pointer">
          <span className="mx-2">
            Free Courses🌟 Sale Ends Soon,Get It Now{" "}
          </span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Link>

      <header className="w-[95%] sm:w-[90%] rounded-md mx-auto my-5 py-5 flex border-b-[1px] border-b-gray-300 items-center justify-between bg-white">
        <div className="mx-2 flex gap-10">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="">
            <ul className="flex flex-col items-center my-3 sm:flex-row lg:space-x-4 text-sm md:text-base">
              <li className="hidden custom:block">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100 " : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hidden custom:block">
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100 " : ""}`
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li className="hidden custom:block">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100 " : ""}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="hidden custom:block">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100 " : ""}`
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li className="hidden custom:block">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100 " : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/*logout btn to be added*/}
        <div className="flex items-center mr-3 gap-x-4">
          {currentUser ? (
            <>
              <Link to="/" className="flex items-center gap-2">
                <p>Hi, {userName}</p>
                <img
                  className="rounded-full h-10 w-10 object-cover"
                  src={userAvatar}
                  alt="profile"
                />
              </Link>
              <span
                className="p-1 cursor-pointer"
                onClick={() => {
                  handleSignOut();
                }}
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" />
              </span>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button text={"Sign Up"} />
              </Link>
              <Link to="/login">
                <Button text={"Log In"} orange={true} />
              </Link>
            </>
          )}
        </div>
      </header>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-30 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={handleDropDown}
        >
          <div
            className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="flex flex-col items-center justify-center h-full gap-y-8 text-lg text-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100" : ""}`
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100" : ""}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100" : ""}`
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md ${isActive ? "bg-orange-100" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
