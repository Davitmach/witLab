export const Footer = ()=> {
    return(
        <footer className="">
            <div className=" bg-[#F9FAFB] ">
                
            <div className="max-w-[1440px] w-full mx-auto pt-[108px] pl-[137px] pr-[87px] flex flex-col pb-[37px] footer_top_bar">
                <div className="flex w-full justify-between">
                    <div>
                        <div><h1 className="font-[600] text-[50px] text-[#6E6E73]"><span className="text-[black]">W</span>IT LAB ©</h1></div>
                        <div><span className="text-[#6B7280] font-[600] text-[32px] mail">info@witlab.us</span></div>
                    </div>
                    <div><p className="max-w-[226px] w-full text-[#6B7280] text-[26px] font-[400]">2108 N ST STE N SACRAMENTO,
CA95816, US</p></div>
                </div>
                <div className="flex w-full justify-end gap-[18px] mt-[50px] menu">
                    <div><a href="" className="decoration-0 text-[#6B7280] font-[600] text-[20px]">Terms of Service</a></div>
                    <div><a href="" className="decoration-0 text-[#6B7280] font-[600] text-[20px]">Privacy Policy</a></div>
                    <div><a href="" className="decoration-0 text-[#6B7280] font-[600] text-[20px]">Refund Policy</a></div>
                </div>
            </div>
            </div>
            <div className="pl-[137px] pr-[87px] max-w-[1440px] w-full mx-auto flex pt-[36px] items-start justify-between pb-[37px] gap-[50px] footer_bottom_bar ">
                <div><p className="max-w-[448px] w-full mx-auto text-[#6B7280] font-[300] text-[14px]">Copyright © 2025 Wit Lab™. All rights reserved. All trademarks referenced herein are the properties of their respective owners.</p></div>
                <div className="flex items-center gap-[16px] flex-wrap">
                    <div className="cursor-pointer w-[64px] h-[48px] rounded-[8px] border border-[#E5E7EB] flex items-center justify-center text-[#2563EB] font-[700] text-[18px] bg-[#F9FAFB]">VISA</div>
                    <div className="cursor-pointer w-[64px] h-[48px] rounded-[8px] border border-[#E5E7EB] flex items-center justify-center bg-[#F9FAFB]"><svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H0V0H20V12Z" stroke="#E5E7EB"/>
<path d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0Z" fill="#EF4444"/>
<path d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0Z" stroke="#E5E7EB"/>
<path d="M14 0C17.3137 0 20 2.68629 20 6C20 9.31371 17.3137 12 14 12C10.6863 12 8 9.31371 8 6C8 2.68629 10.6863 0 14 0Z" fill="#FB923C"/>
<path d="M14 0C17.3137 0 20 2.68629 20 6C20 9.31371 17.3137 12 14 12C10.6863 12 8 9.31371 8 6C8 2.68629 10.6863 0 14 0Z" stroke="#E5E7EB"/>
</svg>
</div>
                    <div className="cursor-pointer w-[64px] h-[48px] rounded-[8px] border border-[#E5E7EB] flex items-center justify-center bg-[#F9FAFB] text-[#2563EB] font-[700] text-[14px]">PayPal</div>
                    <div className=" cursor-pointer w-[64px] h-[48px] rounded-[8px] border border-[#E5E7EB] flex items-center gap-[2px] justify-center bg-[#F9FAFB] text-[#374151] font-[600] text-[17px]"><svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4492 9.99609C12.4414 8.5625 13.0898 7.48047 14.4023 6.68359C13.668 5.63281 12.5586 5.05469 11.0938 4.94141C9.70703 4.83203 8.19141 5.75 7.63672 5.75C7.05078 5.75 5.70703 4.98047 4.65234 4.98047C2.47266 5.01562 0.15625 6.71875 0.15625 10.1836C0.15625 11.207 0.34375 12.2643 0.71875 13.3555C1.21875 14.7891 3.02344 18.3047 4.90625 18.2461C5.89062 18.2227 6.58594 17.5469 7.86719 17.5469C9.10938 17.5469 9.75391 18.2461 10.8516 18.2461C12.75 18.2188 14.3828 15.0234 14.8594 13.5859C12.3125 12.3867 12.4492 10.0703 12.4492 9.99609ZM10.2383 3.58203C11.3047 2.31641 11.207 1.16406 11.1758 0.75C10.2344 0.804688 9.14453 1.39063 8.52344 2.11328C7.83984 2.88672 7.4375 3.84375 7.52344 4.92188C8.54297 5 9.47266 4.47656 10.2383 3.58203Z" fill="#374151"/>
</svg>

Pay</div>
                    <div className="cursor-pointer w-[64px] h-[48px] rounded-[8px] border border-[#E5E7EB] flex items-center justify-center bg-[#F9FAFB] gap-[4px]"><h1 className="text-[#3B82F6] font-[700] text-[23px]">G</h1><span className="font-[Inter] text-black font-[600] text-[16px]">Pay</span></div>
                </div>
            </div>
        </footer>
    )
}