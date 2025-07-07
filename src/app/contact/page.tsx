import { FaqPage } from "@/modules/faq";

export default function ContactPage() {
   return (
      <main className="relative ">
         <div className="bg-[url('/assets/herobg.png')] bg-cover bg-center h-[391px] md:h-[669px] md:w-auto w-full relative">
            <div className="max-w-[1400px] m-auto pt-[2rem] md:pt-[4rem]">
               <div className="flex md:flex-row flex-col items-center justify-center gap-[2rem]">
                  <div>
                     <h1 className="text-[40px] md:text-[73.47px] max-w-[348px] md:text-left text-center m-auto md:max-w-[1058px] text-[#08569C] font-[700] leading-[50px] mb-[2rem]">
                        We'd love to hear from you
                     </h1>
                     <p className="text-[13.79px] md:text-[25px] font-[400] text-[#525252] max-w-[348px] m-auto md:max-w-[1000px] mb-[2rem] text-center">
                        Have questions about how ShopQuick works, our pricing, policies, or the
                        benefits of using our app? Our dedicated team is here to help. Whether you
                        need assistance with price comparisons, store navigation, scanning, or
                        making direct payments to skip queues — we're happy to support you
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <section className="md:h-[600px] h-[520px]">
            <div className="max-w-[350px] md:max-w-[1240px] w-full rounded-[18px] border-[#525252] border-3 md:border-5 max-h-[646px] md:max-h-[781px] py-[1rem] px-[20px] md:px-[50px] absolute top-[20rem] md:top-[23rem] md:left-50 bg-white left-1/2 -translate-x-1/2  md:translate-x-0">
               <main className="md:max-w-[1173px] w-full mt-2">
                  <header className="hidden md:block">
                     <h1 className="text-[#525252] font-[800] text-[43.48px]">Email Us</h1>
                  </header>
                  <div className="mt-5">
                     <div className="w-full flex items-center justify-between gap-6 flex-col md:flex-row">
                        <input
                           type="text"
                           placeholder="Full Name"
                           className="border-none outline-none bg-[#F3F4F6] rounded-[12px] h-[44.7928466796875px] md:h-[69px] w-full px-[22px] text-[11.09px] md:text-[17.28px] text-[#525252] placeholder:text-[11.09px] placeholder:md:text-[17.28px] placeholder:text-[#525252] placeholder-shown:md:text-[17.28px] placeholder-shown:text-[11.09px] placeholder-shown:text-[#525252]"
                        />
                        <input
                           type="text"
                           placeholder="Email Address"
                           className="border-none outline-none bg-[#F3F4F6] rounded-[12px] h-[44.7928466796875px] md:h-[69px] w-full px-[22px] text-[11.09px] md:text-[17.28px] text-[#525252] placeholder:text-[11.09px] placeholder:md:text-[17.28px] placeholder:text-[#525252] placeholder-shown:md:text-[17.28px] placeholder-shown:text-[11.09px] placeholder-shown:text-[#525252]"
                        />
                        <input
                           type="text"
                           placeholder="Phone Number"
                           className="border-none outline-none bg-[#F3F4F6] rounded-[12px] h-[44.7928466796875px] md:h-[69px] w-full px-[22px] text-[11.09px] md:text-[17.28px] text-[#525252] placeholder:text-[11.09px] placeholder:md:text-[17.28px] placeholder:text-[#525252] placeholder-shown:md:text-[17.28px] placeholder-shown:text-[11.09px] placeholder-shown:text-[#525252]"
                        />
                     </div>
                     <div className="mt-6 mb-5">
                        <textarea
                           className="py-[2rem] px-4 md:px-8 rounded-[12px] h-[289px] md:h-[450px] w-full bg-[#F3F4F6] text-[11.09px] md:text-[17.28px] text-[#525252] placeholder:text-[11.09px] placeholder:md:text-[17.28px] placeholder:text-[#525252] placeholder-shown:md:text-[17.28px] placeholder-shown:text-[11.09px] placeholder-shown:text-[#525252]"
                           name=""
                           id=""
                           placeholder="Type your Message , Question or Inquiries here"
                        ></textarea>
                     </div>
                     <button className="bg-[#08569C] py-[12px] px-[50px] rounded-[9px] max-w-[228px] text-white">
                        Send Message
                     </button>
                  </div>
               </main>
            </div>
         </section>
         <section>
            <FaqPage />
         </section>
      </main>
   );
}
