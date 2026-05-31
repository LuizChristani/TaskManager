import { TaskSeparator } from "./TaskSeparator"
import { TaskItem } from "./TaskItem"
import Sun from "../assets/sun.svg?react"
import { useEffect, useState } from "react"
import { StatusTask, type StatusTaskType, type TaskItemProps, type TaskItemRequest } from "../types/Task"
import { AddTaskDialog } from "./AddTaskDialog"
import { Button } from "./Button"
import AppIcon from "../assets/Add.svg?react"
import TrashIcon from "../assets/trash-2.svg?react"
import { Card } from "./Card"

const Time = {
    Manha: "manha",
    Tarde: "tarde",
    Noite: "noite"
} as const 

type Time = typeof Time[keyof typeof Time]

export const Tasks = () => {
    const [tasks, setTasks] = useState<TaskItemProps[]>([]);
    const [isOpenDialog, setIsOpenDialog] = useState(false)

    useEffect(() => {
        const getTasks = async () => {
            const response = await fetch("http://localhost:3000/tasks", {
                method: "GET",
            })
            const tasks = await response.json()
            setTasks(tasks)
        }

        getTasks()
    },[])

    const handleDeleteClick = async(taskId: string | null) => {
        if(!taskId) return;
        const newTask = tasks.filter((item) => item.id !== taskId);
        setTasks(newTask);
    }

    const handlerTasksClick = async(taskId: string | null) => {
        if (!taskId) return;
        
        const findTask = tasks.find((item) => item.id === taskId);
        if (!findTask) return;

        let newStatus: StatusTaskType;

        if(findTask.status === StatusTask.Pendente){
            newStatus = StatusTask.Progresso;
        } else if (findTask.status === StatusTask.Progresso){
            newStatus = StatusTask.Concluida;
        } else {
            newStatus = StatusTask.Pendente
        }

        let body = {
            "status": newStatus
        }

        const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: "PATCH",
            body: JSON.stringify(body)
        })

        if (!response.ok){
            return
        }

        const newTasks = tasks?.map((task) => {
            if(task.id !== taskId){
                return task
            }
            
            if (task.status === StatusTask.Pendente){
                return {...task, status: StatusTask.Progresso}
            }

            if( task.status === StatusTask.Progresso){
                return {...task, status: StatusTask.Concluida}
            }
            return {...task, status: StatusTask.Pendente}
        })
        setTasks(newTasks)
    }

    const onSuccessAddTask = async(task: TaskItemProps) => {
        setTasks((prev) => [...prev, task])
        setIsOpenDialog(false)
    }

    const filterMorning = tasks.filter((item) => item.time.toLowerCase() === Time.Manha);
    const filterLate = tasks.filter((item) => item.time.toLowerCase() === Time.Tarde);
    const filterEvening = tasks.filter((item) => item.time.toLowerCase() === Time.Noite);
    return (
        <div className="w-full px-20 py-15">
            <div className="flex flex-col gap-2">
                <span className="text-sm">Inicio</span>
                <div className="flex justify-between items-center font-semibold">
                    <span className="text-lg">Inicio</span>
                    <div className="flex gap-2">
                        <Button 
                            color="ghost" 
                            size="large"
                            >
                            Limpar tarefa<TrashIcon/>
                        </Button>
                        <Button 
                            color="primary" 
                            size="large"
                            onClick={() => setIsOpenDialog(true)}
                            >
                            Nova tarefa<AppIcon/>
                        </Button>
                    </div>
                </div>
            </div>
            <Card className="flex flex-col gap-4 mt-3">
                <TaskSeparator title="Manhã" icon={Sun}/>
                <div className="space-y-2 h-50 overflow-y-auto">
                    {filterMorning.map((item) => (
                        <div key={item.id}>
                            <TaskItem key={item.id} task={item}  handlerTasksClick={handlerTasksClick} onDeleteSuccess={handleDeleteClick}/>
                        </div>
                    ))}
                </div>
                <TaskSeparator title="Tarde" icon={Sun}/>
                <div className="space-y-2 h-50 overflow-y-auto">
                    {filterLate.map((item) => (
                        <div key={item.id}>
                            <TaskItem key={item.id} task={item}  handlerTasksClick={handlerTasksClick} onDeleteSuccess={handleDeleteClick}/>
                        </div>
                    ))}
                </div>
                <TaskSeparator title="Noite" icon={Sun}/>
                <div className="space-y-2 h-50 overflow-y-auto">
                    {filterEvening.map((item) => (
                        <div key={item.id} className="">
                            <TaskItem key={item.id} task={item} handlerTasksClick={handlerTasksClick}  onDeleteSuccess={handleDeleteClick}/>
                        </div>
                    ))}
                </div>
                <AddTaskDialog handleClose={() => setIsOpenDialog(false)} open={isOpenDialog} onSaveTaskSuccess={onSuccessAddTask}/>
            </Card>
        </div>
    )
}