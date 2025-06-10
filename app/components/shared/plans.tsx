'use client';
import Link from "next/link"
import { useState } from "react";
import { Reg } from "./reg";
import { Login } from "./log";

export const Plans = ()=> {
     const [activeReg,setActiveReg] = useState(false);
      const [activeLogin,setActiveLogin] = useState(false);
    return(
      <>
        <div className="plans_container max-w-[1440px] !mx-auto w-full ">
<div className="px-[100px] py-[44px] flex flex-col items-center justify-center gap-[44px]">
    <div><h1 className="max-w-[1020px] font-[700] text-[60px] text-[#111827] text-center">Start Your Personalized 7-Day Experience</h1></div>
    <div className="grid grid-cols-2 space-y-[23px] space-x-[78px]">
        <div className="flex gap-[15px] w-full">
            <div><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.141 0.882812C10.9547 0.496094 10.5609 0.25 10.1285 0.25C9.6961 0.25 9.30586 0.496094 9.11602 0.882812L6.85547 5.53398L1.80704 6.2793C1.38516 6.34258 1.0336 6.63789 0.903519 7.04219C0.773441 7.44648 0.87891 7.89297 1.18125 8.1918L4.84454 11.8164L3.97969 16.9387C3.90938 17.3605 4.08516 17.7895 4.43321 18.0391C4.78125 18.2887 5.2418 18.3203 5.62149 18.1199L10.132 15.7117L14.6426 18.1199C15.0223 18.3203 15.4828 18.2922 15.8309 18.0391C16.1789 17.7859 16.3547 17.3605 16.2844 16.9387L15.416 11.8164L19.0793 8.1918C19.3816 7.89297 19.4906 7.44648 19.357 7.04219C19.2234 6.63789 18.8754 6.34258 18.4535 6.2793L13.4016 5.53398L11.141 0.882812Z" fill="#2563EB"/>
</svg>
</div>
            <div><p className=" max-w-[420px] w-full font-[600] text-[#6E6E73] text-[16px]">Take a quiz to uncover your unique relationship patterns</p></div>
        </div>
        <div className="flex gap-[15px] w-full">
            <div><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.141 0.882812C10.9547 0.496094 10.5609 0.25 10.1285 0.25C9.6961 0.25 9.30586 0.496094 9.11602 0.882812L6.85547 5.53398L1.80704 6.2793C1.38516 6.34258 1.0336 6.63789 0.903519 7.04219C0.773441 7.44648 0.87891 7.89297 1.18125 8.1918L4.84454 11.8164L3.97969 16.9387C3.90938 17.3605 4.08516 17.7895 4.43321 18.0391C4.78125 18.2887 5.2418 18.3203 5.62149 18.1199L10.132 15.7117L14.6426 18.1199C15.0223 18.3203 15.4828 18.2922 15.8309 18.0391C16.1789 17.7859 16.3547 17.3605 16.2844 16.9387L15.416 11.8164L19.0793 8.1918C19.3816 7.89297 19.4906 7.44648 19.357 7.04219C19.2234 6.63789 18.8754 6.34258 18.4535 6.2793L13.4016 5.53398L11.141 0.882812Z" fill="#2563EB"/>
</svg>
</div>
            <div><p className=" max-w-[420px] w-full font-[600] text-[#6E6E73] text-[16px]">Explore your compatibility and learn how to build stronger connections</p></div>
        </div>
        <div className="flex gap-[15px] w-full">
            <div><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.141 0.882812C10.9547 0.496094 10.5609 0.25 10.1285 0.25C9.6961 0.25 9.30586 0.496094 9.11602 0.882812L6.85547 5.53398L1.80704 6.2793C1.38516 6.34258 1.0336 6.63789 0.903519 7.04219C0.773441 7.44648 0.87891 7.89297 1.18125 8.1918L4.84454 11.8164L3.97969 16.9387C3.90938 17.3605 4.08516 17.7895 4.43321 18.0391C4.78125 18.2887 5.2418 18.3203 5.62149 18.1199L10.132 15.7117L14.6426 18.1199C15.0223 18.3203 15.4828 18.2922 15.8309 18.0391C16.1789 17.7859 16.3547 17.3605 16.2844 16.9387L15.416 11.8164L19.0793 8.1918C19.3816 7.89297 19.4906 7.44648 19.357 7.04219C19.2234 6.63789 18.8754 6.34258 18.4535 6.2793L13.4016 5.53398L11.141 0.882812Z" fill="#2563EB"/>
</svg>
</div>
            <div><p className=" max-w-[420px] w-full font-[600] text-[#6E6E73] text-[16px]">Get private, expert advice tailored to your emotional needs</p></div>
        </div>
        <div className="flex gap-[15px] w-full">
            <div><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.141 0.882812C10.9547 0.496094 10.5609 0.25 10.1285 0.25C9.6961 0.25 9.30586 0.496094 9.11602 0.882812L6.85547 5.53398L1.80704 6.2793C1.38516 6.34258 1.0336 6.63789 0.903519 7.04219C0.773441 7.44648 0.87891 7.89297 1.18125 8.1918L4.84454 11.8164L3.97969 16.9387C3.90938 17.3605 4.08516 17.7895 4.43321 18.0391C4.78125 18.2887 5.2418 18.3203 5.62149 18.1199L10.132 15.7117L14.6426 18.1199C15.0223 18.3203 15.4828 18.2922 15.8309 18.0391C16.1789 17.7859 16.3547 17.3605 16.2844 16.9387L15.416 11.8164L19.0793 8.1918C19.3816 7.89297 19.4906 7.44648 19.357 7.04219C19.2234 6.63789 18.8754 6.34258 18.4535 6.2793L13.4016 5.53398L11.141 0.882812Z" fill="#2563EB"/>
</svg>
</div>
            <div><p className=" max-w-[420px] w-full font-[600] text-[#6E6E73] text-[16px]">Just $1.00 for the first 7 days, then $19.00/month</p></div>
        </div>
    </div>
    <div><button className="cursor-pointer bg text-white w-[212px] h-[52px] rounded-[99999px] font-[500] text-[18px]" onClick={()=> {
        setActiveReg(true)
    }}>View Plans</button></div>
</div>
        </div>
        {activeLogin&& <Login setActiveLog={setActiveLogin} setActiveReg={setActiveReg}/>}
         {activeReg && <Reg setActiveLog={setActiveLogin} setActiveReg={setActiveReg}/>}
    </>
    )
}