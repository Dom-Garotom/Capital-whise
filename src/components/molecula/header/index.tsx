"use client"

import Image from "next/image";
import Logo from "../../../../public/assets/logo - capitaWise.png"
import Link from "next/link";
import { List } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [Isvisible, setIsVisible] = useState(false)



    return (
        <header className="w-full">
            <nav className="w-full h-[80px] flex px-5 justify-between items-center">
                <div className="flex items-center">
                    <Image src={Logo}
                        alt="Logo da Capital Wise"
                        width={60}
                        height={60}
                    />
                    <p className="font-bold">Capital Whise</p>
                </div>

                <div className="hidden space-x-4 lg:block">
                    <button className="w-[120px] h-[40px] px-5 rounded-[24px] bg-transparent border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-950 hover:text-slate-50" >
                        <Link href={"/signUp"}>Sign Up</Link>
                    </button>
                    <button className="w-[120px] h-[40px] px-5 rounded-[24px] bg-gray-900 text-slate-50 font-semibold hover:bg-transparent hover:border-2 hover:border-gray-900 hover:text-slate-900 " >
                        <Link href={"login"}>Log in</Link>
                    </button>
                </div>

                <div className="lg:hidden cursor-pointer" onClick={() => setIsVisible(!Isvisible)}>
                    <List/>
                </div>
            </nav>

            {Isvisible &&
                <div className="bg-slate-200 flex flex-col items-center space-y-5 font-bold p-5">
                        <Link href={"/signUp"}>Sign Up</Link>
                        <Link href={"login"}>Log in</Link>
                </div>
            }


        </header>
    )
}
