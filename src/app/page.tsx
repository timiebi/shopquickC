import {Carousel} from "@/modules/carousel";
import {TheProblem} from "@/modules/theProblem";
import {OurSolid} from "@/modules/oursolutions";
import {TryTheApp} from "@/modules/tryTheApp";

export default function Home() {
    return (
        <div >
            <div

                className="bg-[url('/assets/herobg.png')] bg-cover bg-center h-[669px]">
                <div className="max-w-[1200px] m-auto pt-[4rem]">
                   <div className="flex items-center justify-between gap-[2rem]">
                       <div >
                           <h1 className="text-[38px] max-w-[634px] text-[#08569C] font-[700] leading-[50px] mb-[2rem]">
                               Say Goodbye To Overpaying On Groceries. Say Hello To Smart Savings.
                           </h1>
                           <p className="text-[22.02px] font-[500] text-[#1C1C1C] max-w-[583px] mb-[2rem]">
                               Shopquick helps you save 1000+ a year on groceries
                               with real-time price comparisons, Ai powered
                               personalized deals and seamless checkout across
                               multiple supermarkets
                           </p>
                           <button


                               className="bg-[#08569C] text-[white] text-[22.65px] font-[600] rounded-[11.9px] py-[16.76px] px-[20px]"
                           >
                               SIGN UP FOR EARLY ACCESS
                           </button>
                       </div>
                       <img src="/assets/shopQuickHero.png" alt="shopQuickHero"/>
                   </div>
                </div>
            </div>
            <div>
                <Carousel/>
            </div>
            <div>
                <TheProblem/>
            </div>
            <div>
                <OurSolid/>
            </div>
            <div>
                <TryTheApp/>
            </div>
        </div>
    );
}
