"use client";

import { AndroidSvg, IosSvg } from "@/app/assets/svg";
import { useState } from "react";
const tabs = ["Shoppers", "Stores", "AI"];
export function TryTheApp() {
   const [activeTab, setActiveTab] = useState("Shoppers");
   return (
      <main style={{ fontFamily: "Montserrat, sans-serif" }} className="mb-9 md:mx-5">
         <div className="max-w-[300px] md:max-w-[495px] m-auto mt-[4rem] mb-5">
            <div className="bg-[#BBDFFF] max-w-[371px] rounded-[16px] flex items-center p-[4px] justify-between m-auto">
               {tabs.map((tab) => (
                  <div
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`cursor-pointer text-[1rem] md:text-[1.45rem] font-[400] py-[13px] px-[24px] rounded-[16px]  ${
                        activeTab === tab ? "bg-[#08569C] text-white" : "text-[#525252]"
                     }`}
                  >
                     <span>{tab}</span>
                  </div>
               ))}
            </div>
            <div className="m-auto max-w-[226px]">
               <h2 className="text-[#08569C] text-[35px] md:text-[36.93px] font-[800] text-center mt-4">
                  Try the app
               </h2>
            </div>
            <p className="text-[18px]  md:text-[1.135rem] font-[400] text-[#525252] text-center max-w-[348px] m-auto md:max-w-[495px] leading-[32px] mt-4">
               Save Big, Enjoy More: Experience the Next Generation of Grocery Shopping with
               Intelligent Price Comparison.
            </p>
            <div className="max-w-[115px] m-auto flex items-center gap-[1rem] mt-5">
               <IosSvg />
               <AndroidSvg />
            </div>
            <div className="max-w-[250px] m-auto mt-[1.5rem]">
               {
                  (activeTab === "Shoppers" ? (
                     <img src="/assets/iphone.png" alt="phone" />
                  ) : (
                     (activeTab === "Stores" ? (
                        <img src="/assets/stores.svg" alt="phone" />
                     ) : (
                        <img src="/assets/ai.svg" alt="phone" />
                     ))
                  ))
               }
            </div>
         </div>
      </main>
   );
}
