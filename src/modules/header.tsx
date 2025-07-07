"use client";

import { LogoSvg } from "@/app/assets/svg";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const roboto = Roboto({
   subsets: ["latin"],
   variable: "--font-roboto",
});

export function HeaderComponent() {
   const pathname = usePathname();
   const [isOpen, setIsOpen] = useState(false);

   const navLinks = [
      { name: "About Us", href: "/about" },
      { name: "FAQs", href: "/faq" },
      { name: "Contact", href: "/contact" },
   ];

   const baseClasses = "cursor-pointer py-3 px-3 text-left w-fit";
   const hoverClasses = " hover:border-b hover:border-[#08569C]";
   const activeClasses = "bg-[#D9EDFF] border-b border-[#08569C]";

   return (
      <header
         className={`${roboto.variable} w-full bg-white z-50 md:relative fixed top-0 shadow`}
      >
         <div className="max-w-[1400px] mx-auto flex items-center justify-between h-full px-4">
            <Link href="/" className="cursor-pointer">
               <LogoSvg />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex text-[#08569C] text-[22.47px] font-[700] gap-[4rem]">
               {navLinks.map(({ name, href }) => (
                  <Link key={name} href={href}>
                     <li
                        className={`${baseClasses} ${
                           pathname === href ? activeClasses : hoverClasses
                        } h-[94.53px] flex items-center `}
                     >
                        {name}
                     </li>
                  </Link>
               ))}
            </ul>

            {/* Get Started (Desktop) */}
            <button className="cursor-pointer hidden md:block py-3 px-6 rounded-[9px] bg-[#08569C] text-white text-[17.13px] font-[600]">
               Get Started
            </button>
            {/* Hamburger (Mobile) */}
            <button onClick={() => setIsOpen(true)} className="md:hidden">
               <Menu size={32} className="text-[#08569C]" />
            </button>
         </div>

         {/* Mobile Menu */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  key="mobile-menu"
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-0 left-0 w-full h-[401px] bg-white z-50 flex flex-col px-6 pt-6"
               >
                  <div className="flex justify-between items-center mb-8">
                     <LogoSvg />
                     <button onClick={() => setIsOpen(false)}>
                        <X size={32} className="text-[#08569C]" />
                     </button>
                  </div>

                  <div className="max-w-[240px]">
                     <ul className="flex flex-col gap-3 text-left text-[#08569C] text-[16px] font-[700]">
                        {navLinks.map(({ name, href }) => (
                           <Link key={name} href={href} onClick={() => setIsOpen(false)}>
                              <li
                                 className={`${baseClasses} ${
                                    pathname === href ? activeClasses : hoverClasses
                                 }`}
                              >
                                 {name}
                              </li>
                           </Link>
                        ))}
                     </ul>

                     <button
                        // onClick={() => {
                        //    setIsOpen(false);
                        //    setFormOpen(true);
                        // }}
                        className="mt-auto mb-10 py-3 px-6 rounded-[9px] bg-[#08569C] text-white text-[16px] font-[600]"
                     >
                        Get Started
                     </button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
}
