import { memo } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { alternarConclusao, removerTodo } = useTodo();

  return (
    <li className="group flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 transition-all hover:border-slate-600 hover:bg-slate-800">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => alternarConclusao(todo.id)}>
        <div className={`flex h-6 w-6 items-center justify-center rounded-md border transition-colors ${todo.concluida ? 'border-indigo-500 bg-indigo-500' : 'border-slate-500'}`}>
          {todo.concluida && <span className="text-white text-xs">✓</span>}
        </div>
        <span className={`text-lg transition-all ${todo.concluida ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
          {todo.texto}
        </span>
      </div>
      
      <button
        onClick={() => removerTodo(todo.id)}
        className="opacity-0 transition-opacity group-hover:opacity-100 rounded-lg bg-red-500/10 px-3 py-1 text-sm font-bold text-red-500 hover:bg-red-500 hover:text-white"
      >
        Excluir
      </button>
    </li>
  );
}

// O React.memo impede a re-renderização se o objeto 'todo' não mudar
export default memo(TodoItem);