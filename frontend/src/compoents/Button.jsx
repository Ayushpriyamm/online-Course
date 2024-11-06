import React from "react";

function Button({ text, orange, type = "button", loading }) {
  return (
    <button
      disabled={loading}
      type={type}
      className={`p-3 rounded-md cursor-pointer text-center hover:shadow-md ${
        orange ? "bg-orange-500 px-6 text-white" : ""
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
