import { useContext } from 'react';
import TodoContext from '../context/TodoContext.js';

export function useTodo() {
  const context = useContext(TodoContext);

  if (context === null) {
    throw new Error('useTodo deve ser usado dentro de <TodoProvider>.');
  }

  return context;
}
