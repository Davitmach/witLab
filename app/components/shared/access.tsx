'use client'

import { useState } from "react";
import { Login } from "./log";
import { Reg } from "./reg";

export const Access = ()=> {
        const [activeLogin,setActiveLogin] = useState(false);
        const [activeReg,setActiveReg] = useState(false);
    return(
        <>
        <div className="flex gap-[78px] items-center justify-center flex-col Access_container max-w-[1440px] w-full mx-auto px-[80px] py-[130px]">
            <div><h1 className="text-[#111827] font-[700] text-[60px] logo">Getting access</h1></div>
            <div className="mt-[70px]  flex gap-[32px]  ">
                <div className="!pt-[33px]">
                    <div className="bg-[#6366F1] icon_box">
                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_33)">
<path d="M9 0C7.04063 0 5.37187 1.25156 4.75781 3H3C1.34531 3 0 4.34531 0 6V21C0 22.6547 1.34531 24 3 24H15C16.6547 24 18 22.6547 18 21V6C18 4.34531 16.6547 3 15 3H13.2422C12.6281 1.25156 10.9594 0 9 0ZM9 3C9.39782 3 9.77936 3.15804 10.0607 3.43934C10.342 3.72064 10.5 4.10218 10.5 4.5C10.5 4.89782 10.342 5.27936 10.0607 5.56066C9.77936 5.84196 9.39782 6 9 6C8.60218 6 8.22064 5.84196 7.93934 5.56066C7.65804 5.27936 7.5 4.89782 7.5 4.5C7.5 4.10218 7.65804 3.72064 7.93934 3.43934C8.22064 3.15804 8.60218 3 9 3ZM3.375 12.75C3.375 12.4516 3.49353 12.1655 3.7045 11.9545C3.91548 11.7435 4.20163 11.625 4.5 11.625C4.79837 11.625 5.08452 11.7435 5.2955 11.9545C5.50647 12.1655 5.625 12.4516 5.625 12.75C5.625 13.0484 5.50647 13.3345 5.2955 13.5455C5.08452 13.7565 4.79837 13.875 4.5 13.875C4.20163 13.875 3.91548 13.7565 3.7045 13.5455C3.49353 13.3345 3.375 13.0484 3.375 12.75ZM8.25 12H14.25C14.6625 12 15 12.3375 15 12.75C15 13.1625 14.6625 13.5 14.25 13.5H8.25C7.8375 13.5 7.5 13.1625 7.5 12.75C7.5 12.3375 7.8375 12 8.25 12ZM3.375 17.25C3.375 16.9516 3.49353 16.6655 3.7045 16.4545C3.91548 16.2435 4.20163 16.125 4.5 16.125C4.79837 16.125 5.08452 16.2435 5.2955 16.4545C5.50647 16.6655 5.625 16.9516 5.625 17.25C5.625 17.5484 5.50647 17.8345 5.2955 18.0455C5.08452 18.2565 4.79837 18.375 4.5 18.375C4.20163 18.375 3.91548 18.2565 3.7045 18.0455C3.49353 17.8345 3.375 17.5484 3.375 17.25ZM7.5 17.25C7.5 16.8375 7.8375 16.5 8.25 16.5H14.25C14.6625 16.5 15 16.8375 15 17.25C15 17.6625 14.6625 18 14.25 18H8.25C7.8375 18 7.5 17.6625 7.5 17.25Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_33">
<path d="M0 0H18V24H0V0Z" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
                    <div className="flex flex-col items-center justify-center gap-[0px]">
                        <div className="points bg-[#6366F1]">1</div>
                        <div className="w-full mt-[11px]"><h1  className=" text-center text-[#1E293B] font-[700] text-[20px]">Take the introductory test</h1></div>
                        <div className="mt-[13px]"><p>Answer a few questions about yourself and your relationships</p></div>
                    </div>
                </div>
                <div>
                    <div className="icon_box" style={{background: 'linear-gradient(90deg, #EC4899 0%, #F43F5E 100%)'}}><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_45)">
<path d="M3.5 1.5C1.84531 1.5 0.5 2.84531 0.5 4.5V6H27.5V4.5C27.5 2.84531 26.1547 1.5 24.5 1.5H3.5ZM27.5 10.5H0.5V19.5C0.5 21.1547 1.84531 22.5 3.5 22.5H24.5C26.1547 22.5 27.5 21.1547 27.5 19.5V10.5ZM5.75 16.5H8.75C9.1625 16.5 9.5 16.8375 9.5 17.25C9.5 17.6625 9.1625 18 8.75 18H5.75C5.3375 18 5 17.6625 5 17.25C5 16.8375 5.3375 16.5 5.75 16.5ZM11 17.25C11 16.8375 11.3375 16.5 11.75 16.5H17.75C18.1625 16.5 18.5 16.8375 18.5 17.25C18.5 17.6625 18.1625 18 17.75 18H11.75C11.3375 18 11 17.6625 11 17.25Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_45">
<path d="M0.5 0H27.5V24H0.5V0Z" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
                    <div className="flex flex-col items-center justify-center gap-[0px] ">
                        <div className="points bg-[#EC4899]">2</div>
                        <div className="w-full mt-[11px]"><h1>Set up your payment method</h1></div>
                        <div className="mt-[13px]"><p>Add your preferred payment method for seamless access</p></div>
                    </div>
                </div>
                <div className="!pb-[3px]">
                    <div className="icon_box" style={{background: 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)'}}><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_57)">
<path d="M15.3547 0.84375C15.1062 0.328125 14.5812 0 14.0047 0C13.4281 0 12.9078 0.328125 12.6547 0.84375L9.64061 7.04531L2.90936 8.03906C2.34686 8.12344 1.87811 8.51719 1.70467 9.05625C1.53123 9.59531 1.67186 10.1906 2.07498 10.5891L6.95936 15.4219L5.80623 22.2516C5.71248 22.8141 5.94686 23.3859 6.41092 23.7188C6.87498 24.0516 7.48905 24.0938 7.9953 23.8266L14.0094 20.6156L20.0234 23.8266C20.5297 24.0938 21.1437 24.0562 21.6078 23.7188C22.0719 23.3813 22.3062 22.8141 22.2125 22.2516L21.0547 15.4219L25.939 10.5891C26.3422 10.1906 26.4875 9.59531 26.3094 9.05625C26.1312 8.51719 25.6672 8.12344 25.1047 8.03906L18.3687 7.04531L15.3547 0.84375Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_57">
<path d="M0.5 0H27.5V24H0.5V0Z" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
                    <div className="flex flex-col items-center justify-center gap-[0px]">
                        <div className="points bg-[#3B82F6]">3</div>
                        <div><h1>Personalized Recommendations</h1></div>
                        <div className="mt-[30px]"><p>Based on your answers, you'll receive a detailed psychological profile and personalized advice</p></div>
                    </div>
                </div>
                <div className="!pb-[3px]">
                    <div className="bg-[#D1D5DB] icon_box"><svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_70)">
<path d="M9.75002 16.5C15.136 16.5 19.5 12.8062 19.5 8.25C19.5 3.69375 15.136 0 9.75002 0C4.36409 0 2.47395e-05 3.69375 2.47395e-05 8.25C2.47395e-05 10.0594 0.689087 11.7328 1.85627 13.0969C1.69221 13.5375 1.44846 13.9266 1.19065 14.2547C0.96565 14.5453 0.735962 14.7703 0.567212 14.925C0.482837 15 0.412525 15.0609 0.36565 15.0984C0.342212 15.1172 0.323462 15.1312 0.314087 15.1359L0.304712 15.1453C0.0468997 15.3375 -0.0656003 15.675 0.0375247 15.9797C0.14065 16.2844 0.426587 16.5 0.750025 16.5C1.7719 16.5 2.80315 16.2375 3.66096 15.9141C4.09221 15.75 4.49534 15.5672 4.8469 15.3797C6.28596 16.0922 7.9594 16.5 9.75002 16.5ZM21 8.25C21 13.5141 16.3547 17.4797 10.8516 17.9531C11.9906 21.4406 15.7688 24 20.25 24C22.0406 24 23.7141 23.5922 25.1578 22.8797C25.5094 23.0672 25.9078 23.25 26.3391 23.4141C27.1969 23.7375 28.2281 24 29.25 24C29.5735 24 29.8641 23.7891 29.9625 23.4797C30.061 23.1703 29.9531 22.8328 29.6907 22.6406L29.6813 22.6312C29.6719 22.6219 29.6531 22.6125 29.6297 22.5938C29.5828 22.5562 29.5125 22.5 29.4281 22.4203C29.2594 22.2656 29.0297 22.0406 28.8047 21.75C28.5469 21.4219 28.3031 21.0281 28.1391 20.5922C29.3063 19.2328 29.9953 17.5594 29.9953 15.7453C29.9953 11.3953 26.0156 7.82812 20.9672 7.51875C20.986 7.75781 20.9953 8.00156 20.9953 8.24531L21 8.25Z" fill="#6B7280"/>
</g>
<defs>
<clipPath id="clip0_1_70">
<path d="M0 0H30V24H0V0Z" fill="white"/>
</clipPath>
</defs>
</svg>

</div>
                    <div className="flex flex-col items-center justify-center gap-[0px]">
                        <div className="points bg-[#9CA3AF]">4</div>
                        <div><h1>Personal Consultation</h1></div>
                        <div className="mt-[30px]"><p>Connect with a relationship expert to explore your situation in more depth</p></div>
                    </div>
                </div>
            </div>
            <div><button className="bg rounded-[999999px]  text-white font-[500] text-[18px] w-[212px] h-[52px] cursor-pointer" onClick={()=> {
                setActiveReg(true)
            }}>Get Access</button></div>
        </div>
         {activeLogin&& <Login setActiveLog={setActiveLogin} setActiveReg={setActiveReg}/>}
                {activeReg && <Reg setActiveLog={setActiveLogin} setActiveReg={setActiveReg}/>}
        </>

    )
}