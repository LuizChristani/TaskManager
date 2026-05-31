import { useState } from "react"
import HomeIcon from "../assets/home.svg?react"
import ListChecks from "../assets/list-checks.svg?react"
import { Menu, type SidebarProps } from "../types/Sidebar"
import { Button } from "./Button"
import { SectionHeader } from "./SectionHeader"

export const Sidebar = ({sidebarOpt, isClickedOption}: SidebarProps) => {

    const handlerClicked = (option: string) => {
        isClickedOption(option)
    }

    return (
        <div className="flex flex-col justify-between bg-[#FFFFFF] max-w-50">
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
                        <Button type="button" color="ghost" className={`flex items-center gap-2 transition duration-500 ${sidebarOpt === Menu.Home && "bg-[#9ef4f8]" }`} onClick={() => handlerClicked(Menu.Home)}><HomeIcon/>Início</Button>
                        <Button type="button" color="ghost" className={`flex items-center gap-2 transition duration-500 ${sidebarOpt === Menu.Task && "bg-[#9ef4f8]" }`} onClick={() => handlerClicked(Menu.Task)}><ListChecks/>Minhas Tarefas</Button>
                    </div>
                </div>
            </div>
            <div className="flex justify-left p-4">
                <Button type="button" color="ghost" className="px-6 py-2">Sair</Button>
            </div>
        </div>
    );
}