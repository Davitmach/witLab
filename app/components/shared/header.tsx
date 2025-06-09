'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Login } from "./log";
import { Reg } from "./reg";
export const Header = ()=> {
    const [active,setActive] = useState(false);
    const [first,setFirst] = useState(true);
    const [activeLogin,setActiveLogin] = useState(false);
    const [activeReg,setActiveReg] = useState(false);
    return(
        <>
        <header className="z-[999999] backdrop-blur-[20px]    sticky top-[0] w-full px-[104px] py-[22px] flex justify-between items-center border-b border-[#E5E7EB]">
         
            <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center  ">
            <div className="logo"><a href="#" className="flex text-[20px] font-[700] text-[#6E6E73]"><span className="text-[black]">W</span>IT LAB</a></div>
            <div className={`menu ${first==true ? 'disableFirst' : active == true? 'activeMenu' :'disableMenu'}`}>
                <ul className="flex items-center gap-[31px]">
                    <li><a className="text-[16px] font-[400] font-[inter]" href="#">Home</a></li>
                    <li><a className="text-[16px] font-[400] font-[inter]" href="#InfoBlock">How It Works</a></li>
                    <li><a className="text-[16px] font-[400] font-[inter]" href="#Reviews">Reviews</a></li>
                    <li><a className="text-[16px] font-[400] font-[inter]" href="#trust">Why Trust Us</a></li>
                    <li><a className="text-[16px] font-[400] font-[inter]" href="#question">FAQ</a></li>
                </ul>
            </div>
            <div className="user flex gap-[20px] items-center w-[200px]"><button className="text-nowrap rounded-[999999px] w-[90px] h-[40px] flex items-center font-[inter] justify-center text-black font-[500] cursor-pointer text-[16px]" onClick={()=> {
                setActiveLogin(true)
                setActiveReg(false)
            }}>Log In</button>
            <button className=" rounded-[999999px] px-[13px] text-nowrap h-[40px] flex items-center font-[inter] justify-center text-white bg-[black] font-[500] cursor-pointer text-[16px] signup" onClick={()=> {
                setActiveReg(true)
                setActiveLogin(false);
            }}>Sing Up</button>
            <FontAwesomeIcon onClick={()=> {
                setFirst(false)
               setActive(!active)
               
            }} className="Menu_btn"  cursor={'pointer'} fontSize={23} icon={active==false? faBars:faXmark} /></div>
  
    </div>
        </header>
        {activeLogin&& <Login setActiveLog={setActiveLogin} setActiveReg={setActiveReg}/>}
        {activeReg && <Reg setActiveLog={setActiveLogin} setActiveReg={setActiveReg}/>}
        </>
    )
}