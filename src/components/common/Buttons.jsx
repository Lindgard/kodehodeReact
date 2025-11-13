import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className='bg-amber-200 text-black px-2 py-1 rounded-md
          border-2 border-amber-950 font-semibold'
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
