'use client'
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Scroll = () => {
   const [activeSection, setActiveSection] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // Следим за текущим скроллом внутри блока, чтобы определить активный раздел
  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current) return;
      const scrollTop = scrollRef.current.scrollTop;
      const containerHeight = scrollRef.current.clientHeight;

      const blockHeight = containerHeight;

      const index = Math.min(
        3,
        Math.max(1, Math.round(scrollTop / blockHeight) + 1)
      );

      setActiveSection(index);
    };

    const current = scrollRef.current;
    current?.addEventListener("scroll", onScroll);
    onScroll();

    return () => current?.removeEventListener("scroll", onScroll);
  }, []);

  // Блокируем прокрутку основной страницы, если scrollRef может сам скроллиться
  useEffect(() => {
    const container = scrollRef.current;
    if (!inView || !container) return;
// container.scrollIntoView({
//     behavior:'smooth'
// })
    const onWheel = (e: WheelEvent) => {
      const deltaY = e.deltaY;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      const isScrollingDown = deltaY > 0;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      const canScrollInside =
        (isScrollingDown && !isAtBottom) ||
        (!isScrollingDown && !isAtTop);

      if (canScrollInside) {
        
        
        // e.stopPropagation(); // блокируем скролл наружу
      }
    };

    container.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, [inView]);


  return (
    <div id="scrolBox" className="scroll_box w-full h-auto bg-[#F9FAFB] ">
      <div
        className="w-full h-full mx-auto flex items-center justify-center relative"
        ref={ref}
      >
        <div
          ref={scrollRef}
          className={`flex flex-col gap-[48px] ${inView ==true?'overflow-y-auto' :'overflow-y-hidden'} scrol_box w-full px-4 translate-x-[-300px]`}
          style={{ height: "calc(100vh)" }}
        >
          {/* Слайды */}
          <div className="flex flex-col gap-[60px] h-[100vh] shrink-0 items-center justify-center ">
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

          <div className="flex flex-col gap-[60px] h-[100vh] shrink-0 items-center justify-center">
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

          <div className="flex flex-col gap-[60px] h-[100vh] shrink-0 items-center justify-center">
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
        </div>
       <div className="emoji absolute left-[60%] top-[50%] translate-y-[-50%] w-[140px] h-[60px] transition-all duration-500 ease-in-out">
  <img
    src="/emoji1.png"
    alt="emoji1"
    className={`w-[140px] h-[60px] object-contain absolute top-0 left-0 transition-opacity duration-500 ${
      activeSection === 1 ? 'opacity-100' : 'opacity-0'
    }`}
  />
  <img
    src="/emoji2.png"
    alt="emoji2"
    className={`w-[140px] h-[60px] object-contain absolute top-0 left-0 transition-opacity duration-500 ${
      activeSection === 2 ? 'opacity-100' : 'opacity-0'
    }`}
  />
  <img
    src="/emoji3.png"
    alt="emoji3"
    className={`w-[140px] h-[60px] object-contain absolute top-0 left-0 transition-opacity duration-500 ${
      activeSection === 3 ? 'opacity-100' : 'opacity-0'
    }`}
  />
</div>

      </div>
    </div>
  );
};
