'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const Header = ()=> {
    const [active,setActive] = useState(false);
    const [first,setFirst] = useState(true);
    return(
        <header className="z-[999999] backdrop-blur-[20px]    sticky top-[0] w-full px-[104px] py-[22px] flex justify-between items-center border-b border-[#E5E7EB]">
         
            <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center  ">
            <div className="logo"><h1 className="flex text-[20px] font-[700] text-[#6E6E73]"><span className="text-[black]">W</span>IT LAB</h1></div>
            <div className={`menu ${first==true ? 'disableFirst' : active == true? 'activeMenu' :'disableMenu'}`}>
                <ul className="flex items-center gap-[31px]">
                    <li><a className="text-[16px] font-[400]" href="">About us</a></li>
                    <li><a className="text-[16px] font-[400]" href="">Categories</a></li>
                    <li><a className="text-[16px] font-[400]" href="">Reviews</a></li>
                    <li><a className="text-[16px] font-[400]" href="">FAQ</a></li>
                    <li><a className="text-[16px] font-[400]" href="">Contact us</a></li>
                </ul>
            </div>
            <div className="user flex gap-[20px] items-center w-[130px]"><button className="bg-[#000000] rounded-[999999px] w-[90px] h-[40px] flex items-center justify-center text-white font-[500] cursor-pointer text-[16px]">Login</button><FontAwesomeIcon onClick={()=> {
                setFirst(false)
               setActive(!active)
               
            }} className="Menu_btn"  cursor={'pointer'} fontSize={23} icon={active==false? faBars:faXmark} /></div>
  
    </div>
        </header>
    )
}