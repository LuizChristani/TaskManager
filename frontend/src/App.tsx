import { Sidebar } from "./components/Sidebar";
import { Tasks } from "./components/Tasks";

export default function App() {  
    return (
    <div className="flex w-screen h-screen">
      <Sidebar/>
      <Tasks/>
      </div>
  )
}

