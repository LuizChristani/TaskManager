import type { TaskProps } from "../types/Task"
import { TaskItem } from "./TaskItem"

const TimeEnum = {
    Manha: "manha",
    Tarde: "tarde",
    Noite: "noite"
} as const 

type TimeEnum = typeof TimeEnum[keyof typeof TimeEnum]

const labels: Record<TimeEnum, string> = {
    [TimeEnum.Manha]: "Manhã",
    [TimeEnum.Tarde]: "Tarde",
    [TimeEnum.Noite]: "Noite",
}

export const Task = ({ task, time }: TaskProps) => {
    return (
        <div className="flex flex-col space-y-3 w-full">
            <span className="text-lg font-semibold">{labels[time.toLowerCase() as TimeEnum]}</span>
            <TaskItem task={task} time={time}/>
        </div>
    )
}