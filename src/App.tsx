import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, TodoId, TodoTitle, type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const mockTodos = [
  {
    id: "1",
    title: "Ir al gimnasio",
    completed: true
  },
  {
    id: "2",
    title: "Bañarme",
    completed: false
  },
  {
    id: "3",
    title: "Entrar a la clase",
    completed: false
  },
  {
    id: "4",
    title: "Hacer lo visto en clase",
    completed: false
  },
  
]

const App: React.FC = ()=> {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id) //filtra todos aquellos que no tienen id al que clickeaste
    setTodos(newTodos)
  }

  const handleCompleted = ({id, completed}: Pick<TodoType, "id" | "completed">) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id){
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }


  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE){
      return !todo.completed
    }
    if (filterSelected === TODO_FILTERS.COMPLETED){
      return todo.completed
    }
    return todo
  })

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodos = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodosList = [...todos, newTodos]
    setTodos(newTodosList)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodo={handleRemove}
       todos={filteredTodos}/>
      <Footer
      completedCount={completedCount}
      activeCount={activeCount}
       filterSelected={filterSelected} 
       onClearComplete={handleRemoveAllCompleted}
       handleFilterChange={handleFilterChange}
       />

    </div>
  )
}

export default App
