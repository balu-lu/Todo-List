import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import TodoContext from './TodoContext.js';

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todo_list', []);
  const [filtro, setFiltro] = useState('todas');

  const adicionarTodo = (texto) => {
    if (!texto.trim()) return;

    const novoTodo = {
      id: crypto.randomUUID(),
      texto: texto.trim(),
      concluida: false,
    };

    setTodos((prev) => [novoTodo, ...prev]);
  };

  const alternarConclusao = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, concluida: !todo.concluida } : todo
      )
    );
  };

  const removerTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filtro,
        setFiltro,
        adicionarTodo,
        alternarConclusao,
        removerTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
