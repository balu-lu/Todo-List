/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [filtro, setFiltro] = useState('todas');

  const adicionarTodo = useCallback((texto) => {
    const novoTodo = {
      id: crypto.randomUUID(),
      texto: texto.trim(),
      concluida: false,
    };

    setTodos((listaAtual) => [novoTodo, ...listaAtual]);
  }, []);

  const alternarConclusao = useCallback((id) => {
    setTodos((listaAtual) =>
      listaAtual.map((todo) =>
        todo.id === id ? { ...todo, concluida: !todo.concluida } : todo
      )
    );
  }, []);

  const removerTodo = useCallback((id) => {
    setTodos((listaAtual) => listaAtual.filter((todo) => todo.id !== id));
  }, []);

  const filteredTodos = useMemo(() => {
    switch (filtro) {
      case 'concluidas':
        return todos.filter((todo) => todo.concluida);
      case 'pendentes':
        return todos.filter((todo) => !todo.concluida);
      default:
        return todos;
    }
  }, [todos, filtro]);

  const value = useMemo(
    () => ({
      adicionarTodo,
      alternarConclusao,
      filteredTodos,
      filtro,
      removerTodo,
      setFiltro,
      todos,
    }),
    [adicionarTodo, alternarConclusao, filteredTodos, filtro, removerTodo, todos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodo deve ser usado dentro de <TodoProvider>.');
  }

  return context;
}
