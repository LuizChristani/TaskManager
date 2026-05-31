import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Tasks } from "./components/Tasks";
import { Menu } from "./types/Sidebar";

export default function App() {
    const [opt, setOpt] = useState<string>(Menu.Home)

    return (
    <div className="flex h-screen">
      <Sidebar sidebarOpt={opt} isClickedOption={setOpt}/>
        {opt === Menu.Task && <Tasks/>}
        {opt === Menu.Home && null}
      </div>
  )
}

