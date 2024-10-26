import { ComponentProps } from "react";

type Props = ComponentProps<'input'> & {
    label : string,
}

export default function Input({ label , ...props }: Props) {
    return (
        <div>
            {label.length > 0 && 
                <label htmlFor="" className="text-slate-700">{label}</label>
            }

            <input
                className=" w-full h-[50px] rounded-sm py-3 px-4 border border-solid bg-transparent border-gray-700 font-medium "
                {...props} />
        </div>
    )
}
