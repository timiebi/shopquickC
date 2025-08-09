"use client";

import { Carousel } from "@/modules/carousel";
import { WaitlistModalComponent } from "@/modules/modal/waitlistModal";
import { OurSolid } from "@/modules/oursolutions";
import { TheProblem } from "@/modules/theProblem";
import { TryTheApp } from "@/modules/tryTheApp";
import { useState } from "react";

export default function Home() {
   const [formOpen, setFormOpen] = useState(false);
   return (
      <div>
         <WaitlistModalComponent
            isOpen={formOpen}
            onClose={() => setFormOpen(false)}
            setFormOpen={setFormOpen}
         />
         <div
            style={{ backgroundImage: `url(/assets/herobg.png)`, backgroundColor: "#EBF4FF" }}
            className=" bg-cover bg-center md:h-[669px] md:w-auto w-full"
         >
            <div className="max-w-[1400px] mx-auto px-5 pt-[9rem] md:pt-[4rem]">
               <div className="flex md:flex-row flex-col items-center justify-center md:justify-between gap-[2rem]">
                  <div>
                     <h1 className="text-[40px] md:text-[2.3rem] max-w-[348px] md:text-left text-center m-auto md:max-w-[600px] text-[#525252]  font-[700] leading-[50px] mb-[2rem]">
                        Stop Overpaying on <span className="text-[#08569C]">Groceries</span>. Join
                        Other Smart Savers{" "}
                        <span className="text-[#08569C]">Saving £1,000+ yearly!</span>
                     </h1>
                     <p className="text-[20px] md:text-[1.2rem] font-[500] text-[#1C1C1C] max-w-[348px] m-auto md:mx-0 md:max-w-[583px] mb-[2rem] md:text-left text-center">
                        Shopquick helps you save 1000+ a year on groceries with real-time price
                        comparisons, AI powered personalised deals and seamless checkout across
                        multiple supermarkets
                     </p>
                     <button
                        onClick={() => setFormOpen(true)}
                        className="cursor-pointer hidden md:block bg-[#08569C] text-[white] text-[1.2rem] font-[600] rounded-[11.9px] py-[16.76px] px-[20px]"
                     >
                        SIGN UP FOR EARLY ACCESS
                     </button>
                  </div>
                  <img
                     src="/assets/shopQuickHero.png"
                     alt="shopQuickHero"
                     className="m-auto max-w-[348px] md:max-w-[600px]"
                  />
                  <button
                     onClick={() => setFormOpen(true)}
                     className="cursor-pointer md:hidden bg-[#08569C] text-[white] text-[1rem] font-[600] rounded-[11.9px] py-[16px] px-[20px] mb-[3rem]"
                  >
                     SIGN UP FOR EARLY ACCESS
                  </button>
               </div>
            </div>
         </div>
         <div className="mx-auto py-5  md:px-180 flex items-center justify-center overflow-x-scroll">
            <Carousel />
         </div>
         <div className="mx-auto px-5  max-w-[1200px]">
            <TheProblem />
         </div>
         <div>
            <OurSolid />
         </div>
         <div className="max-w-[1200px] m-auto px-5 md:px-0 text-center mt-15">
            <div>
               <h1 className="text-[#08569C] text-[1.2rem] md:text-[2.3rem] font-[800] max-w-[883px] m-auto">Why ShopQuick Stands out From Competitors</h1>
               <div className="mt-8">
                  <div>
                     <img src="/assets/standout.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
         <div>
            <TryTheApp />
         </div>
      </div>
   );
}
