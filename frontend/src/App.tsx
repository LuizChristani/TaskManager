import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";
import Add from "./assets/Add.svg?react"
import Trash from "./assets/trash-2.svg?react"
import { Card } from "./components/Card";
import { useState } from "react";
import { TASKS } from "./constants/Task";

export default function App() {
  const [task, setTask] = useState(TASKS);

  return (
    <div className="flex w-screen h-screen">
      <Sidebar/>
      <div className="w-full p-30">
        <div className="flex flex-col gap-2">
          <span className="text-sm">Inicio</span>
          <div className="flex justify-between items-center font-semibold">
            <span className="text-lg">Inicio</span>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-md">Deletar tarefa<Trash/></button>
              <button className="flex items-center gap-2 bg-[#00ADB5] px-4 py-2 rounded-md">Nova tarefa<Add/></button>
            </div>
          </div>
        </div>
        <Card>
          <Task task={task} time="manha"/>
          <Task task={task} time="tarde"/>
          <Task task={task} time="noite"/>
        </Card>
      </div>
    </div>
  )
}

