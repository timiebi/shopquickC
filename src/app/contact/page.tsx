// import { FaqPage } from "@/modules/faq";

const constact = [
   {
      name: "1900 - 6666",
      icon: "/assets/contactIcon/phone.svg",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/twitter.svg",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/insta.svg",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/fb.svg",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/talk.svg",
   },
];

const founder = [
   {
      name: "1900 - 6666",
      icon: "/assets/contactIcon/mail.svg",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/twitter.svg",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/linkedin.svg",
   },
];

export default function ContactPage() {
   return (
      <main className="relative mb-35">
         <div className="bg-[url('/assets/herobg2.png')] bg-cover bg-center h-[391px] md:h-[409px] md:w-auto w-full relative">
            <div className="max-w-[1400px] m-auto pt-[5rem] md:pt-[4rem]">
               <div className="flex md:flex-row flex-col items-center justify-center gap-[2rem]">
                  <div>
                     <h1 className="text-[40px] md:text-[4rem] max-w-[348px] md:text-left text-center m-auto md:max-w-[1058px] text-[#08569C] font-[700] leading-[50px] mb-[2rem]">
                        We'd love to hear from you
                     </h1>
                     <p className="text-[13.79px] md:text-[1.5rem] font-[400] text-[#525252] max-w-[348px] m-auto md:max-w-[1000px] mb-[2rem] text-center">
                        We’d love to hear from you, whether you’re a shopper, store owner, or
                        investor.” Have questions about how ShopQuick works, our pricing, policies,
                        or the benefits of using our app? Our dedicated team is here to help.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <section className="mt-30 flex flex-col md:flex-row items-center justify-center gap-[4rem] md:gap-9 mb-[5rem] md:mb-6">
            <div className="max-w-[350px] md:max-w-[500px] w-full rounded-[18px] border-[#525252] border-3 md:border-5 max-h-[646px] md:max-h-[600px] py-[1rem] px-[20px] md:px-[50px]  top-[22rem] md:top-[23rem] md:left-50 bg-white left-1/2  md:translate-x-0">
               <main className="md:max-w-[1173px] w-full mt-2">
                  <header className="hidden md:block">
                     <h1 className="text-[#525252] font-[800] text-[2rem]">Email Us</h1>
                  </header>
                  <div className="mt-5">
                     <div className="mb-5">
                        <input
                           type="text"
                           placeholder="Full Name"
                           className="border-none outline-none bg-[#F3F4F6] rounded-[12px] h-[30.7928466796875px] md:h-[50px] w-full px-[22px] text-[11.09px] md:text-[1rem] text-[#525252] placeholder:text-[11.09px] placeholder:md:text-[1rem] placeholder:text-[#525252] placeholder-shown:md:text-[1rem] placeholder-shown:text-[11.09px] placeholder-shown:text-[#525252]"
                        />
                     </div>
                     <div className="w-full flex items-center justify-between gap-6 flex-col md:flex-row">
                        <input
                           type="text"
                           placeholder="Email Address"
                           className="border-none outline-none bg-[#F3F4F6] rounded-[12px] h-[44.7928466796875px] md:h-[50px] w-full px-[22px] text-[11.09px] md:text-[1rem] text-[#525252] placeholder:text-[11.09px] placeholder:md:text-[1rem] placeholder:text-[#525252] placeholder-shown:md:text-[1rem] placeholder-shown:text-[11.09px] placeholder-shown:text-[#525252]"
                        />
                        <input
                           type="text"
                           placeholder="Phone Number"
                           className="border-none outline-none bg-[#F3F4F6] rounded-[12px] h-[44.7928466796875px] md:h-[50px] w-full px-[22px] text-[11.09px] md:text-[1rem] text-[#525252] placeholder:text-[11.09px] placeholder:md:text-[1rem] placeholder:text-[#525252] placeholder-shown:md:text-[1rem] placeholder-shown:text-[11.09px] placeholder-shown:text-[#525252]"
                        />
                     </div>
                     <div className="mt-6 mb-5">
                        <textarea
                           className="py-[2rem] px-4 md:px-8 rounded-[12px] w-full bg-[#F3F4F6] text-[11.09px] md:text-[1rem] text-[#525252] placeholder:text-[11.09px] placeholder:md:text-[.975rem] placeholder:text-[#525252] placeholder-shown:md:text-[17.28px] placeholder-shown:text-[11.09px] placeholder-shown:text-[#525252]"
                           name=""
                           id=""
                           rows={6}
                           placeholder="Type your Message , Question or Inquiries here"
                        ></textarea>
                     </div>
                     <button className="bg-[#08569C] py-[12px] px-[50px] rounded-[9px] max-w-[228px] text-white">
                        Send Message
                     </button>
                  </div>
               </main>
            </div>
            <div>
               <div>
                  <h1 className="text-center mb-4 font-[800] text-[1.8rem] text-[#525252]">
                     Follow Us
                  </h1>
                  <div className="flex items-center flex-wrap max-w-[500px] gap-6 justify-center">
                     {constact.map((list, index) => (
                        <div
                           key={index}
                           className="flex items-center flex-col gap-2 cursor-pointer"
                        >
                           <img src={list.icon} alt="" className="max-w-[28px]" />
                           <p className="text-[1rem] text-center">{list.name}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="mt-20">
                  <h1 className="text-center mb-4 font-[800] text-[1.8rem] text-[#525252]">
                     Contact Founder
                  </h1>
                  <div className="flex items-center flex-wrap max-w-[500px] gap-6 justify-center">
                     {founder.map((list, index) => (
                        <div
                           key={index}
                           className="flex items-center flex-col gap-2 cursor-pointer"
                        >
                           <img src={list.icon} alt="" className="max-w-[28px]" />
                           <p className="text-[1rem] text-center">{list.name}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
         {/* <section>
            <FaqPage />
         </section> */}
      </main>
   );
}
