import React from "react";

const Subscribe = () => {
    return (
        <div>
            <section className="p-10 md-p-l5">
                <div className="br-8 bg-indigo-lightest-10 p-5 md-p-l5 flex flex-wrap md-justify-between md-items-center">
                    <div className="w-100pc md-w-33pc">
                        <h2 className="white fs-m4 fw-800">Try Hook today</h2>
                        <p className="fw-600 indigo-lightest opacity-40">
                            Get first month free for commercial use. Forever
                            free for open source products.
                        </p>
                    </div>
                    <div className="w-100pc md-w-50pc">
                        <div className="flex my-5">
                            <input
                                type="text"
                                className="input-lg flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 br-r-0"
                                placeholder="Email Address"
                            />
                            <button className="button-lg bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscribe;
