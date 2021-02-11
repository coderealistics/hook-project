import React from "react";

const Blog = () => {
    return (
        <div>
            <section className="p-0 md-p-5">
                <div className="flex flex-wrap">
                    <div className="w-100pc md-w-33pc p-10">
                        <a
                            href="#"
                            className="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300"
                        >
                            <img
                                className="w-100pc"
                                src="assets/images/yoann-siloine-dyaxQ-aoGWY-unsplash.jpg"
                                alt=""
                            />
                            <p className="fw-600 white fs-m3 mt-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed…
                            </p>
                            <div className="indigo fs-s3 italic after-arrow-right my-4">
                                3 days ago by Jeff
                            </div>
                        </a>
                    </div>
                    <div className="w-100pc md-w-33pc p-10">
                        <a
                            href="#"
                            className="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300"
                        >
                            <img
                                className="w-100pc"
                                src="assets/images/fabrice-villard-Jrl_UQcZqOc-unsplash.jpg"
                                alt=""
                            />
                            <p className="fw-600 white fs-m3 mt-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed…
                            </p>
                            <div className="indigo fs-s3 italic after-arrow-right my-4">
                                3 days ago by Jeff
                            </div>
                        </a>
                    </div>
                    <div className="w-100pc md-w-33pc p-10">
                        <a
                            href="#"
                            className="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300"
                        >
                            <img
                                className="w-100pc"
                                src="assets/images/florian-klauer-mk7D-4UCfmg-unsplash.jpg"
                                alt=""
                            />
                            <p className="fw-600 white fs-m3 mt-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed…
                            </p>
                            <div className="indigo fs-s3 italic after-arrow-right my-4">
                                3 days ago by Jeff
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
