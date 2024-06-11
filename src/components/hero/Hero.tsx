import React, {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import './Hero.css';

const Hero = () => {
    const title = useRef()

    useGSAP(() =>
        gsap.to(title.current, {opacity: 1, duration:1, ease: 'power1.in'}),
    )

    return (
        <div className="h-[100vh] bg-black">

            <div className="h-[96vh] flex flex-col gap-10 items-center justify-center bg-black">
                <p ref={title}
                    className="text-red-600 font-extrabold text-7xl border-[14px] border-red-600 px-10 py-4 opacity-0"
                >COMPANY</p>
            </div>
            <p className="text-lg text-center scroll">[↓ Scroll to discover ↓]</p>
        </div>
    );
};

export default Hero;