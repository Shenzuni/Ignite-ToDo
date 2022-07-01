import { useState } from "react"

import { Header } from "./components/Header"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"

import "./global.css"

export interface Task {
  id: number
  content: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[] | []>([
    {
      id: 1,
      content: "Assistir aulas da nova trilha de React do Ignite Lab",
      done: true,
    },
    {
      id: 2,
      content: "Assistir aulas da trilha de Node do Ignite Lab",
      done: false,
    },
    { id: 3, content: "Comprar filtro de café ☕", done: false },
  ])

  const onToggleDone = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return { ...task }
    })
    setTasks(newTasks)
  }

  const onDelete = (id: number) => {
    const newTasks = tasks.filter((task) => (task.id === id ? false : true))
    setTasks(newTasks)
  }

  const onSubmit = (content: string) => {
    const newTasks = [
      ...tasks,
      {
        id: tasks.length,
        content,
        done: false,
      },
    ]
    setTasks(newTasks)
  }

  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center gap-[4.5rem] relative -top-[28px] max-w-[46rem] mx-auto px-4 pb-4">
        <TaskForm onSubmit={onSubmit} />
        <TaskList
          tasks={tasks}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      </main>
    </div>
  )
}

export default App
