import { useState } from 'react';

export interface IToDoItem {
	id: string;
	descricao: string;
	completado: boolean;
}

interface Props {
	item: IToDoItem;
	removeTarefa: (item: IToDoItem) => void;
	mudaTarefa: (item: IToDoItem) => void;
}

export const ToDoItem = ({ item, removeTarefa, mudaTarefa }: Props) => {
	const { descricao, completado } = item;

	const [modoEdicao, setModoEdicao] = useState(false);

	const handleRemove = () => removeTarefa(item);

	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		item = { ...item, completado: event.target.checked };
		mudaTarefa(item);
	};

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		item = { ...item, descricao: event.target.value };
		mudaTarefa(item);
	};

	const handleEdit = () => {
		setModoEdicao((mode) => !mode);
		mudaTarefa(item);
	};

	return (
		<div>
			<input
				key="input"
				type="checkbox"
				checked={completado}
				name={descricao}
				onChange={handleCheck}
			></input>

			{
				modoEdicao
					? (<input value={descricao} onChange={handleOnChange} />)
					: (<label htmlFor="input">{descricao}</label>)
			}
			<button onClick={handleEdit}>{modoEdicao ? 'Salvar' : 'Editar'}</button>
			<button onClick={handleRemove} disabled={modoEdicao}>
				Remover
			</button>
		</div>
	);
};
