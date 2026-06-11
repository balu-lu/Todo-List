import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms/todoState';

export default function TodoFilter() {
  const [filtro, setFiltro] = useRecoilState(todoListFilterState);

  const botoes = [
    { id: 'todas', label: 'Todas' },
    { id: 'pendentes', label: 'Pendentes' },
    { id: 'concluidas', label: 'Concluídas' },
  ];

  const posicaoAtual = Math.max(0, botoes.findIndex((btn) => btn.id === filtro));

  return (
    <div className="relative mb-8 grid grid-cols-3 rounded-2xl border border-white/5 bg-slate-900/60 p-1 shadow-inner backdrop-blur-md">
      <div
        className="pointer-events-none absolute inset-y-1 w-[calc((100%-0.5rem)/3)] rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-[left] duration-300 ease-out"
        style={{
          left: `calc(0.25rem + (${posicaoAtual} * (100% - 0.5rem) / 3))`,
        }}
      />

      {botoes.map((btn) => (
        <button
          key={btn.id}
          type="button"
          onClick={() => setFiltro(btn.id)}
          className={`relative z-10 py-3 text-sm font-bold tracking-wide transition-colors duration-300 ${
            filtro === btn.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
