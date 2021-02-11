import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="p-5 md-p-l5 bg-indigo-lightest-10">
                <div className="flex flex-wrap">
                    <div className="md-w-25pc mb-10">
                        <img src="assets/images/logo.png" className="w-l5" alt="" />
                        <div className="white opacity-70 fs-s2 mt-4 md-pr-10">
                            <p>
                                Soluta voluptate et optio. Eos quasi impedit
                                sapiente aliquid eius eligendi at.
                                Necessitatibus magni et sed quod quas minima.
                            </p>
                            <br />
                            <p>
                                Soluta voluptate et optio. Eos quasi impedit
                                sapiente aliquid eius eligendi at.
                                Necessitatibus magni et sed quod quas minima.
                            </p>
                        </div>
                    </div>
                    <div className="w-100pc md-w-50pc">
                        <div className="flex justify-around">
                            <div className="w-33pc md-px-10 mb-10">
                                <h5 className="white">Company</h5>
                                <ul className="list-none mt-5 fs-s2">
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">About Us</a>
                                    </li>
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">Jobs</a>
                                    </li>
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">Contact</a>
                                    </li>
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">Media</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-33pc md-px-10 mb-10">
                                <h5 className="white">Product</h5>
                                <ul className="list-none mt-5 fs-s2">
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">About Us</a>
                                    </li>
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">Jobs</a>
                                    </li>
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">Contact</a>
                                    </li>
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">Media</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-33pc md-px-10 mb-10">
                                <h5 className="white">Support</h5>
                                <ul className="list-none mt-5 fs-s2">
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">About Us</a>
                                    </li>
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">Jobs</a>
                                    </li>
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">Contact</a>
                                    </li>
                                    <li className="my-3">
                                        <a href="#" className="white opacity-70 no-underline hover-underline">Media</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-100pc md-w-25pc">
                        <div className="flex w-75pc md-w-100pc mx-auto">
                            <input type="text" className="input flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 br-r-0" placeholder="Email Address"/>
                            <button className="button bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">Start</button>
                        </div>
                        <div className="flex justify-around my-8">
                            <a href="#" className="relative p-5 bg-indigo br-round white hover-scale-up-1 ease-400">
                                <i data-feather="twitter" className="absolute-center h-4"></i>
                            </a>
                            <a href="#" className="relative p-5 bg-indigo br-round white hover-scale-up-1 ease-400">
                                <i data-feather="facebook" className="absolute-center h-4"></i>
                            </a>
                            <a href="#" className="relative p-5 bg-indigo br-round white hover-scale-up-1 ease-400">
                                <i data-feather="instagram" className="absolute-center h-4"></i>
                            </a>
                            <a href="https://github.com/coderealistics/hook-project" className="relative p-5 bg-indigo br-round white hover-scale-up-1 ease-400">
                                <i data-feather="github" className="absolute-center h-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <a className="fixed top-50pc right-0 p-3 bg-indigo white hover-scale-up-1 ease-300 no-underline" href="#" target="_blank">
                <i className="w-4" data-feather="download"></i>
            </a>
        </>
    );
};

export default Footer;
