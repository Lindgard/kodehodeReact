import React from "react";
import Button from "../common/Buttons.jsx";

const Header = () => {
  return (
    <header
      className='bg-amber-600 h-20 flex 
      justify-end items-center px-2'>
      <nav className='flex gap-2'>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </nav>
    </header>
  );
};

export default Header;
