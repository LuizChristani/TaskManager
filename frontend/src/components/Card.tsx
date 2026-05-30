interface CardProps{
    children: React.ReactNode,
    className?: React.HtmlHTMLAttributes<HTMLElement>
}

export const Card = ({children, className}: CardProps) => {
    return (
        <div className={`flex w-full bg-[#FFFFFF] ${className} p-4`}>
            {children}
        </div>
    );
}