import { TaskSeparator } from "./TaskSeparator"
import { TaskItem } from "./TaskItem"
import Sun from "../assets/sun.svg?react"
import { TASKS } from "../constants/Task"
import { useState } from "react"
import { StatusTask, type TaskItemProps } from "../types/Task"
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
    const [tasks, setTasks] = useState<TaskItemProps[]>(TASKS);
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    
    const handlerTaksClick = (taskId: number) => {
        const newTasks = tasks.map((task) => {
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

    const handleAddTask = (task: TaskItemProps) => {
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
                            size="large">
                            Deletar tarefa<TrashIcon/>
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
                            <TaskItem key={item.id} task={item}  handlerTaksClick={handlerTaksClick}/>
                        </div>
                    ))}
                </div>
                <TaskSeparator title="Tarde" icon={Sun}/>
                <div className="space-y-2 h-50 overflow-y-auto">
                    {filterLate.map((item) => (
                        <div key={item.id}>
                            <TaskItem key={item.id} task={item}  handlerTaksClick={handlerTaksClick}/>
                        </div>
                    ))}
                </div>
                <TaskSeparator title="Tarde" icon={Sun}/>
                <div className="space-y-2 h-50 overflow-y-auto">
                    {filterEvening.map((item) => (
                        <div key={item.id} className="">
                            <TaskItem key={item.id} task={item} handlerTaksClick={handlerTaksClick}/>
                        </div>
                    ))}
                </div>
                <AddTaskDialog handleSubmit={handleAddTask} handleClose={() => setIsOpenDialog(false)} open={isOpenDialog} />
            </Card>
        </div>
    )
}