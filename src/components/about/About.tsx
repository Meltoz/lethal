import React from 'react';

const About = () => {
    return (
        <div className="h-[100vh]">
            <h1 className="text-red-600/70 text-5xl font-bold text-center pt-10 mb-10">A Propos</h1>
            <div className="flex flex-col gap-10 mx-10 md:grid md:grid-cols-2 md:grid-rows-5">
                <div className="text-center self-center mx-10 flex flex-col items-center gap-2.5">
                    <span className="text-red-600 text-4xl font-semibold ">9</span>
                    <p className="text-xl">planètes accueillent nos installations</p>
                </div>
                <div
                    className="text-center self-center md:row-start-2 md:col-start-2 mx-10 flex flex-col items-center gap-2.5">
                    <p className="text-red-600 text-4xl font-semibold">640 000 <i className="text-sm text-white align-super">*</i></p>
                    <p className="text-xl">collaborateurs</p>
                </div>
                <div
                    className="text-center self-center md:row-start-3 md:col-start-1 mx-10 text-center flex flex-col items-center gap-2.5">
                    <span className="text-red-600 text-4xl font-semibold">640 000 </span>
                    <p className="text-xl">collaborateurs</p>
                </div>
                <div
                    className="text-center self-center md:row-start-4 md:col-start-2 mx-10 flex flex-col items-center gap-2.5">
                    <span className="text-red-600 text-4xl font-semibold ">9</span>
                    <p className="text-xl">planètes accueillent nos installations</p>
                </div>
                <div
                    className="self-center md:row-start-5 md:col-start-1 mx-10 text-center flex flex-col items-center gap-2.5">
                    <span className="text-red-600 text-4xl font-semibold">640 000</span>
                    <p className="text-xl">collaborateurs</p>
                </div>
            </div>
        </div>
    );
};

export default About;