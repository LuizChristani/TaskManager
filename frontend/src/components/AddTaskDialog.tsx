import { createPortal } from "react-dom"
import { Card } from "./Card"
import { Input } from "./Input"
import { Button } from "./Button"
import { useRef, useState } from "react"
import { SelectTime } from "./SelectTime"
import { StatusTask, type TaskItemProps } from "../types/Task"


interface TaskDialog {
    open: boolean
    handleClose: () => void,
    handleSubmit: (task: TaskItemProps) => void
}

export const AddTaskDialog = ({open, handleClose, handleSubmit} : TaskDialog) => {
    const nodeRef = useRef<HTMLDivElement>(null)
    const [title, setTitle] = useState("")
    const [time, setTime] = useState("manha")
    const [description, setDescription] = useState("")

    if (!open) return null

    return createPortal(
        <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen backdrop-blur" ref={nodeRef}>
            <Card className="flex flex-col text-center w-84">
                <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
                <p className="my-1 mb-4 text-sm text-[#9A9C9F]">Insira as informações abaixo</p>
                <Input label="Título" placeholder="Título da tarefa" onChange={(e) => setTitle(e.target.value)} value={title}></Input>
                <SelectTime value={time} onChange={(event) => setTime(event.target.value)}/>
                <Input label="Descrição" placeholder="Descreva a tarefa" onChange={(e) => setDescription(e.target.value)} value={description}></Input>
                <div className="flex w-full space-x-2">
                    <Button color="danger" size="large" className="w-full" onClick={handleClose}>Cancelar</Button>
                    <Button size="large" className="w-full" onClick={() => handleSubmit({
                        id: Math.random(),
                        titulo: title,
                        detalhes: description,
                        status: StatusTask.Pendente,
                        time: time
                    })}>Salvar</Button>
                </div>
            </Card>
        </div>, document.body
    )
}