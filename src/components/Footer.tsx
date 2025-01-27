import React from "react";
import { Filters } from "./Filters";
import { FilterValue } from "../types";

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearComplete: () => void
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({activeCount = 0, completedCount = 0, filterSelected, handleFilterChange, onClearComplete}) => {
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
            {completedCount > 0 && (
                <button className="clear-completed" onClick={onClearComplete}>
                    Borrar completadas
                </button>
            )}
        </footer>
    )
}