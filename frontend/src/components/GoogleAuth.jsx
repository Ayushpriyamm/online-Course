import React from "react";
import { ggl } from "../assests/index";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export const GoogleAuth = ({text}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    console.log("button clicked");

    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("http://localhost:8000/api/v1/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to sign in. Server returned an error.");
      }

      const data = await res.json();
      if (data.success == false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));

      navigate("/courses", { replace: true });
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="w-full sm:h-[49px] mx-auto flex justify-center items-center gap-4 rounded-lg bg-[#F1F1F3] cursor-pointer hover:shadow-md active:scale-95 transition-all ease-in-out duration-200 py-3 order-2"
      >
        <img src={ggl} />
        <span>{text}</span>
      </button>
    </>
  );
};
