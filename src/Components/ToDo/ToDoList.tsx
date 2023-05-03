import { IToDoItem, ToDoItem } from './ToDoItem';

interface Props {
  tarefas: IToDoItem[];
  removeTarefa: (item: IToDoItem) => void;
  mudaTarefa: (item: IToDoItem) => void;
}

export const ToDoList = ({ tarefas, removeTarefa, mudaTarefa }: Props) => (
  <div className="card">
    <p>To Do List: </p>
    <div>
      {tarefas.map((item: IToDoItem) => (
        <ToDoItem
          key={item.id}
          item={item}
          removeTarefa={removeTarefa}
          mudaTarefa={mudaTarefa}
        />
      ))}
    </div>
  </div>
);
