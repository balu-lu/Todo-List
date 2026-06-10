import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen py-10 px-4 md:py-20">
      <div className="mx-auto max-w-2xl">
        <header className="mb-10 text-center">
          <h1 className="mb-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
            TaskMaster
          </h1>
          <p className="text-slate-400">Gerenciamento inteligente de tarefas</p>
        </header>

        <main className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-xl md:p-10">
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </main>

        </div>
      </div>
  );
}

export default App;
