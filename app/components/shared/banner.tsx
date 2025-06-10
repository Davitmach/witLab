'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Login } from "./log";
import { Reg } from "./reg";

export const Banner = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playedOnce = useRef(false);
  const [activeLogin,setActiveLogin] = useState(false);
    const [activeReg,setActiveReg] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (!playedOnce.current && videoRef.current) {
                videoRef.current.play().catch(() => {});
                playedOnce.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>
        <div className="banner_container w-full flex items-center justify-center flex-col gap-[96px]">
            <div className="flex flex-col items-center justify-center gap-[40px] mt-[58px]">
                <div>
                    <p className="max-w-[430px] w-full text-center text-[#111827] font-[700] text-[60px]">
                        Your Guidance to Better Relationships
                    </p>
                </div>
                <div>
                    <button
                        style={{ backgroundImage: 'linear-gradient(90deg, #9333EA 0%, #2563EB 100%)' }}
                        className="font-[500] text-[18px] px-[32px] py-[13px] text-[white] rounded-[999999px] cursor-pointer"
                    onClick={()=> {
                        setActiveReg(true)
                    }}
                    >
                        Get started
                    </button>
                </div>
            </div>

            <div>
                <video
                    ref={videoRef}
                    width={490}
                    height={597}
                    src="/video.mp4"
                    muted
                    playsInline
                    preload="auto"
                />
            </div>
        </div>
         {activeLogin&& <Login setActiveLog={setActiveLogin} setActiveReg={setActiveReg}/>}
                {activeReg && <Reg setActiveLog={setActiveLogin} setActiveReg={setActiveReg}/>}
        </>
    );
};
