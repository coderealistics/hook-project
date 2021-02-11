import React from 'react'

const Slider = () => {
    return (
        <div className="sl-row">
            <section className="relative bg-indigo-lightest-10">
        <div id="slider-1">
            <div className="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
                <h2 className="white fs-l3 fw-900">Lorem ipsum dolor sit amet, consectetur</h2>
                <p className="indigo-lightest fw-600  opacity-30 my-5">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor </p>
                <a href="#" className="button-md bg-indigo white fs-s3 br-4 black fw-600 no-underline m-5">BUY NOW</a>
            </div>
            <div className="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
                <h2 className="white fs-l3 fw-900">Lorem ipsum dolor sit amet, consectetur</h2>
                <p className="indigo-lightest fw-600 opacity-30 my-5">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor </p>
                <a href="#" className="button-md bg-indigo white fs-s3 br-4 black fw-600 no-underline m-5">BUY NOW</a>
            </div>
            <div className="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
                <h2 className="white fs-l3 fw-900">Lorem ipsum dolor sit amet, consectetur</h2>
                <p className="indigo-lightest fw-600 opacity-30 my-5">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor </p>
                <a href="#" className="button-md bg-indigo white fs-s3 br-4 black fw-600 no-underline m-5">BUY NOW</a>
            </div>
        </div>
        <ul className="absolute list-none w-100pc flex justify-between top-50pc">
            <li><button
                    className="prev ml-10 br-round border-indigo-lightest indigo-lightest  bg-transparent flex justify-center items-center p-2 focus-indigo-lighter outline-none"><i
                        data-feather="chevron-left"></i></button></li>
            <li><button
                    className="next mr-10 br-round border-indigo-lightest indigo-lightest  bg-transparent flex justify-center items-center p-2  focus-indigo-lighter outline-none"><i
                        data-feather="chevron-right"></i></button></li>
        </ul>
    </section>
        </div>
    )
}

export default Slider
