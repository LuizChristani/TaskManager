interface SectionHeaderProps{
    title: string,
    colorTitle?: string,
    description?: string,
    colorDescription?: string,
    highlightText?: string,
    colorhighlight?: string,
}

export const SectionHeader = ({title, colorTitle="text-[#00ADB5]", description, colorDescription, highlightText, colorhighlight="text-[#00ADB5]"}: SectionHeaderProps) => {
    return (
        <div className="flex flex-col items-center p-2 text-center">
            <h1 className={`${colorTitle}`}>{title}</h1>
            {description && <p className={`${colorDescription}`}>{description} <span className={`${colorhighlight}`}>{highlightText}</span></p>}
        </div>
    )
}