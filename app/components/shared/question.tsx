'use client'

import Link from "next/link";
import { act, useState } from "react"

export const Questions = ()=> {
    const [active,setActive] = useState('');

    const HandleClick = (Active:string)=> {    
        if(Active == active && active !=='') {
            setActive('');
            return
        }
        setActive(Active)
    }
    return(
        <div id="question" className="Questions_container max-w-[848px] w-full mx-auto pb-[247px] pt-[80px]">
            <div className="questions_box flex flex-col items-center justify-center gap-[64px]">
                <div className="info_box flex flex-col items-center justify-center gap-[20px]">
                    <h1 className="font-[600] text-[#111827] text-[60px] text-center">Frequently Asked Questions</h1>
                    <p className="text-center max-w-[697px] w-full text-[#6B7280] text-[18px]">Everything you need to know about WIT LAB and how it works. Can't find the answer you're looking for? Feel free to contact our support team.</p>
                </div>
                <div className="flex flex-col gap-[12px] items w-full">
                    <div  onClick={()=> {
                                HandleClick('1')
                                
                            }} className="cursor-pointer w-full h-auto py-[20px] px-[24px] flex flex-col">
                        <div>
                            <div><h1>Is there free access to WIT LAB?</h1></div>
                            <div className={`${active =='1'&&'Active'}  duration-300 cursor-pointer`} ><svg  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.29377 0.293945C6.6844 -0.0966797 7.31877 -0.0966797 7.7094 0.293945L13.7094 6.29395C14.1 6.68457 14.1 7.31895 13.7094 7.70957C13.3188 8.1002 12.6844 8.1002 12.2938 7.70957L7.00002 2.41582L1.70627 7.70645C1.31565 8.09707 0.681274 8.09707 0.290649 7.70645C-0.0999756 7.31582 -0.0999756 6.68145 0.290649 6.29082L6.29065 0.29082L6.29377 0.293945Z" fill="#1F2937"/>
</svg>
</div>
                        </div>
                        {active=='1'&& <div><p>There’s no completely free version, but you can start with a trial for just $0.50–$1. This gives you full access to all platform features. If you decide not to continue, simply cancel your subscription before the trial ends — you won’t be charged further.</p></div>}
                    </div>
                    <div onClick={()=> {
                                HandleClick('2')
                                
                            }} className="cursor-pointer w-full h-auto py-[20px] px-[24px] flex flex-col">
                        <div>
                            <div><h1>How secure is my data with WIT LAB?</h1></div>
                            <div className={`${active =='2'&&'Active'} duration-300 cursor-pointer`} onClick={()=>HandleClick('2')}><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.29377 0.293945C6.6844 -0.0966797 7.31877 -0.0966797 7.7094 0.293945L13.7094 6.29395C14.1 6.68457 14.1 7.31895 13.7094 7.70957C13.3188 8.1002 12.6844 8.1002 12.2938 7.70957L7.00002 2.41582L1.70627 7.70645C1.31565 8.09707 0.681274 8.09707 0.290649 7.70645C-0.0999756 7.31582 -0.0999756 6.68145 0.290649 6.29082L6.29065 0.29082L6.29377 0.293945Z" fill="#1F2937"/>
</svg>
</div>
                        </div>
                      {active == "2" && (
  <div>
    <p>
      We take your privacy seriously. All personal data is handled in strict accordance with our{' '}
   
        <a
        href="/privacy"
          style={{
            color: '#1F98F5',
            textDecoration: 'underline',
            textDecorationColor: '#1F98F5',
            cursor: 'pointer',
          }}
        >
          Privacy Policy
        </a>
 
      .
      <br />
      Your data is never shared with third parties without your consent.
      All information is encrypted during transmission and storage.
      We apply technical and organizational safeguards that meet industry standards.
      You can request full data deletion or a report on how your information is used.
      <br />
      WIT LAB is fully compliant with GDPR and other international data protection standards.
    </p>
  </div>
)}
                    </div>
                    <div  onClick={()=> {
                                HandleClick('3')
                                
                            }} className="cursor-pointer w-full h-auto py-[20px] px-[24px] flex flex-col">
                        <div>
                            <div><h1>What kind of support do you offer?</h1></div>
                            <div className={`${active =='3'&&'Active'} duration-300 cursor-pointer`} onClick={()=>HandleClick('3')}><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.29377 0.293945C6.6844 -0.0966797 7.31877 -0.0966797 7.7094 0.293945L13.7094 6.29395C14.1 6.68457 14.1 7.31895 13.7094 7.70957C13.3188 8.1002 12.6844 8.1002 12.2938 7.70957L7.00002 2.41582L1.70627 7.70645C1.31565 8.09707 0.681274 8.09707 0.290649 7.70645C-0.0999756 7.31582 -0.0999756 6.68145 0.290649 6.29082L6.29065 0.29082L6.29377 0.293945Z" fill="#1F2937"/>
</svg>
</div>
                        </div>
                        {active=="3"&& <div><p> Our team is always here to help. Email us at {' '} <a style={{
            color: '#1F98F5',
            textDecoration: 'underline',
            textDecorationColor: '#1F98F5',
            cursor: 'pointer',
          }}>info@witlab.us</a> or use the live chat — we’ll assist with any technical questions and help you make the most of WIT LAB.</p></div>}
                    </div>
                    <div onClick={()=> {
                                HandleClick('4')
                                
                            }} className="cursor-pointer w-full h-auto py-[20px] px-[24px] flex flex-col">
                        <div>
                            <div><h1>How can I manage or cancel my subscription?</h1></div>
                            <div className={`${active =='4'&&'Active'} duration-300 cursor-pointer`} onClick={()=>HandleClick('4')}><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.29377 0.293945C6.6844 -0.0966797 7.31877 -0.0966797 7.7094 0.293945L13.7094 6.29395C14.1 6.68457 14.1 7.31895 13.7094 7.70957C13.3188 8.1002 12.6844 8.1002 12.2938 7.70957L7.00002 2.41582L1.70627 7.70645C1.31565 8.09707 0.681274 8.09707 0.290649 7.70645C-0.0999756 7.31582 -0.0999756 6.68145 0.290649 6.29082L6.29065 0.29082L6.29377 0.293945Z" fill="#1F2937"/>
</svg>
</div>
                        </div>
                       {active=="4"&& <div><p>To manage your subscription, log in to your account and go to Settings. There, you can:
change your plan;
cancel your subscription;
update payment details.

It only takes a minute, and you’ll see confirmation of the changes immediately. </p></div>}
                    </div>
                    <div>
                        <div className="cursor-pointer" onClick={()=> {
                                HandleClick('5') 
                                
                            }}>
                            <div><h1>How do I request a refund?</h1></div>
                            <div className={`${active =='5'&&'Active'} duration-300 cursor-pointer`} onClick={()=>HandleClick('5')}><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.29377 0.293945C6.6844 -0.0966797 7.31877 -0.0966797 7.7094 0.293945L13.7094 6.29395C14.1 6.68457 14.1 7.31895 13.7094 7.70957C13.3188 8.1002 12.6844 8.1002 12.2938 7.70957L7.00002 2.41582L1.70627 7.70645C1.31565 8.09707 0.681274 8.09707 0.290649 7.70645C-0.0999756 7.31582 -0.0999756 6.68145 0.290649 6.29082L6.29065 0.29082L6.29377 0.293945Z" fill="#1F2937"/>
</svg>
</div>
                        </div>
                      {active == "5" && (
  <div>
    <p>
      You can find full terms in our{' '}
      <a
        href="/refund"
        style={{ 
          color: '#1F98F5', 
          textDecoration: 'underline',
          textDecorationColor: '#1F98F5',
          cursor: 'pointer'
        }}
      >
        Refund Policy
      </a>
      . Key points:
      <br />
      You can request a refund within 14 days of your first payment.<br />
      Refunds apply only to the initial charge and do not cover any future weekly renewals.<br />
      To request a refund, email {" "}
      <a style={{
            color: '#1F98F5',
            textDecoration: 'underline',
            textDecorationColor: '#1F98F5',
            cursor: 'pointer',
          }}>info@witlab.us</a> with the subject "Refund Request", including your account email and payment date.
      <br /><br />
      Once approved, your refund will be processed to the original payment method within 5–10 business days.
    </p>
  </div>
)}

                    </div>
                </div>
            </div>
            <div className="contacts_box border border-[#E5E7EB] bg-[#F8FAFC] rounded-[48px] mt-[154px] py-[33px] px-[30px] flex flex-col gap-[16px] items-center justify-center">
                <div><h1 className="font-[700] text-[#1F2937] text-[24px]">Still have questions?</h1></div>
                <div><p className="text-[#6B7280] text-[16px] text-center">Can't find the answer you're looking for? Our support team is here to help.</p></div>
                <div><button className="flex items-center justify-center gap-[8px] bg-[#FFFFFF] border border-[#C0C1C3] rounded-[18px] h-[48px] w-[209px] cursor-pointer"><svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.20312 0C1.375 0 0.703125 0.671875 0.703125 1.5C0.703125 1.97187 0.925 2.41562 1.30313 2.7L8.10313 7.8C8.45937 8.06563 8.94688 8.06563 9.30313 7.8L16.1031 2.7C16.4812 2.41562 16.7031 1.97187 16.7031 1.5C16.7031 0.671875 16.0312 0 15.2031 0H2.20312ZM0.703125 3.5V10C0.703125 11.1031 1.6 12 2.70312 12H14.7031C15.8062 12 16.7031 11.1031 16.7031 10V3.5L9.90312 8.6C9.19063 9.13438 8.21563 9.13438 7.50313 8.6L0.703125 3.5Z" fill="black"/>
</svg>
<span><Link href={'mailto:info@witlab.us'}>Contact Support</Link></span></button></div>
            </div>
        </div>
    )
}