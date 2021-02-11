import React from 'react'

const Hero = () => {
    return (
        <>
            <section id="home" className="min-h-100vh flex justify-start items-center">
                <div className="mx-5 md-mx-l5">
                    <div className="inline-block br-round bg-indigo-30 indigo-lightest p-2 fs-s2 mb-5">
                        <div className="inline-block bg-indigo indigo-lightest br-round px-3 py-1 mr-3 fs-s3">Join Meet Up</div>
                        We are coming to Singapore. Learn more…
                    </div>
                    <div>
                        <h1 className="white fs-13 lh-2 md-fs-xl1 md-lh-1">Serve Your <br/>Website Fast</h1>
                        <div className="br-8 mt-10 inline-flex">
                            <input type="text" className="input-lg half bw-0 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 py-5 min-w-25vw br-r-0" placeholder="Email Address"/>
                            <button className="button-lg bg-indigo-lightest-20 indigo-lightest focus-white fw-300 fs-s3 mr-0 br-l-0">Get Started</button>
                        </div>
                        <div className="white opacity-20 fs-s3 mt-3">No credit card required</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
