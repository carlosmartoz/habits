// App
function App() {
  return (
    <>
      <header className="p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-sans font-bold text-slate-900">
            Habits
          </h1>

          <button
            type="button"
            className="px-4 py-2 bg-blue-700 font-sans font-medium rounded text-slate-50 text-base transition-all duration-300 hover:bg-blue-800 ease-in-out"
          >
            Add new task
          </button>
        </nav>
      </header>

      <main className="p-4">
        <article>
          <section>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-slate-900 font-sans font-normal">
                Task #1
              </li>

              <li className="text-base text-slate-900 font-sans font-normal">
                Task #1
              </li>

              <li className="text-base text-slate-900 font-sans font-normal">
                Task #1
              </li>

              <li className="text-base text-slate-900 font-sans font-normal">
                Task #1
              </li>
            </ul>
          </section>
        </article>
      </main>

      <footer className="text-center text-base text-slate-900 font-normal font-sans">
        Copyright © 2025 Carlos Martínez
      </footer>
    </>
  );
}

// Export
export default App;
