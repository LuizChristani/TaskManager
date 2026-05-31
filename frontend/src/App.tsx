import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Tasks } from "./components/Tasks";
import { Menu } from "./types/Sidebar";

export default function App() {
    const [clickSidebar, setClickSidebar] = useState("home")
    console.log(clickSidebar)
    const isClickedOption = (option: string) => {
      setClickSidebar(option)
    }
    console.log(clickSidebar)

    return (
    <div className="flex h-screen">
      <Sidebar sidebarOption={clickSidebar} isClickedOption={isClickedOption}/>
        {clickSidebar === Menu.Task && <Tasks/>}
        {clickSidebar === Menu.Home && null}
      </div>
  )
}

