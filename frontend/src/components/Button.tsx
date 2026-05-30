import {tv} from "tailwind-variants"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    color?: "primary" | "ghost" | "secondary" | "danger",
    size?: 'small' | 'large',
    className?: string,
}

export const Button = ({children, color="primary", size="small", className, ...rest}: ButtonProps) => {
    const button = tv({
        base: `flex items-center justify-center gap-2 rounded-md px-3 font-semibold transition hover:opacity-75`,
        variants: {
            color: {
                primary: "bg-[#00ADB5] text-white",
                ghost: "bg-transparent",
                secondary: "bg-[#EEEEEE]",
                danger: "bg-red-500",
            },
            size: {
                small: "py-1 text-xs",
                large: "py-2 text-sm"
            },
            disabled: {
                true: "cursor-not-allowed opacity-50 hover:opacity-50"
            },
        },
        defaultVariants: {
            color: "primary",
            size: "small"
        }
    })
    return (
        <button className={`${button({color, size, disabled: rest.disabled, className})}`} {...rest}>{children}</button>
    )
}