function Button({ text, orange, type = "button", loading }) {
  return (
    <button
      disabled={loading}
      type={type}
      className={`p-3 w-full rounded-md cursor-pointer text-center hover:shadow-md ${
        orange ? "bg-orange-500 px-6 text-white" : ""
      } ${loading ? "bg-gray-400 cursor-not-allowed" : ""} active:scale-95 transition-all ease-in-out duration-200`}
    >
      {loading ? "Loading..." : text}
    </button>
  );
}

export default Button;
