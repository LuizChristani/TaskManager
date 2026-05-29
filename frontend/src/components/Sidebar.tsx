import HomeIcon from "../assets/home.svg?react"
import ListChecks from "../assets/list-checks.svg?react"

export function Sidebar(){
    return(
        <div className="flex flex-col h-screen justify-between bg-green-500">
            <div className="flex flex-col mt-2">
                <div className="flex flex-col items-center p-2">
                    <h1 className="text-[#00ADB5]">Task Manager</h1>
                    <p>Um simples <span className="text-[#00ADB5]">organizador de tarefas</span></p>
                </div>
                <div className="flex justify-center bg-amber-800 p-4 mt-2">
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