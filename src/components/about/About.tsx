import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className="text-red-600 text-5xl font-bold text-center my-12">A Propos</h1>
            <div className="flex flex-col mx-10 gap-20 md:grid md:grid-cols-2 md:grid-rows-6 md:gap-32">
                <div className="text-center self-center mx-10 flex flex-col items-center gap-2.5">
                    <span className="text-red-600 text-4xl font-semibold ">9</span>
                    <p className="text-xl">planètes accueillent nos installations</p>
                </div>
                <div
                    className="text-center self-center md:row-start-2 md:col-start-2 mx-10 flex flex-col items-center gap-2.5">
                    <p className="text-red-600 text-4xl font-semibold">640 000 <i
                        className="text-sm text-white align-super">*</i></p>
                    <p className="text-xl">collaborateurs</p>
                </div>
                <div
                    className="self-center md:row-start-3 md:col-start-1 mx-10 text-center flex flex-col items-center gap-2.5">
                    <span className="text-red-600 text-4xl font-semibold">100%</span>
                    <p className="text-xl">de retour des vaiseaux d'interventions</p>
                </div>
                <div
                    className="text-center self-center md:row-start-4 md:col-start-2 mx-10 flex flex-col items-center gap-2.5">
                    <span className="text-red-600 text-4xl font-semibold ">100%</span>
                    <p className="text-xl">de nos collaborateurs satisfaits</p>
                </div>
                <div
                    className="self-center md:row-start-5 md:col-start-1 mx-10 text-center flex flex-col items-center gap-2.5">
                    <span className="text-red-600 text-4xl font-semibold">18</span>
                    <p className="text-xl">races intersidérales parmis nos membres</p>
                </div>
                <p className="self-center md:row-start-6 md:col-start-1 mx-10 text-center text-xs mb-10"><span className="align-super">* </span>
                    chiffres basé sur novembre 2023
                </p>
            </div>

        </div>
    );
};

export default About;