import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ArrowRightIcon from "../assets/ArrowRigth.svg?react"

interface TaskDetailsProps{
    titulo: string,
    detalhes: string,
    status: string,
    time: string
}

export default function TaskDetails(){
    const { taskId } = useParams()
    const [taskDetails, setTaskDetails] = useState<TaskDetailsProps>();
    useEffect(() => {
        const fetchDetails = async() => {
            const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
                method: "GET"
            })
            if (!response.ok){
                return
            }

            const data = await response.json()
            setTaskDetails(data)
        }

        fetchDetails()
    }, [])
    
    return(
        <div className="">
            <div className="flex">
                <p>Minha Tarefa <ArrowRightIcon/><span>{taskDetails?.titulo}</span></p>
            </div>
        </div>
    )
}