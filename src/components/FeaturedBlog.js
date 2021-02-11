import React, { useState } from "react";

export const FeaturedBlog = () => {
    const [state] = useState({
        image: "/assets/images/nicholas-kwok-VBWWscZtszY-unsplash.jpg",
    });
    return (
        <div>
            <section className="p-10 md-p-l10">
                <div className="md-w-75pc">
                    <h2 className="white fs-l3 fw-900 lh-1">
                        Lorem ipsum dolor sit amet, consectetur
                    </h2>
                    <p className="indigo-lightest fw-600 fs-m1 opacity-50 my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{" "}
                    </p>
                </div>
                <div className="relative w-100pc h-75vh bg-cover bg-b" style={{ backgroundImage: `url(${state.image})`}}>
                    <a href="#" className="bg-white black px-5 py-3 absolute right-0 bottom-0 hover-bg-black hover-white ease-500 flex justify-center items-center after-arrow-right no-underline fs-m1"></a>
                </div>
            </section>
        </div>
    );
};
