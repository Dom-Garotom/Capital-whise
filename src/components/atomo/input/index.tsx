import { ComponentProps } from "react";
import { FieldError } from "react-hook-form";

type Props = ComponentProps<'input'> & {
    label: string,
    error ?: FieldError | undefined,
}

export default function Input({ error, label, ...props }: Props) {
    return (
        <div>
            {label.length > 0 &&
                <label htmlFor="" className="text-slate-700">{label}</label>
            }

            <input
                className=" w-full h-[50px] rounded-sm py-3 px-4 border border-solid bg-transparent border-gray-700 font-medium "
                {...props} />

            {error &&
                <span className="w-full text-rose-700 text-sm">
                    {error.message}
                </span>
            }
        </div>
    )
}
