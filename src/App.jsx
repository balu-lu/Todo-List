import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

function App() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-10 font-sans selection:bg-indigo-500/30 md:py-20">
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/3 rounded-full bg-purple-600/20 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-2xl">
                <header className="mb-12 text-center">
                    <h1 className="mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-sm md:text-6xl">
                        TaskMaster
                    </h1>
                    <p className="text-lg font-medium text-slate-400">
                        Foque no que realmente importa.
                    </p>
                </header>

                <main className="rounded-3xl border border-white/10 bg-slate-800/30 p-6 shadow-2xl backdrop-blur-xl md:p-10">
                    <TodoForm />
                    <TodoFilter />
                    <TodoList />
                </main>
            </div>
        </div>
    );
}

export default App
