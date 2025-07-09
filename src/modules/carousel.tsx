"use client";

import useEmblaCarousel from "embla-carousel-react";

const categories = [
   {
      title: "Fruits & Vegetables",
      image: "/assets/vegetable.png",
      bg: "bg-[#E5FAF3]",
   },
   {
      title: "Diary",
      image: "/assets/diary.png",
      bg: "bg-[#EBF4FF]",
   },
   {
      title: "Farm Product",
      image: "/assets/meat.png",
      bg: "bg-[#FFF0F5]",
   },
   {
      title: "Snacks & Sweets",
      image: "/assets/snacks.png",
      bg: "bg-[#FCDEFF]",
   },
   {
      title: "Sauces & Condiments",
      image: "/assets/condiment.png",
      bg: "bg-[#E5FAF3]",
   },
   {
      title: "Beverages",
      image: "/assets/beverages.png",
      bg: "bg-[#FFE1EB]",
   },
   {
      title: "Snacks & Sweets",
      image: "/assets/snacks.png",
      bg: "bg-[#FCDEFF]",
   },
   {
      title: "Sauces & Condiments",
      image: "/assets/condiment.png",
      bg: "bg-[#E5FAF3]",
   },
   {
      title: "Beverages",
      image: "/assets/beverages.png",
      bg: "bg-[#FFE1EB]",
   },
];

export function Carousel() {
   const [emblaRef] = useEmblaCarousel({ loop: true });

   return (
      <main className="carousel flex flex-col md:items-end mt-[3rem]">
         <div className="max-w-[1400px]">
            <div
               style={{ fontFamily: "Montserrat, sans-serif" }}
               className="flex items-center justify-between gap-2 text-[#525252] mb-[1rem] px-5"
            >
               <h1 className="md:text-[1.4rem] text-[1.1rem]  font-[700]">Featured Categories</h1>
               {/* <p className="md:text-[25.27px] font-[500]">See all</p> */}
            </div>

            <div className="overflow-scroll px-5 no-scrollbar" >
               <div className="flex gap-[1rem] embla__container">
                  {categories.map((category, index) => (
                     <div
                        key={index}
                        style={{ marginRight: index === categories.length - 1 ? "30px" : "0px" }}
                        className={`${category.bg} w-full embla__slide min-w-[199.45px] max-w-[199.45px] h-[188.17px] py-4 rounded-[26.95px] flex flex-col items-center justify-center flex-shrink-0`}
                     >
                        <div className="max-w-[119.35px] mb-3">
                           <img src={category.image} alt={category.title} className="w-full" />
                        </div>
                        <p
                           style={{ fontFamily: "Roboto, sans-serif" }}
                           className="text-[1.1rem] text-[#525252] leading-[20.23px] text-center max-w-[119.3541030883789px]"
                        >
                           {category.title}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </main>
   );
}
