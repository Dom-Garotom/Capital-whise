"use client"

import React from 'react';
import { Bitcoin } from 'lucide-react';

type Props = {
    name: string;           
    price: string;           
    percentage: string;      
    segment: string;         
    onActionClick?: () => void; 
    actionLabel?: string;    
};

export default function ItenActiones({ name, price, percentage, segment, onActionClick, actionLabel = 'comprar' }: Props) {
    return (
        <div className="w-full">
            <div className="w-full px-5 py-2 columns-4 justify-items-center items-center">
                <div className="flex gap-3 items-center h-[35px]">
                    <Bitcoin/>
                    <p>{name}</p>
                </div>

                <div className="flex items-center h-[35px]">
                    <p className="font-semibold">{price}</p>
                </div>

                <div className="flex items-center h-[35px]">
                    <p>{percentage}</p>
                </div>

                <div className="flex items-center">
                    <p className="flex-1">{segment}</p>
                    <button
                        onClick={() => onActionClick} 
                        className="
                        flex items-center max-w-[150px] h-[35px] py-2 px-4 rounded-lg 
                        font-semibold cursor-pointer bg-slate-900 text-slate-50 
                        hover:bg-slate-700 hover:text-slate-50"
                    >
                        {actionLabel} 
                    </button>
                </div>
            </div>
        </div>
    );
}
