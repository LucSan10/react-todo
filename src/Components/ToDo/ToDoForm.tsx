import { useState } from 'react';
import { IToDoItem } from './ToDoItem';

interface Props {
  adicionaTarefa: (itemNovo: IToDoItem) => void;
}

export const ToDoForm = ({ adicionaTarefa }: Props) => {
  const [tarefa, setTarefa] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarefa(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const itemNovo: IToDoItem = {
      id: crypto.randomUUID(),
      descricao: tarefa,
      completado: false,
    };
    adicionaTarefa(itemNovo);
    setTarefa('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What to do?:
        <input type="text" value={tarefa} onChange={handleOnChange} />
      </label>
      <input type="submit" value="Adicionar" />
    </form>
  );
};
