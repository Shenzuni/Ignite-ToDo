import clipboard from "../assets/clipboard.png"

import { TaskItem } from "./TaskItem"

import { Task } from "../App"

interface TaskListProps {
  tasks: Task[]
  onToggleDone: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskList({ tasks, onToggleDone, onDelete }: TaskListProps) {
  let doneTasks = 0
  tasks.forEach((task) => task.done === true && doneTasks++)

  return (
    <section>
      <header className="flex flex-col sm:flex-row gap-3 items-center justify-between pb-6 text-sm">
        <div className="flex gap-2">
          <span className="text-blue-300">Tarefas criadas</span>
          <div className="h-full py-0.5 px-2 bg-gray-400 rounded-full font-bold text-xs">
            {tasks.length}
          </div>
        </div>
        <div className="flex gap-2">
          <span className="text-purple-300">Concluídas</span>
          <div className="h-full py-0.5 px-2 bg-gray-400 rounded-full font-bold text-xs">
            <span>{doneTasks} </span>
            <span>de</span>
            <span> {tasks.length}</span>
          </div>
        </div>
      </header>
      <ul className="flex flex-col gap-3">
        {tasks.length === 0 ? (
          <div className="py-16 px-6 border-t rounded-lg border-gray-400">
            <img className="w-[60px] h-[60px] mx-auto" src={clipboard} alt="" />
            <div className="flex flex-col items-center text-gray-300 mt-4">
              <p className="text-center font-bold">
                Você ainda não tem tarefas cadastradas
              </p>
              <p className="text-center">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              onToggleDone={onToggleDone}
              onDelete={onDelete}
            />
          ))
        )}
      </ul>
    </section>
  )
}
