interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string
}

export const Input = ({label, ...rest}: InputProps) => {
    return (
        <div className="flex flex-col text-left space-y-1">
            <label htmlFor={rest.id} className="text-left font-semibold text-[#35383E]">{label}</label>
            <input className="px-4 py-3 border border-[#ECECEC] rounded-lg placeholder:text-sm" {...rest}></input>
        </div>
    )
}