type SelectTimeProps = React.SelectHTMLAttributes<HTMLSelectElement>;


export const SelectTime = (props: SelectTimeProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="time" className="text-left font-semibold text-[#35383E]">Horário</label>
            <select id="periodo" className="border border-[#ECECEC] px-4 py-3 rounded-lg" {...props}>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
            </select>
        </div>
    )
}