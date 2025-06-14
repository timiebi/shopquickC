const data = [
    {
        header: "Always Get The Best Price",
        icon: "/assets/always.png",
        description: " Stay updated with real-time access to the latest grocery deals and prices, so every purchase budget-friendly."
    },
    {
        header: "Personalised Shopping",
        icon: "/assets/shopping.png",
        description: "Your groceries are tailored to your budget and shopping preferences, making the experience  convenient."
    },
    {
        header: "AI Powered shopping  Assistance ",
        icon: "/assets/AI.png",
        description: "Helps you craft personalized shopping lists tailored to your budget, making it simpler to shop smart."
    },
    {
        header: "Shop quicker and more efficiently",
        icon: "/assets/efficiency.png",
        description: "Scan and pay instantly bypass the checkout lines for quick, easy, and stress-free shopping right at your fingertips."
    }
]


export function OurSolid() {
    return (
        <main style={{fontFamily: "Montserrat, sans-serif"}}>
            <div className="max-w-[1200px] m-auto mt-[6rem]">
                <div className="max-w-[943px] m-auto">
                    <h2 className="text-[28.65px] text-[#525252] text-center font-[700]">OUR SOLUTION</h2>
                    <h1 className="text-[49.69px] text-[#08569C] font-[800] text-center">
                        Your Grocery Shopping Assistant.
                    </h1>
                    <p className="text-[#525252] text-[28.65px] font-[400] text-center">
                        Spend Less, Live More: Discover the Future of Grocery Shopping with Smart Price Comparisons!
                    </p>
                </div>
            </div>
            <div className="bg-[#C7E6FF] py-[60px] px-[188px] mt-[4rem]">
                <div className="max-w-[1060px] m-auto grid grid-cols-2 gap-[2.5rem]">
                    {data.map((list, index) =>
                        <div key={index}>
                        <div className="max-w-[158.74929809570312px] m-auto mb-4">
                            <img src={list.icon} alt="always logo"/>
                        </div>
                        <h3 className="text-[#08569C] text-[26.76px] font-[700] text-center max-w-[280px] m-auto mb-4">
                            {list.header}
                        </h3>
                        <p className="max-w-[388.2887878417969px] text-[19.09px] text-[#3B3B3B] font-[500] text-center m-auto">
                            {list.description}
                        </p>
                    </div>)}
                </div>
            </div>
        </main>
    )
}