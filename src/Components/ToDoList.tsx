import { IToDoItem, ToDoItem } from "./ToDoItem"

interface Props {
    tarefas: IToDoItem[]
    handleRemove: any
    handleComplete: any
}

export const ToDoList = ({ tarefas, handleRemove, handleComplete }: Props) => {
    const toDoRow = (item: IToDoItem) =>
        <ToDoItem item={item} handleRemove={handleRemove} handleComplete={handleComplete} />

    let liTarefas = tarefas.map(toDoRow)

    return (
        <div className='card'>
            <p>To Do List: </p>
            <ul>{liTarefas}</ul>
        </div>
    )
}