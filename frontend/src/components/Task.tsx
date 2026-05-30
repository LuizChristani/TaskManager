import type { TaskProps } from "../types/Task"
import { TaskItem } from "./TaskItem"

const Time = {
    Manha: "manha",
    Tarde: "tarde",
    Noite: "noite"
} as const 

type Time = typeof Time[keyof typeof Time]

const labels: Record<Time, string> = {
    [Time.Manha]: "Manhã",
    [Time.Tarde]: "Tarde",
    [Time.Noite]: "Noite",
}

export const Task = ({ task, time }: TaskProps) => {
    return (
        <div className="flex flex-col space-y-3 w-full">
            <span className="text-lg font-semibold">{labels[time.toLowerCase() as Time]}</span>
            <TaskItem task={task} time={time}/>
        </div>
    )
}