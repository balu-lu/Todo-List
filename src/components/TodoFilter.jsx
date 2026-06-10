import { useTodo } from '../hooks/useTodo.js';

export default function TodoFilter() {
  const { filtro, setFiltro } = useTodo();

  const botoes = [
    { id: 'todas', label: 'Todas' },
    { id: 'pendentes', label: 'Pendentes' },
    { id: 'concluidas', label: 'Concluídas' },
  ];

  return (
    <div className="mb-6 flex gap-2 rounded-xl bg-slate-800 p-2">
      {botoes.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setFiltro(btn.id)}
          className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all ${
            filtro === btn.id
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:bg-slate-700 hover:text-white'
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
