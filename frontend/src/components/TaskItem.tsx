import { StatusTask, type TaskProp } from "../types/Task";
import CheckIcon from "../assets/check.svg?react"
import LoaderIcon from "../assets/loader.svg?react"
import TrashIcon from "../assets/trash-2.svg?react"
import { Button } from "./Button";
import { useState } from "react";

export const TaskItem = ({ task, handlerTasksClick, onDeleteSuccess }: TaskProp) => {
    const [deleteIsLoading, setDeleteIsLoading] = useState(false)

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

    const handleDeleteClick = async(taskId: string | null) =>{
        if (!taskId) return;

        setDeleteIsLoading(true)
        const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: "DELETE"
        })

        if (!response.ok){
            setDeleteIsLoading(false)
            return
        }
        setDeleteIsLoading(false)
        onDeleteSuccess(taskId)
    }

    return (
        <div className={`flex gap-2 p-2 rounded-md justify-between ${getStatusClasses(task.status)}`}>
            <div className="flex gap-2">
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
           <Button color="ghost" onClick={() => handleDeleteClick(task.id)} disabled={deleteIsLoading}>{!deleteIsLoading ? <TrashIcon/> : <LoaderIcon className="animate-spin"/> }</Button>
   
        </div>
    )
}