import React from "react";


const Navbar = () => {
  return (
    
    <div className="container pt-10">   
    <div className="flex justify-between items-center">
        <div className="text-xl font-medium">GenAI Engineer</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>     
    </div>
    </div> 
  );
};

export default Navbar;