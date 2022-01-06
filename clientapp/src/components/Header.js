import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-slate-200 w-full">
            {/*<Link to={`/episodes/:${0}`}></Link>*/}
            <h1 className="text-3xl text-gray-600 font-bold m-20">
                The Breaking Bad
            </h1>
        </header>
    );
};

export default Header;