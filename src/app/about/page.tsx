import { AboutMeetTheTeam } from "@/modules/about/meetTheTeam";
import { VisionMission } from "@/modules/about/missionVision";

export default function About() {
   return (
      <main>
         <div className="relative mb-[95rem] md:mb-[30rem] w-full">
            <div
               style={{ fontFamily: "Montserrat, sans-serif" }}
               className="bg-[url('/assets/herobg2.png')] w-full bg-cover bg-center h-[679px] md:h-[1050px]"
            >
               <div className="max-w-[1200px] md:mx-auto md:px-5 pt-[9rem] md:pt-[4rem]">
                  <div className="flex items-center justify-center gap-[2rem]">
                     <div>
                        <h1 className="text-[40px] md:text-[3.5rem] text-[#08569C] font-[700] leading-[50px] mb-[2rem] text-center m-auto">
                           Bringing Joy to Every Cart
                        </h1>
                        <p className="text-[20px] md:text-[1.4rem] font-[400] text-[#1C1C1C] max-w-[348px] md:max-w-[1000px] mb-[2rem] text-center m-auto">
                           We are dedicated to building and shaping the future of grocery shopping,
                           revolutionizing the way people buy, save, and experience their everyday
                           essentials for a smarter and more convenient tomorrow.
                        </p>
                     </div>
                     {/*<img src="/assets/shopQuickHero.png" alt="shopQuickHero"/>*/}
                  </div>
               </div>
            </div>
            <div className="max-w-[1200px] justify-center m-auto pt-[4rem] hidden md:flex">
               <div className="absolute top-[18rem] px-5 max-w-[1200px] m-auto">
                  <div className="flex items-center justify-between">
                     <div className="max-w-[290px] relative top-9">
                        <img src="/assets/fruit.png" alt="join us" className="w-full" />
                     </div>
                     <h2 className="text-[1.5rem] font-[700] text-[#3B3B3B] relative top-[2rem] text-center m-auto">
                        KNOW US MORE
                     </h2>
                     <div className="max-w-[178px]  relative top-2">
                        <img src="/assets/joinus.png" alt="join us" className="w-full" />
                     </div>
                  </div>
                  <div className="border-4 border-[#525252] rounded-[18px] py-[1.2rem] px-[2rem] bg-white">
                     <div className="">
                        <h1 className="font-[800] text-[3rem] text-center text-[#08569C] m-auto">
                           About Shopquick
                        </h1>
                        <p className="text-[1.3rem] font-[400] ">
                           Grocery shopping is something we all do, but for many of us, it’s become
                           stressful, time-consuming, and expensive. Long queues. Missed discounts.
                           Too many apps and the constant pressure to stretch every pound.
                           <br />
                           <br />
                           That’s why we built <strong>ShopQuick</strong>, your personal grocery
                           assistant powered by AI, created to help you shop smarter, save money,
                           and get more time back in your day.
                           <br />
                           <br />
                           What started as a personal frustration, juggling family life, waiting in
                           queues,{" "}
                           <strong>
                              missing deals, and struggling to find essentials while on a tight
                              budget, quickly became a mission to help millions of working families,
                              busy professionals, students and everyday shoppers
                           </strong>{" "}
                           who face the same challenge. <br /> <br /> Now, we’re using technology to
                           solve a very human problem.
                           <br />
                           <br />
                           <i>
                              “I built ShopQuick because people like us, real shoppers who deserve
                              tools that make life easier, not harder. Grocery shopping shouldn’t
                              feel like a struggle. It should feel smart, seamless, and supportive.”
                           </i>
                           <br /> Adedimeji Aina-Marshall, Founder of ShopQuick <br />
                           <br /> <strong>Why Now?</strong> <br />
                           <br /> AI has changed how we work and live, but it hasn't yet touched the
                           place where most families spend the bulk of their disposable income:
                           groceries. We're bringing AI to the store aisle, not just the boardroom.
                           <br />
                           <br />
                           ShopQuick uses machine learning to: <br /> • Show you real-time grocery
                           deals near you. <br /> • Build smart lists tailored to your budget,
                           habits, and diet. <br />• Let you scan & pay instantly, even at stores
                           without expensive checkout tech. <br />
                           <br /> Whether you're shopping for a family of five or grabbing lunch on
                           a 20-minute break, ShopQuick is built to{" "}
                           <strong>save you time, money, and energy</strong>. <br />
                           <br /> We're starting in Manchester. But our goal is to help every
                           household in the UK and beyond shop better.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className=" md:hidden ">
               <div className="absolute top-[30rem] w-full m-auto flex items-center flex-col justify-center">
                  <div className="flex items-center justify-between">
                     <div className="max-w-[100px] md:max-w-[290px] relative top-9">
                        <img src="/assets/fruit.png" alt="join us" className="w-full" />
                     </div>
                     <h2 className="text-[20px] w-full md:text-[30px] font-[700] text-[#3B3B3B] relative top-[2rem] text-center m-auto whitespace-nowrap">
                        KNOW US MORE
                     </h2>
                     <div className="max-w-[100px] md:max-w-[178px]  relative top-2">
                        <img src="/assets/joinus.png" alt="join us" className="w-full" />
                     </div>
                  </div>
                  <div className="border-4 border-[#525252] rounded-[18px] py-[1.2rem] px-[2rem] bg-white">
                     <div className="">
                        <h1 className="font-[800] text-[1.4rem] text-center text-[#08569C] m-auto">
                           About Shopquick
                        </h1>
                        <p className="text-[1rem]  md:text-[20px] font-[500] ">
                          Grocery shopping is something we all do, but for many of us, it’s become
                           stressful, time-consuming, and expensive. Long queues. Missed discounts.
                           Too many apps and the constant pressure to stretch every pound.
                           <br />
                           <br />
                           That’s why we built <strong>ShopQuick</strong>, your personal grocery
                           assistant powered by AI, created to help you shop smarter, save money,
                           and get more time back in your day.
                           <br />
                           <br />
                           What started as a personal frustration, juggling family life, waiting in
                           queues,{" "}
                           <strong>
                              missing deals, and struggling to find essentials while on a tight
                              budget, quickly became a mission to help millions of working families,
                              busy professionals, students and everyday shoppers
                           </strong>{" "}
                           who face the same challenge. <br /> <br /> Now, we’re using technology to
                           solve a very human problem.
                           <br />
                           <br />
                           <i>
                              “I built ShopQuick because people like us, real shoppers who deserve
                              tools that make life easier, not harder. Grocery shopping shouldn’t
                              feel like a struggle. It should feel smart, seamless, and supportive.”
                           </i>
                           <br /> Adedimeji Aina-Marshall, Founder of ShopQuick <br />
                           <br /> <strong>Why Now?</strong> <br />
                           <br /> AI has changed how we work and live, but it hasn't yet touched the
                           place where most families spend the bulk of their disposable income:
                           groceries. We're bringing AI to the store aisle, not just the boardroom.
                           <br />
                           <br />
                           ShopQuick uses machine learning to: <br /> • Show you real-time grocery
                           deals near you. <br /> • Build smart lists tailored to your budget,
                           habits, and diet. <br />• Let you scan & pay instantly, even at stores
                           without expensive checkout tech. <br />
                           <br /> Whether you're shopping for a family of five or grabbing lunch on
                           a 20-minute break, ShopQuick is built to{" "}
                           <strong>save you time, money, and energy</strong>. <br />
                           <br /> We're starting in Manchester. But our goal is to help every
                           household in the UK and beyond shop better.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <VisionMission />
         <AboutMeetTheTeam />
      </main>
   );
}
