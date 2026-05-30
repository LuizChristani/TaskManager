import type { TaskProps } from "../types/Task"

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
            <div className={`flex flex-col ${statusInfo?.color}`}>
                <button className={`${statusInfo?.color}`}></button>
                <span>{item.titulo}</span>
            </div>
            )
        })
    )
}