import type { TaskProps } from "../types/Task"
import Details from "../assets/details.svg?react"

const getStatus = (status: string) => {
    if (status === "concluida") return {label: 'concluida', color: "bg-green-500/50"}
    if (status === "progresso") return {label: 'progresso', color: "bg-yellow-500/50"}
    if (status === "pendente") return {label: 'pendente', color: "bg-gray-500/50"}

}


export const TaskItem = ({task, time}: TaskProps) => {
    const filter = task.filter((item) => item.time === time)
    return (
        filter.map((item) => {
            const statusInfo = getStatus(item.status)
            return(
            <div key={item.id} className={`flex items-center justify-between p-4 rounded-xl ${statusInfo?.color}`}>
                <div className="flex items-center gap-2">
                    <input type="checkbox"></input>
                    <span>{item.titulo}</span>
                </div>
                <a href='#' className="text-sm text-blue-500"><Details/></a>
            </div>
            )
        })
    )
}