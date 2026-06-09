import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export default function TodoForm() {
  const [texto, setTexto] = useState('');
  const { adicionarTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarTodo(texto);
    setTexto(''); // Limpa o input
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="O que precisa ser feito?"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-8 py-4 font-bold text-white transition-colors hover:bg-indigo-500"
        >
          Adicionar
        </button>
      </div>
    </form>
  );
}