import React from 'react';
import wantYou from '../../assets/img/wantYou.webp';

const History = () => {
    return (
        <div className="history h-[200vh] md:h-[100vh] bg-neutral-800">
            <h2 className="text-red-600/70 text-5xl font-bold text-center pt-10">Notre Histoire</h2>
            <div className="flex md:flex-row flex-col  md:justify-between gap-10 mt-20 md:mx-40 mx-10">
                <p className="text-neutral-200 text-justify md:basis-1/2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, blanditiis consequuntur culpa cupiditate dolorem eveniet fuga fugit, impedit iusto laboriosam laudantium magnam molestiae quis sapiente sed sequi veniam, veritatis!</p>
                <img src={wantYou} alt="test" className="md:basis-1/3" />
            </div>

        </div>
    );
};

export default History;