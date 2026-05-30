import { TaskSeparator } from "./TaskSeparator"
import { TaskItem } from "./TaskItem"
import Sun from "../assets/sun.svg?react"
import { TASKS } from "../constants/Task"
import { useState } from "react"
import { StatusTask, type TaskItemProps } from "../types/Task"

const Time = {
    Manha: "manha",
    Tarde: "tarde",
    Noite: "noite"
} as const 

type Time = typeof Time[keyof typeof Time]

export const Tasks = () => {
    const [tasks, setTasks] = useState<TaskItemProps[]>(TASKS);
    
    const filterMorning = tasks.filter((item) => item.time.toLowerCase() === Time.Manha);
    const filterLate = tasks.filter((item) => item.time.toLowerCase() === Time.Tarde);
    const filterEvening = tasks.filter((item) => item.time.toLowerCase() === Time.Noite);
    
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

    return (
        <div className="flex flex-col gap-4">
            <div className="space-y-2">
                <TaskSeparator title="Manha" icon={Sun}/>
                {filterMorning.map((item) => (
                    <div key={item.id}>
                        <TaskItem key={item.id} task={item}  handlerTaksClick={handlerTaksClick}/>
                    </div>
                ))}
            </div>
            <div className="space-y-2">
                <TaskSeparator title="Tarde" icon={Sun}/>
                {filterLate.map((item) => (
                    <div key={item.id}>
                        <TaskItem key={item.id} task={item}  handlerTaksClick={handlerTaksClick}/>
                    </div>
                ))}
            </div>
            <div className="space-y-2">
                <TaskSeparator title="Tarde" icon={Sun}/>
                {filterEvening.map((item) => (
                    <div key={item.id}>
                        <TaskItem key={item.id} task={item} handlerTaksClick={handlerTaksClick}/>
                    </div>
                ))}
            </div>
        </div>
    )
}