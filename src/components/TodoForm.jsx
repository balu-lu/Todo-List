import { useState } from 'react';
import { useTodo } from '../hooks/useTodo.js';

export default function TodoForm() {
  const [texto, setTexto] = useState('');
  const { adicionarTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return; // Validação de segurança
    adicionarTodo(texto);
    setTexto(''); // Limpa o input
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10 relative">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="O que precisa ser feito hoje?"
          className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-6 py-4 text-white placeholder-slate-500 shadow-inner backdrop-blur-sm transition-all duration-300 focus:border-indigo-500/50 focus:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
        />
        <button
          type="submit"
          className="group relative flex-shrink-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] active:translate-y-0"
        >
          <span className="relative z-10 flex items-center gap-2">
            Adicionar <span className="text-xl transition-transform group-hover:scale-125">+</span>
          </span>
        </button>
      </div>
    </form>
  );
}
