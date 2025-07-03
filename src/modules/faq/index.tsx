"use client";

import { LinkedinSvg } from "@/app/assets/svg";
import { useState } from "react";

const teamData = [
   {
      name: "Charles Ajayi",
      role: "Chief Operations",
      img: "/assets/charles.png",
      answer: "Charles oversees day-to-day operations ensuring seamless execution of our mission.",
   },
   {
      name: "Soyemi Akinwande",
      role: "Product Designer",
      img: "/assets/productDesigner.svg",
      answer: "Soyemi designs delightful user experiences for all our products and platforms.",
   },
   {
      name: "Ibukun Odujoko",
      role: "Head Sales",
      img: "/assets/ibukun.png",
      answer: "Ibukun leads sales efforts, driving growth and building key relationships.",
   },
   {
      name: "Niyi Olufemi",
      role: "Head of Admin",
      img: "/assets/niyi.png",
      answer: "Niyi ensures administrative efficiency and operational excellence across the team.",
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

   return (
      <div>
         {/* FAQ Section */}
         <section className="relative">
            <div className="bg-[#08569C] h-[885px] mt-[7rem]">
               <div className="h-[912px] md:w-[1241px] rounded-[24px] border-3 border-[#525252] gap-[2rem] md:flex justify-between absolute left-1/2 -translate-x-1/2 bottom-15 bg-white z-10 px-[1.2rem] py-[1rem]">
                  {/* Questions/Clickable Team */}
                  <div className="w-full md:max-h-[761px] overflow-auto pr-3 custom-scroll">
                     <h1 className="text-[50px] font-[600] text-[#525252] mb-6">FAQs</h1>
                     <div className="md:grid gap-4 flex w-full max-w-[300px] md:max-w-full ">
                        {faq.map((member) => (
                           <div
                              key={member.name}
                              onClick={() => setActiveMember(member)}
                              className={`cursor-pointer md:text-[24px] font-[600] rounded-[8px] md:py-[24px] px-[11px] transition-colors ${
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
                  {/* Answer Section */}
                  <div className="w-full">
                     <h1 className="text-[50px] font-[600] text-[#525252]">Answers</h1>
                     <div className="text-[24px] font-[600] text-[#525252] bg-[#BBDFFF] rounded-[24px] min-h-[761px] p-8">
                        <p>{activeMember.answer}</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Team Members Carousel */}
         <main className="mt-[3.5rem]" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <div className="max-w-[1200px] m-auto">
               <header className="text-center">
                  <h1 className="text-[#08569C] text-[35px] md:text-[50px] font-[800]">
                     Meet the Team
                  </h1>
                  <p className="text-[#525252] text-[18px] md:text-[28.65px] font-[400] max-w-[943px] m-auto">
                     At ShopQuick, our team is made up of passionate, innovative young professionals
                     dedicated to going the extra mile. We are committed to delivering exceptional
                     service.
                  </p>
               </header>

               <section className="flex items-center md:flex-row flex-col gap-[2rem] my-[6rem] overflow-x-auto custom-scroll px-4">
                  {teamData.map((member) => (
                     <div
                        key={member.name}
                        onClick={() => setActiveMember(member)}
                        className={`bg-[#C6E6FF] cursor-pointer rounded-[8.82px] pt-[7.84px] px-[7.84px] max-w-[282.82px] relative border-2 `}
                     >
                        <img src={member.img} alt={member.name} />
                        <div className="absolute bottom-[3.5rem] right-6">
                           <LinkedinSvg />
                        </div>
                        <div className="mt-[1.5rem]">
                           <p className="text-[#08569C] text-[15.25px] font-[800]">{member.name}</p>
                           <span className="text-[22.45px] font-[400] text-[#868383]">
                              {member.role}
                           </span>
                        </div>
                     </div>
                  ))}
               </section>
            </div>
         </main>

         {/* Custom Scrollbar Styling */}
         <style jsx>{`
            .custom-scroll::-webkit-scrollbar {
               height: 8px;
               width: 8px;
            }
            .custom-scroll::-webkit-scrollbar-track {
               background: transparent;
            }
            .custom-scroll::-webkit-scrollbar-thumb {
               background-color: #08569c;
               border-radius: 5px;
            }
         `}</style>
      </div>
   );
}
