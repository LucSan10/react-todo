export interface IToDoItem {
    id: string
    descricao: string
    completado: boolean
}

interface Props {
    item: IToDoItem
    handleRemove: (item: IToDoItem) => void
    handleComplete: (item: IToDoItem) => void
}

export const ToDoItem = ({ item, handleRemove, handleComplete }: Props) => {
    const { id, descricao, completado } = item

    return (
        <li key={id}>
            {descricao} {completado && "(DONE)"}
            <button onClick={() => handleRemove(item)}>Remove</button>
            <button onClick={() => handleComplete(item)}>Complete</button>
        </li>
    )
}