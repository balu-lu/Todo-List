import TodoItem from './TodoItem';
import { useTodo } from '../context/TodoContext.jsx';

export default function TodoList() {
  const { filteredTodos } = useTodo();

  if (filteredTodos.length === 0) {
    return (
      <div className="py-10 text-center text-slate-500">
        <p className="font-medium">Nenhuma tarefa encontrada.</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
