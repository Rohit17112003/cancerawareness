import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        {...props}
        type="submit"
        className={`w-full cursor-pointer rounded-md bg-pink-600 px-4 py-2 font-semibold text-white hover:bg-pink-700`}
      >
        <span>
          <i className="ri-add-fill"></i>
        </span>
        {props.value}
      </button>
    </div>
  );
};

export default Button;
