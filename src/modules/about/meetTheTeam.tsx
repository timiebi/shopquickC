import { LinkedinSvg } from "@/app/assets/svg";

const data = [
   // {
   //    name: "Charles Ajayi",
   //    role: "Chief Operations",
   //    img: "/assets/charles.png",
   // },
   //  {
   //     name: "Soyemi Akinwande",
   //     role: "Chief Operations",
   //     img: "/assets/soyemi.png"
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
   // {
   //    name: "Ibukun Odujoko",
   //    role: "Head Sales",
   //    img: "/assets/ibukun.png",
   // },
   // {
   //    name: "Niyi Olufemi",
   //    role: "Head of Admin",
   //    img: "/assets/niyi.png",
   // },
    {
      name: "Tomi Ogundipe",
      role: "AI Advisor",
      img: "/assets/tomi.png",
   },
];

export function AboutMeetTheTeam() {
   return (
      <main className="mt-[3.5rem] mx-5" style={{ fontFamily: "Montserrat, sans-serif" }}>
         <div className="max-w-[1200px] m-auto">
            <div>
               <header className="text-center">
                  <h1 className="text-[#08569C] text-[35px] md:text-[3rem] font-[800]">
                     Meet the Team
                  </h1>
                  <p className="text-[#525252] text-[18px] md:text-[1.34rem] font-[400] max-w-[348px] md:max-w-[943px] m-auto">
                     At ShopQuick, our team is made up of passionate, innovative young professionals
                     dedicated to going the extra mile. We are committed to delivering exceptional
                     service,
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
            </div>
            <section className="md:overflow-hidden  no-scrollbar  overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 mt-[6rem] md:max-w-full max-w-[400px] mx-auto mb-[3rem]">
               <div className="flex items-center justify-between gap-4 w-full">
                  {data.map((list) => (
                     <div
                        key={list.name}
                        className="bg-[#C6E6FF] rounded-[8.82px] py-[7.84px] px-[7.84px] w-[282px] flex-shrink-0 snap-start relative"
                     >
                        <div>
                           <img src={list.img} alt={list.name} className="w-full rounded-[8px] cover" />
                        </div>
                        <div className="absolute bottom-[3.5rem] right-6">
                           <LinkedinSvg />
                        </div>
                        <div className="mt-[1.5rem]">
                           <p className="text-[#08569C] text-[.95rem] font-[800]">{list.name}</p>
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
   );
}
