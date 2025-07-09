"use client";

import { EnvelopeSvg } from "@/app/assets/svg";
import { useState } from "react";
import { WaitlistModalComponent } from "./modal/waitlistModal";

export function JoinWaitlist() {
   const [formOpen, setFormOpen] = useState(false);

   return (
      <main
         className="bg-[#08569C]  text-[white] py-[4.5rem]"
         style={{ fontFamily: "Montserrat, sans-serif" }}
      >
         <WaitlistModalComponent
            isOpen={formOpen}
            onClose={() => setFormOpen(false)}
            setFormOpen={setFormOpen}
         />
         <div className="mx-5">
            <div className="max-w-[1200px] m-auto flex flex-col md:flex-row items-center justify-between w-full">
               <div>
                  <h3 className="md:text-[1.4rem] text-[18px] font-[400] max-w-[258px] md:max-w-full md:text-left text-center m-auto">
                     Enjoy a complimentary voucher on your first order with us!
                  </h3>
                  <h2 className="font-[700] text-[45px] md:max-w-full max-w-[348px] md:text-left text-center m-auto md:text-[2.8rem] mb-[2rem]">
                     Join the Movement
                  </h2>
                  <h3 className="md:max-w-[650px] text-[18px] max-w-[348px] md:text-left text-center mx-auto md:mx-0 md:text-[25px] font-[400] mb-[2.4rem]">
                     Join our email subscription now to get updates on promotions and coupons.
                  </h3>
                  <div className="hidden h-[95.52195739746094] bg-[white] py-[1rem] px-[.87rem] md:flex md:flex-row flex-col items-center justify-between max-w-[773px] rounded-[10px]">
                     <EnvelopeSvg />

                     <input
                        placeholder="Your Email Address"
                        className="text-[#949494AB] text-[1.3rem] h-[30px] ml-3"
                     />
                     <button
                        onClick={() => setFormOpen(true)}
                        className="bg-[#08569C] text-[white] text-[1.3rem] font-[600] rounded-[11.9px] cursor-pointer outline-none py-[16.76px] px-[20px]"
                     >
                        SIGN UP FOR EARLY ACCESS
                     </button>
                  </div>
                  <div className="md:hidden bg-[white] py-[17px] px-[13px] flex md:flex-row flex-col items-center justify-between max-w-[348px] m-auto rounded-[10px]">
                     <div className="flex items-center gap-3 mb-3 border-2 border-[#E1E1E1] rounded-[6px] p-[12px]">
                        <EnvelopeSvg />

                        <input
                           placeholder="Your Email Address"
                           className="text-[#949494AB] text-[18px] h-[30px] ml-3"
                        />
                     </div>
                     <button
                        onClick={() => setFormOpen(true)}
                        className="bg-[#08569C] text-[white] text-[18px] font-[600] rounded-[11.9px] cursor-pointer outline-none py-[16.76px] px-[20px]"
                     >
                        SIGN UP FOR EARLY ACCESS
                     </button>
                  </div>
               </div>
               <div>
                  <img src="/assets/joinus.png" alt="join us" />
               </div>
            </div>
         </div>
      </main>
   );
}
