import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
return (
    <div className="flex flex-row-reverse shadow-md bg-[#223a59] justify-between border h-20 items-center px-4">
        <div className="text-2xl px-6 font-semibold text-white font-raleway">Weather Station</div>
        <div className="text-2xl font-semibold text-white font-raleway flex flex-row-reverse items-center gap-3">
            Politeknik Negeri Ujung Pandang
            <img src={logo} alt="" className="w-16 h-16 align-middle" />
        </div>
    </div>
);
};

export default Navbar;
