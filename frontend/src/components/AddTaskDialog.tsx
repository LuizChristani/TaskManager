import { createPortal } from "react-dom"
import { Card } from "./Card"
import { Input } from "./Input"
import { Button } from "./Button"
import { useRef, useState } from "react"
import { SelectTime } from "./SelectTime"
import { StatusTask, type TaskItemProps } from "../types/Task"
import LoaderIcon from "../assets/loader.svg?react"
import {  CSSTransition } from "react-transition-group"
import "./AddTaskDialog.css"

interface TaskDialog {
    open: boolean
    handleClose: () => void,
    onSaveTaskSuccess: (task: TaskItemProps) => void
}

export const AddTaskDialog = ({open, handleClose, onSaveTaskSuccess} : TaskDialog) => {
    const nodeRef = useRef<HTMLDivElement | null>(null);    
    const [title, setTitle] = useState("")
    const [time, setTime] = useState("manha")
    const [description, setDescription] = useState("")
    const [loadingTask, setLoadingTask] = useState(false)

    const handlerSaveTask = async(e: React.MouseEvent, task: TaskItemProps) => {
        e.preventDefault()
        setLoadingTask(true)
        const response = await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task)
        })
        if (!response.ok){
            setLoadingTask(false)
            return
        }
        setLoadingTask(false)
        onSaveTaskSuccess(task)
    }

    return (
        <CSSTransition in={open} timeout={500} classNames="add-task-dialog" nodeRef={nodeRef} unmountOnExit>
            <div>
                {createPortal(
                    <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen backdrop-blur" ref={nodeRef}>
                        <Card className="flex flex-col text-center w-84">
                            <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
                            <p className="my-1 mb-4 text-sm text-[#9A9C9F]">Insira as informações abaixo</p>
                            <Input label="Título" placeholder="Título da tarefa" onChange={(e) => setTitle(e.target.value)} value={title}></Input>
                            <SelectTime value={time} onChange={(event) => setTime(event.target.value)}/>
                            <Input label="Descrição" placeholder="Descreva a tarefa" onChange={(e) => setDescription(e.target.value)} value={description}></Input>
                            <div className="flex w-full space-x-2">
                                <Button type="button" color="secondary" size="large" className="w-full" onClick={handleClose}>Cancelar</Button>
                                <Button type="button" size="large" className="w-full" onClick={(e) => handlerSaveTask(e, {
                                    id: null,
                                    titulo: title,
                                    detalhes: description,
                                    status: StatusTask.Pendente,
                                    time: time
                                })}>{!loadingTask ? "Salvar" : <LoaderIcon className="animate-spin"/>}</Button>
                            </div>
                        </Card>
                    </div>, document.body)}
            </div>
        </CSSTransition>

    )
}