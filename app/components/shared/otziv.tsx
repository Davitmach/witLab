import Image from "next/image"

export const Otziv = ()=> {
    return(
         <div id="Reviews" className="otziv_container max-w-[1440px] !mx-auto w-full ">
<div className="px-[100px] py-[44px] flex flex-col items-center justify-center gap-[44px]">
   <div className="top_bar w-full">
    <div className="flex items-center justify-center"><h1 className="font-[700] text-[#111827] text-[60px] text-center title">Millions of People Trust Us</h1></div>
    <div className="flex w-full justify-between mt-[54px] points items-start">
        <div className="flex items-center justify-center flex-col">
            <div className="flex flex-col items-center justify-center">
                <div  style={{"background": "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)"}} className="img w-[64px] h-[64px] rounded-[50px] flex items-center justify-center"><svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 0.966309C8.49456 0.966309 9.44839 1.3614 10.1517 2.06466C10.8549 2.76792 11.25 3.72175 11.25 4.71631C11.25 5.71087 10.8549 6.6647 10.1517 7.36796C9.44839 8.07122 8.49456 8.46631 7.5 8.46631C6.50544 8.46631 5.55161 8.07122 4.84835 7.36796C4.14509 6.6647 3.75 5.71087 3.75 4.71631C3.75 3.72175 4.14509 2.76792 4.84835 2.06466C5.55161 1.3614 6.50544 0.966309 7.5 0.966309ZM24.75 0.966309C25.7446 0.966309 26.6984 1.3614 27.4016 2.06466C28.1049 2.76792 28.5 3.72175 28.5 4.71631C28.5 5.71087 28.1049 6.6647 27.4016 7.36796C26.6984 8.07122 25.7446 8.46631 24.75 8.46631C23.7554 8.46631 22.8016 8.07122 22.0984 7.36796C21.3951 6.6647 21 5.71087 21 4.71631C21 3.72175 21.3951 2.76792 22.0984 2.06466C22.8016 1.3614 23.7554 0.966309 24.75 0.966309ZM0.75 14.9679C0.75 12.2069 2.99062 9.96631 5.75156 9.96631H7.75312C8.49844 9.96631 9.20625 10.1304 9.84375 10.421C9.78281 10.7585 9.75469 11.1101 9.75469 11.4663C9.75469 13.2569 10.5422 14.8647 11.7844 15.9663C11.775 15.9663 11.7656 15.9663 11.7516 15.9663H1.74844C1.2 15.9663 0.75 15.5163 0.75 14.9679ZM19.7484 15.9663C19.7391 15.9663 19.7297 15.9663 19.7156 15.9663C20.9625 14.8647 21.7453 13.2569 21.7453 11.4663C21.7453 11.1101 21.7125 10.7632 21.6562 10.421C22.2938 10.1257 23.0016 9.96631 23.7469 9.96631H25.7484C28.5094 9.96631 30.75 12.2069 30.75 14.9679C30.75 15.521 30.3 15.9663 29.7516 15.9663H19.7484ZM11.25 11.4663C11.25 10.2728 11.7241 9.12824 12.568 8.28433C13.4119 7.44041 14.5565 6.96631 15.75 6.96631C16.9435 6.96631 18.0881 7.44041 18.932 8.28433C19.7759 9.12824 20.25 10.2728 20.25 11.4663C20.25 12.6598 19.7759 13.8044 18.932 14.6483C18.0881 15.4922 16.9435 15.9663 15.75 15.9663C14.5565 15.9663 13.4119 15.4922 12.568 14.6483C11.7241 13.8044 11.25 12.6598 11.25 11.4663ZM6.75 23.7147C6.75 20.2647 9.54844 17.4663 12.9984 17.4663H18.5016C21.9516 17.4663 24.75 20.2647 24.75 23.7147C24.75 24.4038 24.1922 24.9663 23.4984 24.9663H8.00156C7.3125 24.9663 6.75 24.4085 6.75 23.7147Z" fill="white"/>
</svg>
</div>
                <div><h1 className="text-[#1F2937] font-[700] text-[36px]">20M</h1></div>
            </div>
            <div className="mt-[12px] titles"><h1 className="font-[700] text-[#374151] text-[18px]">Happy Users</h1></div>
        </div>
        <div className="flex items-center justify-center flex-col">
            <div className="flex flex-col items-center justify-center">
                <div  style={{"background":' linear-gradient(90deg, #22C55E 0%, #2563EB 100%)'}} className="img w-[64px] h-[64px] rounded-[50px] flex items-center justify-center"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.25 12.8394C21.25 11.6575 21.0172 10.4871 20.5649 9.3952C20.1126 8.30327 19.4497 7.31112 18.614 6.47539C17.7782 5.63967 16.7861 4.97673 15.6942 4.52444C14.6022 4.07215 13.4319 3.83936 12.25 3.83936C11.0681 3.83936 9.89778 4.07215 8.80585 4.52444C7.71392 4.97673 6.72177 5.63967 5.88604 6.47539C5.05031 7.31112 4.38738 8.30327 3.93508 9.3952C3.48279 10.4871 3.25 11.6575 3.25 12.8394C3.25 14.0213 3.48279 15.1916 3.93508 16.2835C4.38738 17.3754 5.05031 18.3676 5.88604 19.2033C6.72177 20.039 7.71392 20.702 8.80585 21.1543C9.89778 21.6066 11.0681 21.8394 12.25 21.8394C13.4319 21.8394 14.6022 21.6066 15.6942 21.1543C16.7861 20.702 17.7782 20.039 18.614 19.2033C19.4497 18.3676 20.1126 17.3754 20.5649 16.2835C21.0172 15.1916 21.25 14.0213 21.25 12.8394ZM0.25 12.8394C0.25 9.65676 1.51428 6.60451 3.76472 4.35407C6.01516 2.10364 9.0674 0.839355 12.25 0.839355C15.4326 0.839355 18.4848 2.10364 20.7353 4.35407C22.9857 6.60451 24.25 9.65676 24.25 12.8394C24.25 16.022 22.9857 19.0742 20.7353 21.3246C18.4848 23.5751 15.4326 24.8394 12.25 24.8394C9.0674 24.8394 6.01516 23.5751 3.76472 21.3246C1.51428 19.0742 0.25 16.022 0.25 12.8394ZM12.25 16.5894C13.2446 16.5894 14.1984 16.1943 14.9017 15.491C15.6049 14.7877 16 13.8339 16 12.8394C16 11.8448 15.6049 10.891 14.9017 10.1877C14.1984 9.48444 13.2446 9.08936 12.25 9.08936C11.2554 9.08936 10.3016 9.48444 9.59835 10.1877C8.89509 10.891 8.5 11.8448 8.5 12.8394C8.5 13.8339 8.89509 14.7877 9.59835 15.491C10.3016 16.1943 11.2554 16.5894 12.25 16.5894ZM12.25 6.08936C14.0402 6.08936 15.7571 6.80051 17.023 8.06638C18.2888 9.33226 19 11.0491 19 12.8394C19 14.6296 18.2888 16.3465 17.023 17.6123C15.7571 18.8782 14.0402 19.5894 12.25 19.5894C10.4598 19.5894 8.7429 18.8782 7.47703 17.6123C6.21116 16.3465 5.5 14.6296 5.5 12.8394C5.5 11.0491 6.21116 9.33226 7.47703 8.06638C8.7429 6.80051 10.4598 6.08936 12.25 6.08936ZM10.75 12.8394C10.75 12.4415 10.908 12.06 11.1893 11.7787C11.4706 11.4974 11.8522 11.3394 12.25 11.3394C12.6478 11.3394 13.0294 11.4974 13.3107 11.7787C13.592 12.06 13.75 12.4415 13.75 12.8394C13.75 13.2372 13.592 13.6187 13.3107 13.9C13.0294 14.1813 12.6478 14.3394 12.25 14.3394C11.8522 14.3394 11.4706 14.1813 11.1893 13.9C10.908 13.6187 10.75 13.2372 10.75 12.8394Z" fill="white"/>
</svg>
</div>
                <div><h1 className="text-[#1F2937] font-[700] text-[36px]">93%</h1></div>
            </div>
            <div className="mt-[12px] titles"><h1 className="font-[700] text-[#374151] text-[18px]">Accuracy</h1></div>
        </div>
        <div className="flex items-center justify-center flex-col">
            <div className="flex flex-col items-center justify-center">
                <div  style={{background:"linear-gradient(90deg, #EAB308 0%, #EA580C 100%)"}} className="img w-[64px] h-[64px] rounded-[50px] flex items-center justify-center"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1047 1.50293C13.8562 0.987305 13.3312 0.65918 12.7547 0.65918C12.1781 0.65918 11.6578 0.987305 11.4047 1.50293L8.39061 7.70449L1.65936 8.69824C1.09686 8.78262 0.62811 9.17637 0.454672 9.71543C0.281235 10.2545 0.42186 10.8498 0.824985 11.2482L5.70936 16.0811L4.55623 22.9107C4.46248 23.4732 4.69686 24.0451 5.16092 24.3779C5.62498 24.7107 6.23905 24.7529 6.7453 24.4857L12.7594 21.2748L18.7734 24.4857C19.2797 24.7529 19.8937 24.7154 20.3578 24.3779C20.8219 24.0404 21.0562 23.4732 20.9625 22.9107L19.8047 16.0811L24.689 11.2482C25.0922 10.8498 25.2375 10.2545 25.0594 9.71543C24.8812 9.17637 24.4172 8.78262 23.8547 8.69824L17.1187 7.70449L14.1047 1.50293Z" fill="white"/>
</svg>
</div>
                <div><h1 className="text-[#1F2937] font-[700] text-[36px]">4.7</h1></div>
            </div>
            <div className="mt-[12px] titles"><h1 className="font-[700] text-[#374151] text-[18px]">Satisfaction Score</h1></div>
        </div>
        <div className="flex items-center justify-center flex-col">
            <div className="flex flex-col items-center justify-center">
                <div  style={{background:'linear-gradient(90deg, #A855F7 0%, #DB2777 100%)'}} className="img w-[64px] h-[64px] rounded-[50px] flex items-center justify-center"><svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 12.4531C9.6587 12.4531 8.13258 11.821 7.00736 10.6958C5.88214 9.57055 5.25 8.04442 5.25 6.45312C5.25 4.86183 5.88214 3.3357 7.00736 2.21048C8.13258 1.08527 9.6587 0.453125 11.25 0.453125C12.8413 0.453125 14.3674 1.08527 15.4926 2.21048C16.6179 3.3357 17.25 4.86183 17.25 6.45312C17.25 8.04442 16.6179 9.57055 15.4926 10.6958C14.3674 11.821 12.8413 12.4531 11.25 12.4531ZM10.5516 17.2906L9.67969 15.8375C9.37969 15.3359 9.74062 14.7031 10.3219 14.7031H11.25H12.1734C12.7547 14.7031 13.1156 15.3406 12.8156 15.8375L11.9438 17.2906L13.5094 23.0984L15.1969 16.2125C15.2906 15.8328 15.6562 15.5844 16.0359 15.6828C19.3219 16.5078 21.75 19.4797 21.75 23.0141C21.75 23.8109 21.1031 24.4531 20.3109 24.4531H14.1328C14.0344 24.4531 13.9453 24.4344 13.8609 24.4016L13.875 24.4531H8.625L8.63906 24.4016C8.55469 24.4344 8.46094 24.4531 8.36719 24.4531H2.18906C1.39688 24.4531 0.75 23.8062 0.75 23.0141C0.75 19.475 3.18281 16.5031 6.46406 15.6828C6.84375 15.5891 7.20938 15.8375 7.30313 16.2125L8.99063 23.0984L10.5562 17.2906H10.5516Z" fill="white"/>
</svg>
</div>
                <div><h1 className="text-[#1F2937] font-[700] text-[36px]">300+</h1></div>
            </div>
            <div className="mt-[12px] titles"><h1 className="font-[700] text-[#374151] text-[18px]">Advisors</h1></div>
        </div>
    </div>
   </div>
   <div className="bottom_bar w-full">
    <div className="flex items-center justify-center"><h1 className="font-[600] text-[38px] text-[#1F2937]">What Our Users Say</h1></div>
    <div className="w-full flex items-center justify-start gap-[40px] mt-[20px] ">
        <div className="w-[239px] shrink-0  flex flex-col gap-[15px] bg-[#F9FAFB] border border-[#F3F4F6] rounded-[48px] p-[25px]">
            <div className="flex items-end gap-[16px]">
                <div><Image alt="a" src={'/user1.png'}  width={48} height={48} /></div>
                <div className="flex flex-col gap-[4px] translate-y-[4px]">
                    <h1 className="font-[600] text-[16px] text-[#1F2937]">Jessica Morgan</h1>
                    <span className="verif">Verified Customer</span>
                </div>
            </div>
            <div>
                  <div className="stars"><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/></div>   
                <div className="mt-[10px]"><p className="text-[#4B5563] text-[14px]">"The more questions I answered, the clearer it became why I keep repeating the same mistakes in relationships. This isn’t just ...  </p></div>
                <div className="mt-[5px]"><span className="text-[#6B7280] text-[12px] flag_us">New York, US • 21 days ago</span></div>
            </div>
        </div>
        <div className="w-[239px] shrink-0 flex flex-col gap-[15px] bg-[#F9FAFB] border border-[#F3F4F6] rounded-[48px] p-[25px]">
            <div className="flex items-end gap-[16px]">
                <div><Image alt="a" src={'/user2.png'}  width={48} height={48}/></div>
                <div className="flex flex-col gap-[4px] translate-y-[4px]">
                    <h1 className="font-[600] text-[16px] text-[#1F2937]">Élise Tremblay</h1>
                    <span className="verif">Verified Customer</span>
                </div>
            </div>
            <div>
                   <div className="stars"><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/></div>
                <div className="mt-[10px]"><p className="text-[#4B5563] text-[14px]">"This service helped me see my past relationships in a new light. I began to understand the patterns behind my choices. It’s...</p></div>
                <div className="mt-[5px]"><span className="text-[#6B7280] text-[12px] flag_ca">Toronto, CA • 7 day ago</span></div>
            </div>
        </div>
        <div className="w-[239px] shrink-0 flex flex-col gap-[15px] bg-[#F9FAFB] border border-[#F3F4F6] rounded-[48px] p-[25px]">
            <div className="flex items-end gap-[16px]">
                <div><Image alt="a" src={'/user3.png'}  width={48} height={48}/></div>
                <div className="flex flex-col gap-[4px] translate-y-[4px]">
                    <h1 className="font-[600] text-[16px] text-[#1F2937]">Charlotte Webb</h1>
                    <span className="verif">Verified Customer</span>
                </div>
            </div>
            <div>
               <div className="stars"><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/halfStar.png'} width={16} height={16}/></div>
                <div className="mt-[10px]"><p className="text-[#4B5563] text-[14px]">"I used to have no idea why every new relationship followed the same script. Here, I finally got to understand myself — and ...</p></div>
                <div className="mt-[5px]"><span className="text-[#6B7280] text-[12px] flag_gb">London, UK • 3 days ago</span></div>
            </div>
        </div>
        <div className="w-[239px] shrink-0 flex flex-col gap-[15px] bg-[#F9FAFB] border border-[#F3F4F6] rounded-[48px] p-[25px]">
            <div className="flex items-end gap-[16px]">
                <div><Image alt="a" src={'/user4.png'}  width={48} height={48}/></div>
                <div className="flex flex-col gap-[4px] translate-y-[4px]">
                    <h1 className="font-[600] text-[16px] text-[#1F2937]">Heather Clarke</h1>
                    <span className="verif">Verified Customer</span>
                </div>
            </div>
            <div>
                 <div className="stars"><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/><Image quality={100} alt="" src={'/star.png'} width={16} height={16}/></div>
                <div  className="mt-[10px]"><p className="text-[#4B5563] text-[14px]">"This isn’t just a psychological test — it feels like a conversation with someone who truly understands you. I’ve lear...</p></div>
                <div className="mt-[5px]"><span className="text-[#6B7280] text-[12px] flag_ca">Toronto, CA • 1 day ago</span></div>
            </div>
        </div>
    </div>
   </div>

</div>
        </div>
    )
}