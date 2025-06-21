import { AndroidSvg, IosSvg } from "@/app/assets/svg";

export function TryTheApp() {
    return (
        <main style={{fontFamily: "Montserrat, sans-serif"}}>
            <div className="max-w-[495px] m-auto mt-[4rem]">
                <div
                    className="bg-[#BBDFFF] max-w-[371px] rounded-[16px] flex items-center p-[4px] justify-between m-auto">
                    <div
                        className="bg-[#08569C] text-white text-[24.54px] font-[400] py-[13px] px-[24px] rounded-[16px]">
                        <span>Shoppers</span>
                    </div>
                    <div className=" text-[#525252] text-[24.54px] font-[400] py-[13px] px-[24px] rounded-[16px]">
                        <span>Stores</span>
                    </div>
                    <div className=" text-[#525252] text-[24.54px] font-[400] py-[13px] px-[24px] rounded-[16px]">
                        <span>AI</span>
                    </div>
                </div>
                <div className="m-auto max-w-[226px]">
                    <h2 className="text-[#08569C] text-[35px] md:text-[36.93px] font-[800] text-center mt-4">Try the app</h2>
                </div>
                <p className="text-[18px]  md:text-[24.54px] font-[400] text-[#525252] text-center max-w-[348px] m-auto md:max-w-[495px] leading-[32px] mt-4">
                    Save Big, Enjoy More: Experience the Next Generation of Grocery Shopping with Intelligent Price
                    Comparison.
                </p>
                <div className="max-w-[115px] m-auto flex items-center gap-[1rem] mt-5">
                    <IosSvg/>
                    <AndroidSvg/>
                </div>
                <div className="max-w-[303px] m-auto mt-[1.5rem]">
                    <img src="/assets/iphone.png" alt="phone" />
                </div>
            </div>
        </main>
    )
}