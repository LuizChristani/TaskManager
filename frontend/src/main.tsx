import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Tasks } from './pages/Tasks.tsx'
import Layout from './pages/Layout.tsx'
import HomePage from './pages/Home.tsx'
import TaskDetails from './pages/TaskDetails.tsx'


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/task/:taskId",
        element: <TaskDetails />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
