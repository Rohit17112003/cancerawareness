import React from "react";

const BackButton = (props) => {
  return (
    <div>
      <button
        {...props}
        className="text-textwhite mb-4 cursor-pointer rounded-md bg-pink-500 px-4 py-2 text-sm hover:bg-pink-600"
      >
        <span>
          <i className="ri-arrow-left-line"></i>
        </span>{" "}
        {props.value}
      </button>
    </div>
  );
};

export default BackButton;
