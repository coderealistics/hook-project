import React from "react";

const Header = () => {
    return (
        <>
            <nav className="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
            <div className="flex justify-between">
                <a href="#" className="flex items-center p-2 mr-4 no-underline">
                    <img className="max-h-l2 w-auto" src="assets/images/logo.png" alt="logo" />
                </a>
                <a data-toggle="toggle-nav" data-target="#nav-items" href="#nav-items" className="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3">
                    <i data-feather="menu"></i>
                </a>
            </div>
            <div id="nav-items" className="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center">
                <a href="#home" className="ahref fs-s1 mx-3 py-3 indigo no-underline">Home</a>
                <a href="#features" className="ahref fs-s1 mx-3 py-3 indigo no-underline">Features</a>
                <a href="#pricing" className="ahref fs-s1 mx-3 py-3 indigo no-underline">Pricing</a>
                <a href="#blog" className="ahref fs-s1 mx-3 py-3 indigo no-underline">Blog</a>
                <a href="#" className="button bg-white black fw-600 no-underline mx-5">Register</a>
            </div>
        </nav>
        </>
    );
};

export default Header;
