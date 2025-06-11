import React from 'react'

const Button = (props) => {
  return (
    <div>
       <button
          {...props}
          type="submit"
          className="w-full cursor-pointer rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
        >
        {props.value}
        </button>
    </div>
  )
}

export default Button;
