import type { TaskProps } from "../types/Task"
import { TaskItem } from "./TaskItem"

export const Task = ({ task, time }: TaskProps) => {
    return <div className="flex flex-col space-y-3 w-full"><TaskItem task={task} time={time}/></div>
}