'use client';

import {LogoSvg} from "@/app/assets/svg";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
});

export function HeaderComponent() {
    const pathname = usePathname();

    const navLinks = [
        {name: "About Us", href: "/about"},
        {name: "FAQs", href: ""},
        {name: "Contact", href: ""},
    ];

    const baseClasses =
        "cursor-pointer h-[94.53px] py-[35.76px] px-[11.26px]";
    const hoverClasses =
        "hover:bg-[#D9EDFF] hover:border-b hover:border-b-[#08569C]";
    const activeClasses =
        "bg-[#D9EDFF] border-b border-b-[#08569C]";

    return (
        <header className={`${roboto.variable} w-full bg-white h-[94.53px]`}>
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <Link href="/" className="cursor-pointer">
                    <div>
                        <LogoSvg/>
                    </div>
                </Link>
                <ul className="text-[#08569C] text-[22.47px] font-[700] flex gap-[4rem]">
                    {navLinks.map(({name, href}) => (
                        <Link key={name} href={href}>
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
                    className="cursor-pointer outline-none py-[12.68px] px-[24.2px] rounded-[9px] bg-[#08569C] text-white text-[17.13px] font-[600]">
                    Get Started
                </button>
            </div>
        </header>
    );
}
