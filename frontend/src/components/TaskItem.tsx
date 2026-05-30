import { StatusTask, type TaskProp } from "../types/Task";
import CheckIcon from "../assets/check.svg?react"
import LoaderIcon from "../assets/loader.svg?react"


export const TaskItem = ({ task, handlerTasksClick }: TaskProp) => {

    const getStatusClasses = (status: string) => {
        if (status === StatusTask.Concluida) return "bg-[#00ADB51A] bg-opacity-70"
        if (status === StatusTask.Progresso) return "bg-[#FFAA041A] bg-opacity-70"
        if (status === StatusTask.Pendente) return "bg-[#35383E0D] bg-opacity-70"
    }

    const handleCheckboxClick = () => {
        if (task.status === StatusTask.Pendente){
            return StatusTask.Progresso;
        }
        if (task.status === StatusTask.Progresso){
            return StatusTask.Pendente
        }

        return StatusTask.Pendente
    }

    return (
        <div className={`flex gap-2 p-2 rounded-md ${getStatusClasses(task.status)}`}>
            <label
            className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses(task.status)}`}
            >
            <input
                type="checkbox"
                checked={task.status === StatusTask.Pendente}
                className="absolute h-full w-full cursor-pointer opacity-0"
                onClick={() => handlerTasksClick(task.id)}
                onChange={handleCheckboxClick}
            />
            {task.status === "concluida" && <CheckIcon />}
            {task.status === "progresso" && (
                <LoaderIcon className="animate-spin text-brand-white" />
            )}
            </label>
            {task.titulo}
        </div>
    )
}