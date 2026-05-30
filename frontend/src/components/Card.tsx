interface CardProps{
    children: React.ReactNode,
    className?: string
}

export const Card = ({children, className}: CardProps) => {
    return (
        <div className={`flex flex-col bg-[#FFFFFF] rounded-xl gap-4 ${className} p-4`}>
            {children}
        </div>
    );
}