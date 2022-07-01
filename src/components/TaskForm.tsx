import React, { useState } from "react"
import { Plus } from "../assets/svg"

interface TaskFormProps {
  onSubmit: (content: string) => void
}

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [taskInput, setTaskInput] = useState("")

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTask = taskInput
    if (newTask !== "") {
      onSubmit(newTask)
      setTaskInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        className="h-[56px] w-full p-4 rounded-lg border bg-gray-500 border-gray-700 placeholder:text-gray-300 focus:border-purple-500"
        placeholder="Adicione uma nova tarefa"
        type="text"
        value={taskInput}
        onChange={handleOnChange}
      />
      <button
        className="flex items-center justify-center gap-2 min-w-[90px] my-px rounded-lg text-sm bg-blue-500 hover:bg-blue-300 disabled:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
        disabled={taskInput === "" ? true : false}
      >
        <span className="font-bold">Criar</span>

        <div className="flex items-center justify-center border-[1.5px] rounded-full h-4 w-4">
          <Plus />
        </div>
      </button>
    </form>
  )
}
