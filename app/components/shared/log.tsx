import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

type LoginProps = {
  setActiveLog: React.Dispatch<boolean>;
  setActiveReg: React.Dispatch<boolean>;
};

export const Login: React.FC<LoginProps> = ({ setActiveLog, setActiveReg }) => {
  const [agreed, setAgreed] = useState(false);
 const [email, setEmail] = useState('');
  const lottieRef = useRef<any>(null);
  const [animationData, setAnimationData] = useState(null);
const [send,setSend] = useState(false);
  useEffect(() => {
    // Загружаем JSON из public
    fetch("/anim.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
   const [btnActive, setBtnActive] = useState(false);
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
setActiveLog(false)
document.body.style.overflow ='auto'
},5000)
    }
   },[send])
   useEffect(()=> {
   document.body.style.overflow ='hidden'
   },[])
  return (<>
    <div className="fixed top-0 left-0 z-[9999999999999] w-full h-screen flex items-center justify-center bg-[#ABA8A880] backdrop-blur-2xl">
   {send == false?   <div className="relative mx-2 max-w-[512px] w-full rounded-[48px] bg-white p-[33px] py-[37px] flex flex-col items-center gap-[30px]">
        <h1 className="text-2xl font-bold text-black">Log In</h1>

        <div className="w-full mt-5">
          <div className="mb-4 flex flex-col gap-[5px]">
            <label htmlFor="email">Email Address*</label>
            <div className="relative w-full">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Enter your email"
                className="px-4 h-[46px] w-full rounded-[18px] bg-[#F9FAFB] border border-[#E5E7EB] outline-none"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2"
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.3125 0.5C0.587891 0.5 0 1.08789 0 1.8125C0 2.22539 0.194141 2.61367 0.525 2.8625L6.475 7.325C6.78672 7.55742 7.21328 7.55742 7.525 7.325L13.475 2.8625C13.8059 2.61367 14 2.22539 14 1.8125C14 1.08789 13.4121 0.5 12.6875 0.5H1.3125ZM0 3.5625V9.25C0 10.2152 0.784766 11 1.75 11H12.25C13.2152 11 14 10.2152 14 9.25V3.5625L8.05 8.025C7.42656 8.49258 6.57344 8.49258 5.95 8.025L0 3.5625Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </div>

          <div className="mb-4 flex gap-3 items-center bg-[#F9FAFB] border border-[#F3F4F6] rounded-[18px] px-3 py-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="w-[16px] h-[16px]"
            />
            <p className="text-sm text-[#4B5563]">
              I agree to WIT LAB's{" "}
              <a href="/terms" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>

          <button onClick={()=> {
            setSend(true)
          }}
            className={`cursor-pointer w-full h-[44px] ${btnActive ?'bg-black'  : 'bg-[#00000040]'}  hover:bg-black active:bg-black rounded-[25px] flex items-center justify-center relative transition duration-200`}
            disabled={!agreed}
          >
            <span className="text-white font-semibold text-sm">Log In</span>
            <svg
              className="absolute right-5"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.993 6.61798C12.3348 6.27618 12.3348 5.7211 11.993 5.3793L7.61797 1.0043C7.27617 0.662506 6.72109 0.662506 6.3793 1.0043C6.0375 1.3461 6.0375 1.90118 6.3793 2.24297L9.26406 5.12501H0.875C0.391016 5.12501 0 5.51602 0 6.00001C0 6.48399 0.391016 6.87501 0.875 6.87501H9.26133L6.38203 9.75704C6.04023 10.0988 6.04023 10.6539 6.38203 10.9957C6.72383 11.3375 7.27891 11.3375 7.6207 10.9957L11.9957 6.62071L11.993 6.61798Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-sm text-[#6B7280]">Don't have an account?</span>
          <button
            onClick={() => {
              setActiveLog(false);
              setActiveReg(true);
            }}
            className="text-sm font-medium text-black hover:underline"
          >
            Sign Up
          </button>
        </div>

        <button
          onClick={() => {setActiveLog(false)
            document.body.style.overflow ='auto'
          }}
          className="cursor-pointer absolute top-8 right-8"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0445 2.54453C11.4839 2.10508 11.4839 1.3914 11.0445 0.95195C10.605 0.512497 9.89136 0.512497 9.4519 0.95195L5.74995 4.65742L2.04448 0.955466C1.60503 0.516013 0.891357 0.516013 0.451904 0.955466C0.0124512 1.39492 0.0124512 2.10859 0.451904 2.54804L4.15737 6.25L0.45542 9.95547C0.0159669 10.3949 0.0159669 11.1086 0.45542 11.548C0.894873 11.9875 1.60854 11.9875 2.048 11.548L5.74995 7.84257L9.45542 11.5445C9.89487 11.984 10.6085 11.984 11.048 11.5445C11.4875 11.1051 11.4875 10.3914 11.048 9.95195L7.34253 6.25L11.0445 2.54453Z"
              fill="#9CA3AF"
            />
          </svg>
        </button>
      </div>
    :<div className="flex flex-col items-center justify-center -translate-y-[50%] bg-[#FFFFFF] -translate-x-[50%] success max-w-[512px] w-full fixed z-[9999999999] top-[50%] left-[50%] border border-[#E5E7EB] rounded-[48px] h-[416px] ">
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
