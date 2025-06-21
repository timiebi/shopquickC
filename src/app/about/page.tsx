import { AboutMeetTheTeam } from "@/modules/about/meetTheTeam";
import { VisionMission } from "@/modules/about/missionVision";

export default function About() {
    return (
        <main>
            <div className="relative mb-[95rem] md:mb-[50rem]">
                <div
                    style={{fontFamily: "Montserrat, sans-serif"}}
                    className="bg-[url('/assets/herobg.png')] bg-cover bg-center h-[669px]">
                    <div className="max-w-[1200px] m-auto pt-[9rem] md:pt-[4rem]">
                        <div className="flex items-center justify-center gap-[2rem]">
                            <div>
                                <h1 className="text-[40px] md:text-[73.47px] text-[#08569C] font-[700] leading-[50px] mb-[2rem] text-center m-auto">
                                    Bringing Joy to Every Cart
                                </h1>
                                <p className="text-[20px] md:text-[25px] font-[400] text-[#1C1C1C] max-w-[348px] md:max-w-[1000px] mb-[2rem] text-center m-auto">
                                    We are dedicated to building and shaping the future of grocery shopping,
                                    revolutionizing the way people buy, save, and experience their everyday essentials
                                    for a smarter and more convenient tomorrow.
                                </p>
                            </div>
                            {/*<img src="/assets/shopQuickHero.png" alt="shopQuickHero"/>*/}
                        </div>
                    </div>
                </div>
                <div className="max-w-[1200px] m-auto pt-[4rem] hidden md:block">
                    <div className="absolute top-[18rem] max-w-[1200px]">
                        <div className="flex items-center justify-between">
                            <div className="max-w-[290px] relative top-9">
                                <img src="/assets/fruit.png" alt="join us" className="w-full" />
                            </div>
                            <h2 className="text-[30px] font-[700] text-[#3B3B3B] relative top-[2rem] text-center m-auto">KNOW US MORE</h2>
                            <div className="max-w-[178px]  relative top-2">
                                <img src="/assets/joinus.png" alt="join us" className="w-full" />
                            </div>
                        </div>
                        <div className="border-4 border-[#525252] rounded-[18px] py-[1.2rem] px-[2rem] bg-white">
                            <div className="">
                                <h1 className="font-[800] text-[50px] text-center text-[#08569C] m-auto">About Shopquick</h1>
                                <p className="text-[26px] font-[500] ">
                                    Many of us struggle to find the best deals on groceries, waste time waiting in long
                                    queues, and often miss out on discounts and promotions. That’s where ShopQuick comes in.
                                    <br/><br/>
                                    Founded by Adedimeji Aina-Marshall, our mission is to solve these everyday shopping
                                    problems in the UK, starting with Manchester. ShopQuick is a smart price comparison app
                                    designed to help you save a lot on your grocery bills, find the best deals quickly, and
                                    shop more efficiently.
                                    <br/><br/>
                                    Our app compares and scales prices across different stores, taking into account the
                                    distance to each location, so you get the best prices near you. We guide you to the
                                    store, show directions, and even allow you to scan and pay directly — eliminating
                                    long queues and waiting times.
                                    <br/><br/>
                                    With ShopQuick AI, your shopping experience gets even smarter. The AI tailors
                                    shopping
                                    lists based on your budget, highlights ongoing promotions, and keeps you updated on
                                    discounts. Plus, it offers personalized health advice about what to eat and what to
                                    avoid, helping you make informed choices.
                                    <br/><br/>
                                    We're here to make grocery shopping faster, more affordable, and healthier —
                                    transforming the way you shop every day.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" md:hidden ">
                    <div className="absolute top-[30rem] px-[20px] m-auto flex items-center flex-col justify-center">
                        <div className="flex items-center justify-between">
                            <div className="max-w-[100px] md:max-w-[290px] relative top-9">
                                <img src="/assets/fruit.png" alt="join us" className="w-full" />
                            </div>
                            <h2 className="text-[20px] w-full md:text-[30px] font-[700] text-[#3B3B3B] relative top-[2rem] text-center m-auto whitespace-nowrap">KNOW US MORE</h2>
                            <div className="max-w-[100px] md:max-w-[178px]  relative top-2">
                                <img src="/assets/joinus.png" alt="join us" className="w-full" />
                            </div>
                        </div>
                        <div className="border-4 border-[#525252] rounded-[18px] py-[1.2rem] px-[2rem] bg-white">
                            <div className="">
                                <h1 className="font-[800] text-[30px] text-center text-[#08569C] m-auto">About Shopquick</h1>
                                <p className="text-[20px] font-[500] ">
                                    Many of us struggle to find the best deals on groceries, waste time waiting in long
                                    queues, and often miss out on discounts and promotions. That’s where ShopQuick comes in.
                                    <br/><br/>
                                    Founded by Adedimeji Aina-Marshall, our mission is to solve these everyday shopping
                                    problems in the UK, starting with Manchester. ShopQuick is a smart price comparison app
                                    designed to help you save a lot on your grocery bills, find the best deals quickly, and
                                    shop more efficiently.
                                    <br/><br/>
                                    Our app compares and scales prices across different stores, taking into account the
                                    distance to each location, so you get the best prices near you. We guide you to the
                                    store, show directions, and even allow you to scan and pay directly — eliminating
                                    long queues and waiting times.
                                    <br/><br/>
                                    With ShopQuick AI, your shopping experience gets even smarter. The AI tailors
                                    shopping
                                    lists based on your budget, highlights ongoing promotions, and keeps you updated on
                                    discounts. Plus, it offers personalized health advice about what to eat and what to
                                    avoid, helping you make informed choices.
                                    <br/><br/>
                                    We're here to make grocery shopping faster, more affordable, and healthier —
                                    transforming the way you shop every day.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <VisionMission/>
            <AboutMeetTheTeam/>
        </main>
)
}