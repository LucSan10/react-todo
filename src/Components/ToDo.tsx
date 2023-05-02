import { useCallback, useState } from 'react'
import { IToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoForm } from './ToDoForm';


const ToDo = () => {
    const [tarefas, setTarefas] = useState<IToDoItem[]>([]);

    const countCompleted = tarefas.filter(i => i.completado).length

    const adicionarTarefa = (itemNovo: IToDoItem) => {
        setTarefas([...tarefas, itemNovo]);
    }

    const completeToDo = useCallback(
        (item: IToDoItem) =>
            setTarefas((task) =>
                task.map(i => (i.id === item.id ? { ...i, completado: true } : i))
            ),
        [setTarefas],
    )

    const removeToDo = useCallback(
        (item: IToDoItem) => setTarefas(tarefas.filter(i => i.id !== item.id)),
        [setTarefas],
    )

    return (
        <>
            <p>Tarefas Completas: {countCompleted}</p>
            <ToDoForm adicionaTarefa={adicionarTarefa} />
            <ToDoList tarefas={tarefas}
                handleRemove={removeToDo}
                handleComplete={completeToDo} />
        </>
    )
}


export { ToDo };