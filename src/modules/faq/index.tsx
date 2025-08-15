"use client";

import { LinkedinSvg } from "@/app/assets/svg";
import { useState } from "react";

const teamData = [
   // {
   //   name: "Charles Ajayi",
   //   role: "Chief Operations",
   //   img: "/assets/charles.png",
   //   answer: "Charles oversees day-to-day operations ensuring seamless execution of our mission.",
   // },
   // {
   //   name: "Soyemi Akinwande",
   //   role: "Product Designer",
   //   img: "/assets/productDesigner.svg",
   //   answer: "Soyemi designs delightful user experiences for all our products and platforms.",
   // },
   // {
   //   name: "Ibukun Odujoko",
   //   role: "Head Sales",
   //   img: "/assets/ibukun.png",
   //   answer: "Ibukun leads sales efforts, driving growth and building key relationships.",
   // },
   // {
   //   name: "Niyi Olufemi",
   //   role: "Head of Admin",
   //   img: "/assets/niyi.png",
   //   answer: "Niyi ensures administrative efficiency and operational excellence across the team.",
   // },
   {
      name: "Soyemi Akinwande",
      role: "Product Designer",
      img: "/assets/productDesigner.svg",
   },
   {
      name: "Stuart Prestedge",
      role: "Start-up Advisor",
      img: "/assets/prestige.png",
   },
   {
      name: "Tomi Ogundipe",
      role: "AI Advisor",
      img: "/assets/tomi.png",
   },
];

const faq = [
   {
      name: "What is ShopQuick?",
      answer:
         "ShopQuick is a smart shopping app that helps you compare grocery prices across all major UK supermarkets. It guides you to the stores, helps organize your shopping list tailored to your budget using AI, educates you on health, and keeps you updated on current promotions and discounts.",
   },
   {
      name: "How does ShopQuick compare prices across supermarkets?",
      answer:
         "ShopQuick uses real-time data aggregation to scan multiple supermarket databases, comparing prices for the same items across retailers. This allows you to make cost-effective choices instantly.",
   },
   {
      name: "Can ShopQuick guide me to the store?",
      answer:
         "Yes! ShopQuick offers built-in navigation that directs you to the nearest store carrying the items on your list, ensuring both convenience and efficiency.",
   },
   {
      name: "What is the ShopQuick Bot?",
      answer:
         "The ShopQuick Bot is your personal AI assistant within the app. It helps answer your shopping queries, recommends items based on your preferences, and offers smart suggestions to improve your list and savings.",
   },
   {
      name: "How does the AI assist with my shopping list?",
      answer:
         "The AI analyzes your preferences, budget, and dietary needs to generate an optimized shopping list. It recommends best-value alternatives and prioritizes healthy and affordable choices.",
   },
   {
      name: "Does ShopQuick provide health education?",
      answer:
         "Absolutely. ShopQuick offers in-app tips on healthy eating, nutritional breakdowns of food items, and personalized recommendations to support a healthier lifestyle.",
   },
   {
      name: "How does ShopQuick help me save money?",
      answer:
         "By comparing prices across supermarkets, highlighting ongoing deals, and suggesting cheaper alternatives, ShopQuick ensures you always get the best value for your money.",
   },
];

export function FaqPage() {
   const [activeMember, setActiveMember] = useState(faq[0]);
   const [activeIndex, setActiveIndex] = useState(0);
   const [isExpanded, setIsExpanded] = useState(false);

   const maxLength = 400;
   const isTruncated = activeMember.answer.length > maxLength;
   const previewText = isTruncated
      ? activeMember.answer.slice(0, maxLength) + "..."
      : activeMember.answer;

   //   const handleNext = () => {
   //     if (activeIndex < faq.length - 1) {
   //       setActiveIndex(activeIndex + 1);
   //       setActiveMember(faq[activeIndex + 1]);
   //       setIsExpanded(false);
   //     }
   //   };

   //   const handlePrev = () => {
   //     if (activeIndex > 0) {
   //       setActiveIndex(activeIndex - 1);
   //       setActiveMember(faq[activeIndex - 1]);
   //       setIsExpanded(false);
   //     }
   //   };

   return (
      <div>
         {/* FAQ Section */}
         <section className="relative">
            <div className="bg-[#08569C] h-[532px] md:h-[685px] mt-[9rem] md:mt-[9rem]">
               {/* Desktop */}
               <div className="hidden h-[700px] overflow-hidden md:w-[1200px] rounded-[24px] border-3 border-[#525252] gap-[2rem] md:flex justify-between absolute left-1/2 -translate-x-1/2 bottom-20 bg-white z-10 px-[1.2rem] py-[1rem]">
                  <div className="w-full md:max-h-[761px] overflow-auto pr-3 custom-scroll max-w-[565px]">
                     <h1 className="text-[2.5rem] font-[600] text-[#525252] mb-6 fixed bg-white w-full max-w-[565px]">
                        FAQs
                     </h1>
                     <div className="md:grid gap-4 flex w-full max-w-[300px] md:max-w-full md:mt-20">
                        {faq.map((member) => (
                           <div
                              key={member.name}
                              onClick={() => {
                                 setActiveMember(member);
                                 setActiveIndex(faq.indexOf(member));
                              }}
                              className={`cursor-pointer md:text-[1.2rem] font-[600] rounded-[8px] md:py-[24px] px-[11px] transition-colors ${
                                 activeMember.name === member.name
                                    ? "bg-[#08569C] text-white"
                                    : "bg-[#FBFCFB] text-[#525252] border-2 border-[#F1F1F1]"
                              }`}
                           >
                              <p>{member.name}</p>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="w-full h-full max-h-[90%] max-w-[565px]">
                     <h1 className="text-[2.5rem] font-[600] text-[#525252] w-full bg-white max-w-[565px] z-90 relative">
                        Answers
                     </h1>
                     <div className="text-[1.3rem] font-[600] text-[#525252] bg-[#BBDFFF] rounded-[24px] h-full  p-8 mt-3">
                        <p>{activeMember.answer}</p>
                     </div>
                  </div>
               </div>
               {/* Mobile */}
               <div className="md:hidden rounded-[24px] min-h-[546px] border-3 border-[#525252] gap-[2rem] absolute mx-5 -top-15 bg-white z-10 px-[1.2rem] py-[1rem]">
                  <h1 className="text-[2.2rem] font-[500] text-[#525252]">FAQs</h1>
                  <div className="mt-3 text-[16px] text-[#525252] font-[500]">
                     <p>
                        {isExpanded ? activeMember.answer : previewText}
                        {isTruncated && (
                           <span
                              onClick={() => setIsExpanded(!isExpanded)}
                              className="text-[#08569C] font-[600] ml-2 cursor-pointer"
                              role="button"
                              aria-expanded={isExpanded}
                              aria-label={isExpanded ? "Collapse answer" : "Expand answer"}
                           >
                              {isExpanded ? "Show Prev" : "Show More"}
                           </span>
                        )}
                     </p>
                  </div>

                  <div className="mt-[8rem] absolute bottom-5">
                     <div className="max-w-[310px]">
                        <div className="flex items-center gap-[2rem] w-full overflow-x-scroll no-scrollbar">
                           {faq.map((list, index) => (
                              <section
                                 onClick={() => {
                                    setActiveMember(list);
                                    setActiveIndex(index);
                                    setIsExpanded(false);
                                 }}
                                 key={index}
                                 className={`${
                                    activeMember.name === list.name
                                       ? "bg-[#08569C] text-white"
                                       : "bg-[#FBFCFB] text-[#525252] border-2 border-[#F1F1F1]"
                                 } min-w-[208.81622314453125px] w-full rounded-[6.6px] min-h-[58.87787628173828px]`}
                              >
                                 <p className="text-[12.12px] font-[600] w-full p-4 px-5">
                                    {list.name}
                                 </p>
                              </section>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Team Members Carousel */}
         <main className="mt-[3.5rem]" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <div className="max-w-[1200px] m-auto">
               <header className="text-center">
                  <h1 className="text-[#08569C] text-[35px] md:text-[3rem] font-[800]">
                     Meet the Team
                  </h1>
                  <p className="text-[#525252] text-[18px]  md:text-[1.4rem] font-[400] max-w-[943px] m-auto">
                     At ShopQuick, our team is made up of passionate, innovative young professionals
                     dedicated to going the extra mile. We are committed to delivering exceptional
                     service.
                  </p>
               </header>
               <div className="m-auto mt-[3rem]">
                  <div className="m-auto max-w-[310px] md:max-w-[368.9792175292969px]">
                     <img src="/assets/CEO.png" alt="ceo" className="w-full" />
                  </div>
                  <div className="text-center">
                     <p className="text-[#08569C] text-[19.47px]  font-[800]">
                        Adedimeji Aina-Marshall,
                     </p>
                     <p className="text-[28.65px] font-[400] text-[#868383]">Founder & CEO</p>
                  </div>
                  <p className="text-[18px] md:text-[1.4rem] text-center font-[600] text-[#525252] max-w-[348px] md:max-w-[943px] m-auto mt-4">
                     Visionary behind ShopQuick. Experienced IT project manager & entrepreneur with
                     a track record in scaling startup and fundraising
                  </p>
               </div>
               <section className="md:overflow-hidden no-scrollbar overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 mt-[6rem] md:max-w-full max-w-[400px] mx-auto mb-[3rem]">
                  <div className="flex items-center justify-between w-full gap-6">
                     {teamData.map((list) => (
                        <div
                           key={list.name}
                           className="bg-[#C6E6FF] rounded-[8.82px] py-[7.84px] px-[7.84px] w-[282px] flex-shrink-0 snap-start relative"
                        >
                           <div>
                              <img
                                 src={list.img}
                                 alt={list.name}
                                 className="w-full rounded-[8px]"
                              />
                           </div>
                           <div className="absolute bottom-[3.5rem] right-6">
                              <LinkedinSvg />
                           </div>
                           <div className="mt-[1.5rem]">
                              <p className="text-[#08569C] text-[1rem] font-[800]">{list.name}</p>
                              <span className="text-[1.2rem] font-[400] text-[#868383]">
                                 {list.role}
                              </span>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>
            </div>
         </main>
      </div>
   );
}
