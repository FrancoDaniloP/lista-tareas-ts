import { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
saveTodo: ({title}: TodoTitle) => void
}
export const CreateTodo: React.FC<Props> = ({saveTodo}) => {
    const [inputValue, setInputValue] = useState("")

   const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        saveTodo({
            title: inputValue
        })
        setInputValue("")
   }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            className="new-todo"
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
                onKeyDown={() => {}}
                placeholder="¿Que queres hacer Danilo?"
                autoFocus />
        </form>
        
    )
}