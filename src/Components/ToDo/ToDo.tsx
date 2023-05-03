import { useCallback, useState } from 'react';
import { IToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoForm } from './ToDoForm';

const ToDo = () => {
	const [tarefas, setTarefas] = useState<IToDoItem[]>([]);

	const countCompleted = tarefas.filter((i) => i.completado).length;

	const adicionarTarefa = (itemNovo: IToDoItem) => {
		setTarefas((tasks) => {
			console.log(tasks, itemNovo);
			return [...tasks, itemNovo];
		});
	};

	const mudaTarefa = useCallback(
		(item: IToDoItem) =>
			setTarefas((task) => task.map((i) => (i.id === item.id ? item : i))),
		[setTarefas],
	);

	const removeTarefa = useCallback(
		(item: IToDoItem) => {
			setTarefas((t) => t.filter((i) => i.id !== item.id));
		},
		[setTarefas],
	);

	return (
		<>
			<p>Tarefas Completas: {countCompleted}</p>
			<ToDoForm adicionaTarefa={adicionarTarefa} />
			<ToDoList
				tarefas={tarefas}
				removeTarefa={removeTarefa}
				mudaTarefa={mudaTarefa}
			/>
		</>
	);
};

export { ToDo };
