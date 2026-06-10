import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen py-10 md:py-20 px-4">
        <div className="mx-auto max-w-2xl">
          
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-2">
              TaskMaster
            </h1>
            <p className="text-slate-400">Gerenciamento inteligente de tarefas</p>
          </header>

          <main className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
            <TodoForm />
            <TodoFilter />
            <TodoList />
          </main>
          
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;