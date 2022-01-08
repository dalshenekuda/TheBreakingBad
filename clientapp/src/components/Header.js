import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-slate-200 w-full">
            <Link to="/" className="md:text-5xl text-3xl text-gray-600 font-bold md:m-20 m-12  block transition ease-in-out delay-150  hover:scale-90 hover:text-black duration-300">
                The Breaking Bad
            </Link>
        </header>
    );
};

export default Header;