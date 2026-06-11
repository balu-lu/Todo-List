import { memo } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoState';

function TodoItem({ todo }) {
  const setTodoList = useSetRecoilState(todoListState);

  const alternarConclusao = (id) => {
    setTodoList((listaAtual) =>
      listaAtual.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item
      )
    );
  };

  const removerTodo = (id) => {
    setTodoList((listaAtual) => listaAtual.filter((item) => item.id !== id));
  };

  return (
    <li className="group relative flex items-center justify-between rounded-2xl border border-white/5 bg-slate-800/40 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-800/60 hover:shadow-md">
      <label className="flex flex-grow cursor-pointer items-center gap-4">
        <div className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300">
          <input
            type="checkbox"
            checked={todo.concluida}
            onChange={() => alternarConclusao(todo.id)}
            className="peer sr-only"
          />
          <div
            className={`absolute inset-0 rounded-full border transition-all duration-300 ${
              todo.concluida
                ? 'border-indigo-500 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                : 'border-slate-500 group-hover:border-indigo-400'
            }`}
          />

          <svg
            className={`relative z-10 h-4 w-4 text-white transition-transform duration-300 ${
              todo.concluida ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span
          className={`text-lg font-medium transition-all duration-300 ${
            todo.concluida ? 'text-slate-500 line-through' : 'text-slate-200'
          }`}
        >
          {todo.texto}
        </span>
      </label>

      <button
        type="button"
        onClick={() => removerTodo(todo.id)}
        className="ml-4 flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-red-500 opacity-0 transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500/50"
        title="Excluir tarefa"
        aria-label={`Excluir tarefa: ${todo.texto}`}
      >
        <span aria-hidden="true">X</span>
      </button>
    </li>
  );
}

export default memo(TodoItem);
