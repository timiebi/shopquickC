"use client";

const problemList = [
   {
      id: 1,
      text: "Tired of spending hours searching for the best grocery deals?",
      // icon: <YourSvgComponentHere /> // optional
   },
   {
      id: 2,
      text: "Overpaying by £1000+ a year because prices constantly fluctuate?",
      // icon: <OverpayingSvg />
   },
   {
      id: 3,
      text: "Struggling to keep track of discounts and promotions across multiple stores",
      // icon: <PromotionSvg />
   },
   {
      id: 4,
      text: "Wasting time in long checkout lines?",
      // icon: <CheckoutLinesSvg />
   },
];


export function TheProblem() {
    return (
        <div className="mt-[6rem]">
            <div className="max-w-[1200px] m-auto" style={{fontFamily: "Montserrat, sans-serif"}}>
                <div className="mb-[3rem]">
                    <h2 className="text-[25px] md:text-[28.65px] font-[700] text-[#525252] text-center">THE PROBLEM</h2>
                    <h1 className="text-[30px] md:text-[49.69px] font-[800] text-[#08569C] text-center max-w-[348px] md:max-w-full m-auto">Your Grocery Shopping is Broken.</h1>
                    <p className="text-[#525252] text-[18px] md:text-[28.65px] font-[400] max-w-[348px] md:max-w-[662px] text-center m-auto">Grocery shopping is outdated and frustrating. But it doesn’t have to be.</p>
                </div>
                <div className="flex md:flex-row flex-col max-w-[348px] md:max-w-full justify-between gap-[3rem] m-auto">
                    <div className="flex flex-col gap-[1rem] justify-between">
                        {/* <div className="bg-[#FFE1EB] p-[13.33px] rounded-[8.89px]" style={{ boxShadow: '0px 4.44px 27.77px rgba(0, 0, 0, 0.15)' }}>
                            <p className="text-[#525252] text-[22.75px] font-[600] max-w-[522px]">Tired of spending hours searching for the best grocery deals ?</p>
                        </div>
                        <div style={{ boxShadow: '0px 4.44px 27.77px rgba(0, 0, 0, 0.15)' }} className="p-[13.33px] rounded-[8.89px]" >
                            <div className="flex items-center gap-[1rem]">
                                <OverpayingSvg/>
                                <p className="text-[14.75px] text-[#525252] font-[600]">Overpaying by  <span className="font-[800] text-[#000]">£1000+</span> a year because  prices constantly fluctuate? </p>
                            </div>
                        </div>
                        <div style={{ boxShadow: '0px 4.44px 27.77px rgba(0, 0, 0, 0.15)' }} className="p-[13.33px] rounded-[8.89px]" >
                            <div className="flex items-center gap-[1rem]">
                                <PromotionSvg/>
                                <p className="text-[14.75px] text-[#525252] font-[600]">
                                    Struggling to keep track of discount  and promotions across
                                    multiple stores
                                </p>
                            </div>
                        </div>
                        <div style={{ boxShadow: '0px 4.44px 27.77px rgba(0, 0, 0, 0.15)' }} className="p-[13.33px] rounded-[8.89px]" >
                            <div className="flex items-center gap-[1rem]">
                                <CheckoutLinesSvg/>
                                <p className="text-[14.75px] text-[#525252] font-[600]">
                                    Wasting time in long checkout lines ?
                                </p>
                            </div>
                        </div> */}
                         {problemList.map((item) => (
                     <div
                        key={item.id}
                        className="h-[79.5479507446289px] md:h-full px-[1.5rem] flex items-center  rounded-[8.89px]"
                        style={{ boxShadow: "0px 4.44px 27.77px rgba(0, 0, 0, 0.15)" }}
                     >
                        <div className="">
                           {/* {item.icon && item.icon} */}
                           <p className="text-[13.71px] md:text-[19.87px] text-[#525252] font-[600] max-w-[522px]">{item.text}</p>
                        </div>
                     </div>
                  ))}
                    </div>
                    <div className="md:max-w-[627.6878051757812px] max-w-[334px] m-auto">
                        <img src="/assets/shopQuickProblem.png" alt="" className="rounded-[21.9px] w-full cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}