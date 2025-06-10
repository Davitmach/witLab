'use client'
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Scroll = () => {
   const [activeSection, setActiveSection] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref:ref1, inView:view1 } = useInView({
    threshold: 0.5,
  });
   const { ref:ref2, inView:view2 } = useInView({
    threshold: 0.5,
  });
   const { ref:ref3, inView:view3 } = useInView({
    threshold: 0.5,
  });



  return (
    <div id="scrolBox" className="scroll_box w-full h-auto bg-[#F9FAFB] ">
      <div
        className="w-full h-full mx-auto flex items-center justify-center relative"
        
      >
       
  

        <div
          ref={scrollRef}
          className={`flex flex-col gap-[48px]   scrol_box w-full px-4 `}
          
          
        >
          {/* Слайды */}

          <div ref={ref1} className={`flex items-center gap-[60px] h-[60vh] shrink-0 duration-[300ms] translate-y-[60px]  justify-center ${view1==true || view2==true || view3==true  ?'opacity-[1] !translate-y-0':'opacity-0 translate-y-[60px]'}`}>
          <div className="flex flex-col gap-[60px]">
            <h1 className="font-[600] text-[38px] text-[#111827] max-w-[507px] w-full">
              Personalized Psychological Insights
            </h1>
            <p className="text-[#6E6E73] font-[600] text-[20px] max-w-[507px] w-full">
              Gain a deeper understanding of your emotions, habits, and behavior
              patterns through tailored psychological analysis. Our approach
              draws on the latest research and real-world practices to help you
              uncover the inner dynamics that shape your relationships.
            </p>
            </div>
            <div className=""> <img
    src="/emoji1.jpg"
    alt="emoji1"

    className={`w-[140px] h-[60px] object-contain transition-opacity duration-500 `}
  /></div>
          </div>

          <div ref={ref2} className={`flex  gap-[60px] h-[60vh] shrink-0 items-center duration-[300ms] translate-y-[60px]  justify-center ${ view2==true || view3==true  ?'opacity-[1] !translate-y-0':'opacity-0 translate-y-[60px]'}`}>
            <div className="flex flex-col gap-[60px]">
            <h1 className="font-[600] text-[38px] text-[#111827] max-w-[507px] w-full">
              Expert Guidance
            </h1>
            <p className="text-[#6E6E73] font-[600] text-[20px] max-w-[507px] w-full">
              Receive support from a team of professional psychologists. They’ll
              offer personalized recommendations, help you navigate challenging
              situations, and guide you through emotional difficulties—with a
              blend of proven psychological methods and genuine empathy.
            </p>
            </div>
            <div>  <img
    src="/emoji2.jpg"
    alt="emoji2"
    className={`w-[140px] h-[60px] object-contain  transition-opacity duration-500 `}
  /></div>
          </div>

          <div ref={ref3} className={`flex  gap-[60px] h-[60vh] shrink-0 items-center justify-center duration-300 ${ view3==true  ?'opacity-[1] !translate-y-0':'opacity-0 translate-y-[60px]'}`}>
            <div className="flex flex-col gap-[60px]">
            <h1 className="font-[600] text-[38px] text-[#111827] max-w-[507px] w-full">
              Relationship Compatibility
            </h1>
            <p className="text-[#6E6E73] font-[600] text-[20px] max-w-[507px] w-full">
              Discover who you’re most psychologically compatible with. We
              analyze your core values, attachment style, and communication
              patterns to help you build deeper, more harmonious
              relationships—fostering understanding, connection, and lasting
              emotional bonds.
            </p>
            </div>
            <div>  <img
    src="/emoji3.jpg"
    alt="emoji3"
    className={`w-[140px] h-[60px] object-contain  transition-opacity duration-500 `}
  /></div>
          </div>
        </div>
 

      </div>
    </div>
  );
};
