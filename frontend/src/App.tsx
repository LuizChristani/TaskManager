import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";
import Add from "./assets/Add.svg?react"
import Trash from "./assets/trash-2.svg?react"
import { Card } from "./components/Card";
import { useState } from "react";
import { TASKS } from "./constants/Task";
import { Button } from "./components/Button";

export default function App() {
  const [task, setTask] = useState(TASKS);

  return (
    <div className="flex w-screen h-screen">
      <Sidebar/>
      <div className="w-full px-20 py-15">
        <div className="flex flex-col gap-2">
          <span className="text-sm">Inicio</span>
          <div className="flex justify-between items-center font-semibold">
            <span className="text-lg">Inicio</span>
            <div className="flex gap-2">
              <Button 
                color="ghost" 
                size="large">
                  Deletar tarefa<Trash/>
              </Button>
              <Button 
                color="primary" 
                size="large">
                  Nova tarefa<Add/>
              </Button>
            </div>
          </div>
        </div>
        <Card className="mt-4">
          <Task task={task} time="Manha"/>
          <Task task={task} time="Tarde"/>
          <Task task={task} time="Noite"/>
        </Card>
      </div>
    </div>
  )
}

