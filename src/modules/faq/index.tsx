import { LinkedinSvg } from "@/app/assets/svg";

const data = [
   {
      name: "Charles Ajayi",
      role: "Chief Operations",
      img: "/assets/charles.png",
   },
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
      name: "Ibukun Odujoko",
      role: "Head Sales",
      img: "/assets/ibukun.png",
   },
   {
      name: "Niyi Olufemi",
      role: "Head of Admin",
      img: "/assets/niyi.png",
   },
];

export function FaqPage() {
   return (
      <div>
         <section className=" relative">
            <div className="bg-[#08569C] md:h-[885px] mt-[7rem]">
                <div className="md:h-[912] md:w-[1241px] rounded-[24px] border-3 border-[#525252] flex absolute right-50 left-50  bottom-15 bg-white z-10">
                    <div>
                        <h1>FAQs</h1>
                        <div>

                        </div>
                    </div>
                    <div>
                        <h1>Answers</h1>
                        <div>
                            <p>Answers section</p>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         <main className="mt-[3.5rem]" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <div className="max-w-[1200px] m-auto">
               <div>
                  <header className="text-center">
                     <h1 className="text-[#08569C] text-[35px] md:text-[50px] font-[800]">
                        Meet the Team
                     </h1>
                     <p className="text-[#525252] text-[18px] md:text-[28.65px] font-[400] max-w-[348px] md:max-w-[943px] m-auto">
                        At ShopQuick, our team is made up of passionate, innovative young
                        professionals dedicated to going the extra mile. We are committed to
                        delivering exceptional service,
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
                     <p className="text-[18px] md:text-[28.65px] text-center font-[600] text-[#525252] max-w-[348px] md:max-w-[943px] m-auto mt-4">
                        Visionary behind ShopQuick. Experienced IT project manager & entrepreneur
                        with a track record in scaling startup and fundraising
                     </p>
                  </div>
               </div>
               <section className="flex items-center md:flex-row flex-col gap-[2rem] my-[6rem]">
                  {data.map((list) => (
                     <div
                        key={list.name}
                        className="bg-[#C6E6FF] rounded-[8.82px] pt-[7.84px] px-[7.84px] max-w-[282.8246765136719px] relative"
                     >
                        <div>
                           <img src={list.img} alt={list.name} />
                        </div>
                        <div className="absolute bottom-[3.5rem] right-6">
                           <LinkedinSvg />
                        </div>
                        <div className="mt-[1.5rem]">
                           <p className="text-[#08569C] text-[15.25px] font-[800]">{list.name}</p>
                           <span className="text-[22.45px] font-[400] text-[#868383]">
                              {list.role}
                           </span>
                        </div>
                     </div>
                  ))}
               </section>
            </div>
         </main>
      </div>
   );
}
