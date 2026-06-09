import { useMemo } from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, filtro } = useTodo();

  // Memoization do cálculo de filtro
  const tarefasFiltradas = useMemo(() => {
    return todos.filter((todo) => {
      if (filtro === 'pendentes') return !todo.concluida;
      if (filtro === 'concluidas') return todo.concluida;
      return true; // para 'todas'
    });
  }, [todos, filtro]);

  if (todos.length === 0) {
    return (
      <div className="text-center text-slate-500 py-10">
        Nenhuma tarefa cadastrada. Adicione sua primeira tarefa acima!
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {tarefasFiltradas.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      
      {tarefasFiltradas.length === 0 && (
        <div className="text-center text-slate-500 py-10">
          Nenhuma tarefa encontrada para este filtro.
        </div>
      )}
    </ul>
  );
}