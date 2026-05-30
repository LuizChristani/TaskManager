import { createPortal } from "react-dom"
import { Card } from "./Card"
import { Input } from "./Input"
import { Button } from "./Button"


interface TaskDialog {
    open: boolean
    handleClose: () => void
}

export const AddTaskDialog = ({open, handleClose} : TaskDialog) => {
    if (!open) return null

    return createPortal(
        <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen backdrop-blur">
            <Card className="flex flex-col text-center w-84">
                <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
                <p className="my-1 mb-4 text-sm text-[#9A9C9F]">Insira as informações abaixo</p>
                <Input label="Título" placeholder="Título da tarefa"></Input>
                <select id="periodo" className="border border-[#ECECEC] px-4 py-3 rounded-lg">
                    <option value="manha">Manhã</option>
                    <option value="manha">Tarde</option>
                    <option value="manha">Noite</option>
                </select>
                <Input label="Descrição" placeholder="Descreva a tarefa"></Input>
                <div className="flex w-full space-x-2">
                    <Button color="danger" size="large" className="w-full" onClick={handleClose}>Cancelar</Button>
                    <Button size="large" className="w-full">Salvar</Button>
                </div>
            </Card>
        </div>, document.body
    )
}