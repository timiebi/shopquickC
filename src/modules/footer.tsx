import Link from "next/link";

const list = [
   {
      header: "Location",
      list: [
         {
            name: "Manchester",
            // link: "",
         },
      ],
   },
   {
      header: "Download",
      list: [
         {
            name: "Google Play Store",
            // link: "",
         },
         {
            name: "IOS Apple Store",
            // link: "",
         },
      ],
   },
   {
      header: "Help",
      list: [
         {
            name: "contact",
            link: "contact",
         },
         {
            name: "FAQs",
            link: "faq",
         },
         {
            name: "About Us",
            link: "about",
         },
         {
            name: "Join Us",
            // link: "",
         },
      ],
   },
   {
      header: "Legal",
      list: [
         {
            name: "Privacy Policy",
            // link: "",
         },
         {
            name: "Terms and Conditions",
            // link: "",
         },
      ],
   },
];

const socials = [
   {
      name: "1900 - 6666",
      icon: "/assets/contactIcon/phone.svg",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/x.svg",
      link: "https://x.com/shopquickapp?s=11&t=IoFjrBfAVZuN8lobIYnE-w",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/insta.svg",
      link: "https://www.instagram.com/shopquickapp?igsh=MXExc2ZsYXZ5N3Vscw%3D%3D&utm_source=qr",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/fb.svg",
   },
   {
      name: "@shopquick_uk",
      icon: "/assets/contactIcon/talk.svg",
   },
];

export function Footer() {
   return (
      <footer className="bg-[#F7F8FD] w-full">
         <div className="max-w-[1200px] w-full mx-5 md:mx-auto pt-20">
            <div className="flex  flex-col md:flex-row items-start w-full justify-between">
               <img src="/assets/shopQuiclogo.png" alt="" className="max-w-[243px]" />
               <div className="flex items-start flex-col md:flex-row w-full justify-between max-w-[764.0579223632812px]">
                  {list.map((list, index) => (
                     <ul key={index} className="mb-8 md:mb-0">
                        <h1 className="text-[#08569C] font-[700] text-[1.1rem] mb-1 uppercase">
                           {list.header}
                        </h1>
                        {list.list.map((sublist, index) => (
                           <li
                              className="text-[1rem] font-normal text-[#000] mb-1.5 capitalize"
                              key={index}
                           >
                              {sublist.link ? (
                                 <Link href={sublist.link}>{sublist.name}</Link>
                              ) : (
                                 sublist.name
                              )}
                           </li>
                        ))}
                     </ul>
                  ))}
               </div>
            </div>
            <div className="w-full border-1 borer-[#999999] mt-20"></div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-5 md:gap-10 py-5">
               {socials.map((socials, index) => (
                  <div key={index} className="flex items-center flex-col">
                     <img src={socials.icon} alt="" className="max-w-[15px] md:max-w-[19.058164596557617px]" />
                     <p className="text-[8.66px] text-[#121111] font-[300]">
                        {socials.link ? (
                           <a href={socials.link}>{socials.name}</a>
                        ) : (
                           <span>{socials.name}</span>
                        )}
                     </p>
                     {/* <span className="text-[8.66px] text-[#121111] font-[300]">{socials.name}</span> */}
                  </div>
               ))}
            </div>
         </div>
      </footer>
   );
}

//  <div>
//                   <div className="flex items-center gap-3 mb-3">
//                      <p>Follow Us</p>
//                      <div className="flex items-center gap-2">
//                         <FacebookSvg />

//                         <a
//                            href="https://x.com/shopquickapp?s=11&t=IoFjrBfAVZuN8lobIYnE-w"
//                            target="_blank"
//                            rel="noopener noreferrer"
//                         >
//                            <TwitterSvg />
//                         </a>
//                         <a
//                            href="https://www.instagram.com/shopquickapp?igsh=MXExc2ZsYXZ5N3Vscw%3D%3D&utm_source=qr"
//                            target="_blank"
//                            rel="noopener noreferrer"
//                         >
//                            <InstagramSvg />
//                         </a>

//                         <PinInterestSvg />

//                         <YoutubeSvg />
//                      </div>
//                   </div>
//                   <p className="text-[#7E7E7E] text-[12px] font-[400]">
//                      Up to 15% discount on your first subcribe
//                   </p>
//                </div>
