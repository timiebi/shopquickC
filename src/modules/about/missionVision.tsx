export function VisionMission() {
   return (
      <div style={{ fontFamily: "Montserrat, sans-serif" }} className="pt-5">
         <div className="bg-[#E4E4E4] py-[2rem] mb-[4rem]">
            <div className="max-w-[311.6666564941406px] md:max-w-[1200px] m-auto px-5">
               <div className="mb-7">
                  <h1 className="text-[#08569C] text-[25px] md:text-[2.3rem] font-[800] text-center mb-6">
                     OUR MISSION
                  </h1>
                  <p className="text-[14px] md:text-[1.4rem] font-[400] text-[#525252] text-center">
                     "A future where grocery shopping is completely optimised, driven by AI,
                     real-time pricing, and smart integrations so that everyone can make
                     cost-effective, convenient, and sustainable shopping decisions effortlessly."
                  </p>
               </div>
               <div>
                  <h1 className="text-[#08569C] text-[25px] md:text-[2.3rem] font-[800] text-center mb-6">
                     OUR VISION
                  </h1>
                  <p className="text-[14px] md:text-[1.4rem] font-[400] text-[#525252] text-center">
                     "To empower consumers with smart, data-driven grocery shopping, ensuring they
                     never overpay, never miss a deal, and always shop efficiently saving time,
                     money, and reducing food waste."
                  </p>
               </div>
            </div>
         </div>
         <div className="md:max-w-[622px] max-w-[265.00006103515625px] m-auto">
            <img src="/assets/PHONES.png" className="hidden md:block" alt="phone" />
            <img src="/assets/visionmission.svg" alt="pgones" className="md:hidden m-auto" />
         </div>
      </div>
   );
}
