import HomeIcon from "../assets/home.svg?react"
import ListChecks from "../assets/list-checks.svg?react"
import { SectionHeader } from "./SectionHeader"

export const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen justify-between bg-[#FFFFFF]">
            <div className="flex flex-col mt-2">
                <SectionHeader 
                    title="Task Manager" 
                    colorTitle="text-[#00ADB5]"
                    description="Um simples"
                    highlightText="organizador de tarefas"
                    colorhighlight="text-[#00ADB5]"
                />
                <div className="flex justify-center p-4 mt-2">
                    <div className="flex flex-col gap-4">
                        <button className="flex items-center gap-2"><HomeIcon/>Início</button>
                        <button className="flex items-center gap-2"><ListChecks/>Minhas Tarefas</button>
                    </div>
                </div>
            </div>
            <button>Sair</button>
        </div>
    );
}