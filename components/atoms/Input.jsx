import React from "react";

const Input = (props) => {
  return (
    <div>
      {props.lable && (
        <label className="text-primary pb-1 font-medium">{props.lable}</label>
      )}

      <input
        {...props}
        className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
      />
    </div>
  );
};

export default Input;
