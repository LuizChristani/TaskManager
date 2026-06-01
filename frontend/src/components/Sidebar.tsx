import { useState } from "react"
import HomeIcon from "../assets/home.svg?react"
import ListChecks from "../assets/list-checks.svg?react"
import { Menu } from "../types/Sidebar"
import { Button } from "./Button"
import { SectionHeader } from "./SectionHeader"
import { Link } from "react-router-dom"

export const Sidebar = () => {
    const [sidebarClick, setSidebarClick] = useState("home")


    return (
        <div className="flex flex-col justify-between bg-[#FFFFFF] h-screen max-w-50">
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
                        <Link to={"/"}>
                            <Button type="button" color="ghost" 
                                className={`flex w-full items-center gap-2 transition duration-500 ${sidebarClick === Menu.Home && "bg-[#9ef4f8]" }`}
                                onClick={() => setSidebarClick(Menu.Home)}>
                                    <HomeIcon/>Início
                            </Button>
                        </Link>
                        <Link to={"/tasks"}>
                            <Button
                                type="button" 
                                color="ghost" 
                                className={`flex w-full items-center gap-2 transition duration-500 ${sidebarClick === Menu.Task && "bg-[#9ef4f8]" }`} 
                                onClick={() => setSidebarClick(Menu.Task)}>
                                    <ListChecks/>Minhas Tarefas
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-left p-4">
                <Button type="button" color="ghost" className="px-6 py-2">Sair</Button>
            </div>
        </div>
    );
}