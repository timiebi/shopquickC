import {CheckoutLinesSvg, OverpayingSvg, PromotionSvg} from "@/app/assets/svg";

export function TheProblem() {
    return (
        <div className="mt-[6rem]">
            <div className="max-w-[1200px] m-auto" style={{fontFamily: "Montserrat, sans-serif"}}>
                <div className="mb-[3rem]">
                    <h2 className="text-[28.65px] font-[700] text-[#525252] text-center">THE PROBLEM</h2>
                    <h1 className="text-[49.69px] font-[800] text-[#08569C] text-center">Grocery Shopping is Broken.</h1>
                    <p className="text-[#525252] text-[28.65px] font-[400] max-w-[662px] text-center m-auto">Grocery shopping is outdated and frustrating. But it doesn’t have to be.</p>
                </div>
                <div className="flex justify-between gap-[3rem]">
                    <div className="flex flex-col gap-[1rem] justify-between">
                        <div className="bg-[#FFE1EB] p-[13.33px] rounded-[8.89px]" style={{ boxShadow: '0px 4.44px 27.77px rgba(0, 0, 0, 0.15)' }}>
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
                        </div>
                    </div>
                    <div className="max-w-[627.6878051757812px]">
                        <img src="/assets/shopQuickProblem.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}