export const Reg = (props:{setActiveLog:React.Dispatch<boolean>,setActiveReg:React.Dispatch<boolean>}) => {
  return (
    <div className="flex items-center justify-center backdrop-blur-2xl fixed top-0 left-0 w-full h-screen bg-[#ABA8A880] z-[9999999999999]">
   <div className="mx-[10px] relative max-w-[512px] w-full rounded-[48px] flex flex-col items-center gap-[30px] bg-[#FFFFFF] py-[37px] px-[33px]">
    <div><h1 className="font-[700] text-[24px] text-black">Sing Up</h1></div>
    <div className="mt-[20px] w-full">
          <div className="mb-[16px] flex flex-col gap-[5px] ">
            <label htmlFor="">Full Name*</label>
            <div className="w-full relative"><input className="px-[16px] h-[46px] outline-0 w-full rounded-[18px] bg-[#F9FAFB] border border-[#E5E7EB]" type="email" placeholder="Enter your name"  /><svg className="absolute right-[12px] top-[50%] translate-y-[-50%]" width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.875 7.75C7.80326 7.75 8.6935 7.38125 9.34987 6.72487C10.0063 6.0685 10.375 5.17826 10.375 4.25C10.375 3.32174 10.0063 2.4315 9.34987 1.77513C8.6935 1.11875 7.80326 0.75 6.875 0.75C5.94674 0.75 5.0565 1.11875 4.40013 1.77513C3.74375 2.4315 3.375 3.32174 3.375 4.25C3.375 5.17826 3.74375 6.0685 4.40013 6.72487C5.0565 7.38125 5.94674 7.75 6.875 7.75ZM5.62539 9.0625C2.93203 9.0625 0.75 11.2445 0.75 13.9379C0.75 14.3863 1.11367 14.75 1.56211 14.75H12.1879C12.6363 14.75 13 14.3863 13 13.9379C13 11.2445 10.818 9.0625 8.12461 9.0625H5.62539Z" fill="#9CA3AF"/>
</svg>

</div>
        </div>  <div className="mb-[16px] flex flex-col gap-[5px] ">
            <label htmlFor="">Birth Date*</label>
            <div className="w-full relative"><input className="px-[16px] h-[46px] outline-0 w-full rounded-[18px] bg-[#F9FAFB] border border-[#E5E7EB]" type="email" placeholder="MM / DD / YYYY"  /><svg className="absolute right-[12px] top-[50%] translate-y-[-50%]" width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 0.75C4.73398 0.75 5.125 1.14102 5.125 1.625V2.5H8.625V1.625C8.625 1.14102 9.01602 0.75 9.5 0.75C9.98398 0.75 10.375 1.14102 10.375 1.625V2.5H11.6875C12.4121 2.5 13 3.08789 13 3.8125V5.125H0.75V3.8125C0.75 3.08789 1.33789 2.5 2.0625 2.5H3.375V1.625C3.375 1.14102 3.76602 0.75 4.25 0.75ZM0.75 6H13V13.4375C13 14.1621 12.4121 14.75 11.6875 14.75H2.0625C1.33789 14.75 0.75 14.1621 0.75 13.4375V6ZM2.5 8.1875V9.0625C2.5 9.30313 2.69687 9.5 2.9375 9.5H3.8125C4.05312 9.5 4.25 9.30313 4.25 9.0625V8.1875C4.25 7.94688 4.05312 7.75 3.8125 7.75H2.9375C2.69687 7.75 2.5 7.94688 2.5 8.1875ZM6 8.1875V9.0625C6 9.30313 6.19688 9.5 6.4375 9.5H7.3125C7.55312 9.5 7.75 9.30313 7.75 9.0625V8.1875C7.75 7.94688 7.55312 7.75 7.3125 7.75H6.4375C6.19688 7.75 6 7.94688 6 8.1875ZM9.9375 7.75C9.69687 7.75 9.5 7.94688 9.5 8.1875V9.0625C9.5 9.30313 9.69687 9.5 9.9375 9.5H10.8125C11.0531 9.5 11.25 9.30313 11.25 9.0625V8.1875C11.25 7.94688 11.0531 7.75 10.8125 7.75H9.9375ZM2.5 11.6875V12.5625C2.5 12.8031 2.69687 13 2.9375 13H3.8125C4.05312 13 4.25 12.8031 4.25 12.5625V11.6875C4.25 11.4469 4.05312 11.25 3.8125 11.25H2.9375C2.69687 11.25 2.5 11.4469 2.5 11.6875ZM6.4375 11.25C6.19688 11.25 6 11.4469 6 11.6875V12.5625C6 12.8031 6.19688 13 6.4375 13H7.3125C7.55312 13 7.75 12.8031 7.75 12.5625V11.6875C7.75 11.4469 7.55312 11.25 7.3125 11.25H6.4375ZM9.5 11.6875V12.5625C9.5 12.8031 9.69687 13 9.9375 13H10.8125C11.0531 13 11.25 12.8031 11.25 12.5625V11.6875C11.25 11.4469 11.0531 11.25 10.8125 11.25H9.9375C9.69687 11.25 9.5 11.4469 9.5 11.6875Z" fill="#9CA3AF"/>
</svg>

</div>
        </div>
        <div className="mb-[16px] flex flex-col gap-[5px] ">
            <label htmlFor="">Email Address*</label>
            <div className="w-full relative"><input className="px-[16px] h-[46px] outline-0 w-full rounded-[18px] bg-[#F9FAFB] border border-[#E5E7EB]" type="email" placeholder="Enter your email"  /><svg className="absolute right-[12px] top-[50%] translate-y-[-50%]" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.3125 0.5C0.587891 0.5 0 1.08789 0 1.8125C0 2.22539 0.194141 2.61367 0.525 2.8625L6.475 7.325C6.78672 7.55742 7.21328 7.55742 7.525 7.325L13.475 2.8625C13.8059 2.61367 14 2.22539 14 1.8125C14 1.08789 13.4121 0.5 12.6875 0.5H1.3125ZM0 3.5625V9.25C0 10.2152 0.784766 11 1.75 11H12.25C13.2152 11 14 10.2152 14 9.25V3.5625L8.05 8.025C7.42656 8.49258 6.57344 8.49258 5.95 8.025L0 3.5625Z" fill="#9CA3AF"/>
</svg>
</div>
        </div>
        <div className="mb-[16px] flex gap-[12px] bg-[#F9FAFB] border border-[#F3F4F6] rounded-[18px] px-[13px] items-center">
            <div><input type='checkbox'/></div>
            <div><p className="text-[#4B5563] text-[12px]">I agree to WIT LAB's {" "}<a href="/terms" className="underline ">Terms of Service</a> and {''} <a href="/privacy" className="underline">Privacy Policy</a></p></div>
        </div>
        <div className="w-full"><button className="active:bg-[black] hover:bg-[#000000] duration-[200ms] h-[44px] cursor-pointer bg-[#00000040] rounded-[25px] w-full flex items-center justify-center relative"><h1 className="text-[#FFFFFF] font-[600] text-[14px]">Log In</h1><svg className="absolute right-[20px]" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.993 6.61798C12.3348 6.27618 12.3348 5.7211 11.993 5.3793L7.61797 1.0043C7.27617 0.662506 6.72109 0.662506 6.3793 1.0043C6.0375 1.3461 6.0375 1.90118 6.3793 2.24297L9.26406 5.12501H0.875C0.391016 5.12501 0 5.51602 0 6.00001C0 6.48399 0.391016 6.87501 0.875 6.87501H9.26133L6.38203 9.75704C6.04023 10.0988 6.04023 10.6539 6.38203 10.9957C6.72383 11.3375 7.27891 11.3375 7.6207 10.9957L11.9957 6.62071L11.993 6.61798Z" fill="white"/>
</svg>
</button></div>
    </div>
    <div className="flex gap-[15px]">
        <div><span className="text-[#6B7280] text-[14px]">Already have an account?</span></div>
        <div><h1 className="text-[#000000] font-[500] text-[14px] cursor-pointer" onClick={()=> {
            props.setActiveLog(true);
            props.setActiveReg(false)
        }}>Sing Up</h1></div>
    </div>
    <div className="absolute top-[32px] right-[32px] cursor-pointer" onClick={()=> {
        props.setActiveReg(false)
    }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0445 2.54453C11.4839 2.10508 11.4839 1.3914 11.0445 0.95195C10.605 0.512497 9.89136 0.512497 9.4519 0.95195L5.74995 4.65742L2.04448 0.955466C1.60503 0.516013 0.891357 0.516013 0.451904 0.955466C0.0124512 1.39492 0.0124512 2.10859 0.451904 2.54804L4.15737 6.25L0.45542 9.95547C0.0159669 10.3949 0.0159669 11.1086 0.45542 11.548C0.894873 11.9875 1.60854 11.9875 2.048 11.548L5.74995 7.84257L9.45542 11.5445C9.89487 11.984 10.6085 11.984 11.048 11.5445C11.4875 11.1051 11.4875 10.3914 11.048 9.95195L7.34253 6.25L11.0445 2.54453Z" fill="#9CA3AF"/>
</svg>
</div>
   </div>
    </div>
  );
};
