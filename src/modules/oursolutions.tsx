const data = [
   {
      header: "Always Get The Best Price",
      icon: "/assets/always.png",
      description:
         " Stay updated with real-time access to the latest grocery deals and prices, so every purchase budget-friendly.",
   },
   {
      header: "Personalised Shopping",
      icon: "/assets/shopping.png",
      description:
         "Your groceries are tailored to your budget and shopping preferences, making the experience  convenient.",
   },
   {
      header: "AI Powered shopping  Assistance ",
      icon: "/assets/AI.png",
      description:
         "Helps you craft personalized shopping lists tailored to your budget, making it simpler to shop smart.",
   },
   {
      header: "Shop quicker and more efficiently",
      icon: "/assets/efficiency.png",
      description:
         "Scan and pay instantly bypass the checkout lines for quick, easy, and stress-free shopping right at your fingertips.",
   },
];

export function OurSolid() {
   return (
      <main style={{ fontFamily: "Montserrat, sans-serif" }}>
         <div className="max-w-[1200px] mx-auto px-5 mt-[6rem]">
            <div className="max-w-[943px] m-auto">
               <h2 className="text-[25px] md:text-[1.4rem] text-[#525252] text-center font-[700]">
                  OUR SOLUTION
               </h2>
               <h1 className="text-[35px] md:text-[2.7rem] text-[#08569C] font-[800] text-center md:max-w-full max-w-[348px] m-auto">
                  Your Grocery Shopping Assistant.
               </h1>
               <p className="text-[#525252] text-[18px] md:text-[1.3rem] font-[400] text-center max-w-[348px] m-auto md:max-w-full">
                  Spend Less, Live More: Discover the Future of Grocery Shopping with Smart Price
                  Comparisons!
               </p>
            </div>
         </div>
         <div className="bg-[#C7E6FF] py-[60px] md:px-[188px] px-[25px] mt-[4rem]">
            <div className="md:max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[2.5rem]">
               {data.map((list, index) => (
                  <div key={index} className="md:border-b-0 md:pb-0 pb-8 border-b-[1px] border-b-[#719CC2]">
                     <div className="max-w-[78.52680969238281px] md:max-w-[158.74929809570312px] m-auto mb-4">
                        <img src={list.icon} alt="always logo" />
                     </div>
                     <h3 className="text-[#08569C] max-w-[188.6667022705078px] text-[1rem] md:text-[1.5rem] font-[700] text-center md:max-w-[280px] m-auto mb-4">
                        {list.header}
                     </h3>
                     <p className="md:max-w-[388.2887878417969px] max-w-[239.32717895507812px] text-[11.77px] md:text-[1.1rem] text-[#3B3B3B] font-[500] text-center m-auto">
                        {list.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </main>
   );
}
