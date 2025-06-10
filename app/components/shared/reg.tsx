'use client'
import Lottie from 'lottie-react';
import React, { useState, useEffect, useRef } from 'react';

export const Reg = (props: { setActiveLog: React.Dispatch<boolean>, setActiveReg: React.Dispatch<boolean> }) => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
useEffect(()=> {
document.body.style.overflow ='hidden'
},[])
  useEffect(() => {
    if (fullName.trim() && birthDate.trim() && email.trim() && agreed) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [fullName, birthDate, email, agreed]);
const lottieRef = useRef<any>(null);
  const [animationData, setAnimationData] = useState(null);
const [send,setSend] = useState(false);
  useEffect(() => {
    // Загружаем JSON из public
    fetch("/anim.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
   
   useEffect(() => {
     if (email.trim() && agreed) {
       setBtnActive(true);
     } else {
       setBtnActive(false);
     }
   }, [ email, agreed]);
   useEffect(()=> {
    if(send == true) {
setTimeout(()=> {
setSend(false)
props.setActiveReg(false)
document.body.style.overflow ='auto'
},5000)
    }
   },[send])
  return (
    <>
    <div className="flex items-center justify-center backdrop-blur-2xl fixed top-0 left-0 w-full h-screen bg-[#ABA8A880] z-[9999999999999]">
    { send==false ? <div className="mx-[10px] relative max-w-[512px] w-full rounded-[48px] flex flex-col items-center gap-[30px] bg-[#FFFFFF] py-[37px] px-[33px]">
        <div><h1 className="font-[700] text-[24px] text-black">Sign Up</h1></div>
        <div className="mt-[20px] w-full">

          {/* Full Name */}
          <div className="mb-[16px] flex flex-col gap-[5px] ">
            <label>Full Name*</label>
            <div className="w-full relative">
              <input
                className="px-[16px] h-[46px] outline-0 w-full rounded-[18px] bg-[#F9FAFB] border border-[#E5E7EB]"
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          {/* Birth Date */}
          <div className="mb-[16px] flex flex-col gap-[5px] ">
            <label>Birth Date*</label>
            <div className="w-full relative">
              <input
                className="px-[16px] h-[46px] outline-0 w-full rounded-[18px] bg-[#F9FAFB] border border-[#E5E7EB]"
                type="text"
                placeholder="MM / DD / YYYY"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-[16px] flex flex-col gap-[5px] ">
            <label>Email Address*</label>
            <div className="w-full relative">
              <input
                className="px-[16px] h-[46px] outline-0 w-full rounded-[18px] bg-[#F9FAFB] border border-[#E5E7EB]"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-[16px] h-[46px] flex gap-[12px] bg-[#F9FAFB] border border-[#F3F4F6] rounded-[18px] px-[13px] items-center">
            <input
              type='checkbox'
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <p className="text-[#4B5563] text-[12px]">
              I agree to WIT LAB's <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a>
            </p>
          </div>

          {/* Button */}
          <div className="w-full">
            <button
            onClick={()=> {
                setSend(true)
            }}
              disabled={!btnActive}
              className={`h-[44px] cursor-pointer rounded-[25px] w-full flex items-center justify-center relative duration-[200ms] ${btnActive ? 'bg-black hover:bg-[#000000]' : 'bg-[#00000040] cursor-not-allowed'}`}
            >
              <h1 className="text-[#FFFFFF] font-[600] text-[14px]">Sign Up</h1>
              <svg className="absolute right-[20px]" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.993 6.61798C12.3348 6.27618 12.3348 5.7211 11.993 5.3793L7.61797 1.0043C7.27617 0.662506 6.72109 0.662506 6.3793 1.0043C6.0375 1.3461 6.0375 1.90118 6.3793 2.24297L9.26406 5.12501H0.875C0.391016 5.12501 0 5.51602 0 6.00001C0 6.48399 0.391016 6.87501 0.875 6.87501H9.26133L6.38203 9.75704C6.04023 10.0988 6.04023 10.6539 6.38203 10.9957C6.72383 11.3375 7.27891 11.3375 7.6207 10.9957L11.9957 6.62071L11.993 6.61798Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-[15px] items-center">
          <span className="text-[#6B7280] text-[14px]">Already have an account?</span>
          <h1 className="text-[#000000] font-[500] text-[14px] cursor-pointer" onClick={() => {
            props.setActiveLog(true);
            props.setActiveReg(false);
          }}>Log In</h1>
        </div>

        {/* Close Button */}
        <div className="absolute top-[32px] right-[32px] cursor-pointer" onClick={() => props.setActiveReg(false)}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0445 2.54453C11.4839 2.10508 11.4839 1.3914 11.0445 0.95195C10.605 0.512497 9.89136 0.512497 9.4519 0.95195L5.74995 4.65742L2.04448 0.955466C1.60503 0.516013 0.891357 0.516013 0.451904 0.955466C0.0124512 1.39492 0.0124512 2.10859 0.451904 2.54804L4.15737 6.25L0.45542 9.95547C0.0159669 10.3949 0.0159669 11.1086 0.45542 11.548C0.894873 11.9875 1.60854 11.9875 2.048 11.548L5.74995 7.84257L9.45542 11.5445C9.89487 11.984 10.6085 11.984 11.048 11.5445C11.4875 11.1051 11.4875 10.3914 11.048 9.95195L7.34253 6.25L11.0445 2.54453Z" fill="#9CA3AF" />
          </svg>
        </div>
      </div>: <div className="flex flex-col items-center justify-center -translate-y-[50%] bg-[#FFFFFF] -translate-x-[50%] success max-w-[512px] w-full fixed z-[9999999999] top-[50%] left-[50%] border border-[#E5E7EB] rounded-[48px] h-[416px] ">
        <div><h1 className="  font-[700] text-[#000000] text-[24px]">Successfully</h1></div>
        {animationData && (
        <Lottie
       className="mt-[100px] w-[160px] translate-y-[-50px]"
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={true}
        />
      )}
    </div>
}
    </div>
    
    </>
  );
};
