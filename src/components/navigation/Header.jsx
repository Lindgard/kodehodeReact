import React from "react";
import Button from "../common/Buttons.jsx";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

const Header = () => {
  return (
    <header
      className='bg-amber-600 h-20 flex 
      justify-between items-center px-2'>
      <div className='flex'>
        <img
          src={reactLogo}
          alt=''
        />
        <img
          src={viteLogo}
          alt=''
        />
      </div>
      <nav className='flex gap-2'>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </nav>
    </header>
  );
};

export default Header;
