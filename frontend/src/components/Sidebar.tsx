import HomeIcon from "../assets/home.svg?react"
import ListChecks from "../assets/list-checks.svg?react"
import { Menu, type SidebarProps } from "../types/Sidebar"
import { Button } from "./Button"
import { SectionHeader } from "./SectionHeader"

export const Sidebar = ({sidebarOption, isClickedOption}: SidebarProps) => {
    return (
        <div className="flex flex-col justify-between bg-[#FFFFFF] w-75">
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
                        <Button type="button" color="ghost" className={`flex items-center gap-2 transition duration-500 ${sidebarOption === Menu.Home && "bg-[#9ef4f8]" }`} onClick={() => isClickedOption(Menu.Home)}><HomeIcon/>Início</Button>
                        <Button type="button" color="ghost" className={`flex items-center gap-2 transition duration-500 ${sidebarOption === Menu.Task && "bg-[#9ef4f8]" }`} onClick={() => isClickedOption(Menu.Task)}><ListChecks/>Minhas Tarefas</Button>
                    </div>
                </div>
            </div>
            <button>Sair</button>
        </div>
    );
}