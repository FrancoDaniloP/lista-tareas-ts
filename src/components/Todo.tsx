import { TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType{
    onToggleCompleteTodo: ({id, completed}: Pick<TodoType, "id" | "completed">) => void
    onRemoveTodo: ({id}: TodoId) => void
}
export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleteTodo}) => {
    return (
        <div className="view">
            <input type="checkbox" className="toggle" checked={completed} onChange={(e) => {
                onToggleCompleteTodo({id, completed: e.target.checked })
            }}/>
            <label>{title}</label>
            <button className="destroy" onClick={() => {
                onRemoveTodo({id})
            }}></button>
        </div>
    )
}
