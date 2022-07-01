import { Rocket } from "../assets/svg"

export function Header() {
  return (
    <header className="flex items-center justify-center gap-3 h-[200px] bg-gray-700 select-none">
      <Rocket />
      <h1 className="text-[2.5rem] font-black">
        <span className="text-blue-300">to</span>
        <span className="text-purple-500">do</span>
      </h1>
    </header>
  )
}
