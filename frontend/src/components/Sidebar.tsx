import { useState } from "react";
import HomeIcon from "../assets/home.svg?react"
import ListChecks from "../assets/list-checks.svg?react"
import { SectionHeader } from "./SectionHeader"

const Menu = {
    Home: "home",
    Task: "task",
} as const

export const Sidebar = () => {
    const [isClickedButton, setIsClickedButton] = useState("");

    return (
        <div className="flex flex-col justify-between bg-[#FFFFFF]">
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
                        <button className={`flex items-center gap-2 transition duration-500 ${isClickedButton === Menu.Home && "bg-[#E6F7F8]" }`} onClick={() => setIsClickedButton(Menu.Home)}><HomeIcon/>Início</button>
                        <button className={`flex items-center gap-2 transition duration-500 ${isClickedButton === Menu.Task && "bg-[#E6F7F8]" }`} onClick={() => setIsClickedButton(Menu.Task)}><ListChecks/>Minhas Tarefas</button>
                    </div>
                </div>
            </div>
            <button>Sair</button>
        </div>
    );
}