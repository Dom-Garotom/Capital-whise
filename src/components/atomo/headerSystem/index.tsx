"use client"

import Image from 'next/image'
import React from 'react'
import Logo from "../../../../public/assets/logo - capitaWise.png"
import Link from "next/link";
import { Menu } from 'lucide-react';
import { useState } from "react";
import { Search } from 'lucide-react';

export default function HeaderSystem() {
    const [Isvisible, setIsVisible] = useState(false)
    return (
        <header className="w-full">
            <nav className="w-full h-[70px] flex px-5 justify-between items-center bg-slate-50 ">
                <div className="flex items-center">
                    <Image src={Logo}
                        alt="Logo da Capital Wise"
                        width={60}
                        height={60}
                    />
                    <p className="font-bold">Capital Whise</p>
                </div>

                <div className="flex items-center bg-[#f3f7f2] rounded-md h-[35px] max-w-[400px] w-full px-2">
                    <input type="text" 
                        className='bg-transparent w-full h-full focus:outline-none ' 
                        placeholder='Procurando alguma ação?'
                    />
                    <button>
                        <Search/>
                    </button>
                </div>

                <div className="cursor-pointer" onClick={() => setIsVisible(!Isvisible)}>
                    <Menu/>
                </div>
            </nav>

            {Isvisible &&
                <div className="bg-gray-100 flex flex-col items-center space-y-5 font-bold p-5 shadow-sm">
                        <Link href={"/signUp"}>Whatch list</Link>
                        <Link href={"/signUp"}>Ações do mercado</Link>
                        <Link href={"/signUp"}>Minhas Ações</Link>
                </div>
            }
        </header>
    )
}
