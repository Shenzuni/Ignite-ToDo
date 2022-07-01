import { Check, Trash } from "phosphor-react"

import { Task } from "../App"

interface TaskItemProps extends Task {
  onToggleDone: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskItem({
  id,
  content,
  done,
  onToggleDone,
  onDelete,
}: TaskItemProps) {
  function handleToggleDone() {
    onToggleDone(id)
  }

  function handleDelete() {
    onDelete(id)
  }

  return (
    <li className="flex gap-3 w-full p-4 rounded-lg border text-sm border-gray-400 bg-gray-500">
      <button
        id={`task-${id}`}
        className="flex items-center justify-center w-6 h-6 group"
        onClick={handleToggleDone}
      >
        {done ? (
          <div className="flex items-center justify-center w-[18px] h-[18px] bg-purple-500 rounded-full  group-hover:bg-purple-300">
            <Check size={14} weight="bold" />
          </div>
        ) : (
          <div className="w-[18px] h-[18px] border-[1.5px] border-blue-300 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:bg-opacity-20" />
        )}
      </button>
      <label className="break-words w-8 flex-1" htmlFor={`task-${id}`}>
        {done ? (
          <span className="text-gray-300 line-through">{content}</span>
        ) : (
          <span>{content}</span>
        )}
      </label>
      <div
        className="flex items-center justify-center w-6 h-6 text-gray-300 rounded-[4px] hover:text-danger hover:bg-gray-400 transition-colors"
        onClick={handleDelete}
      >
        <Trash />
      </div>
    </li>
  )
}
