import {EnvelopeSvg} from "@/app/assets/svg";

export function JoinWaitlist() {
    return (
        <main className="bg-[#08569C]  text-[white] py-[4.5rem]" style={{fontFamily: "Montserrat, sans-serif"}}>
            <div className="max-w-[1200px] m-auto flex items-center justify-between w-full">
                <div>
                    <h3 className="text-[25px] font-[400]">
                        Enjoy a complimentary voucher on your first order with us!
                    </h3>
                    <h2 className="font-[700] text-[49.5px] mb-[2rem]">
                        Join the Movement
                    </h2>
                    <h3 className="max-w-[650px] text-[25px] font-[400] mb-[2.4rem]">
                        Join our email subscription now to get updates on promotions and coupons.
                    </h3>
                    <div
                        className="h-[95.52195739746094] bg-[white] py-[17px] px-[13px] flex items-center justify-between max-w-[773px] rounded-[10px]">
                        <EnvelopeSvg/>

                        <input placeholder="Your Email Address" className="text-[#949494AB] text-[25px] h-[30px] ml-3"/>
                        <button
                            className="bg-[#08569C] text-[white] text-[22.65px] font-[600] rounded-[11.9px] cursor-pointer outline-none py-[16.76px] px-[20px]">
                            SIGN UP FOR EARLY ACCESS
                        </button>
                    </div>
                </div>
                <div>
                    <img src="/assets/joinus.png" alt="join us"/>
                </div>
            </div>
        </main>
    )
}