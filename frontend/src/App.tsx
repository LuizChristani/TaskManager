import { Sidebar } from "./components/Sidebar";
import { Tasks } from "./components/Tasks";
import Add from "./assets/Add.svg?react"
import Trash from "./assets/trash-2.svg?react"
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { useState } from "react";
import { AddTaskDialog } from "./components/AddTaskDialog";

export default function App() {  
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  
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
                size="large"
                onClick={() => setIsOpenDialog(true)}
                >
                
                  Nova tarefa<Add/>
              </Button>
              <AddTaskDialog handleClose={() => setIsOpenDialog(false)} open={isOpenDialog} />
            </div>
          </div>
        </div>
        <Card className="mt-4">
          <Tasks/>
        </Card>
      </div>
    </div>
  )
}

