import React from 'react';

const JoinUs = () => {
    return (
        <div className="history  bg-neutral-800">
            <h2 className="text-red-600 text-5xl font-bold text-center pt-10">Rejoignez-nous</h2>
            <div className="flex items-center justify-center h-[20vh]">
                <button className="text-white/80 font-bold text-xl border-red-700 border-4 bg-red-600/80 px-14 py-4 uppercase hover:bg-red-800 hover:text-white focus:ring-2 focus:ring-offset-2 ring-offset-transparent ring-red-500">
                    Rejoindre COMPANY
                </button>
            </div>
        </div>
    );
};

export default JoinUs;