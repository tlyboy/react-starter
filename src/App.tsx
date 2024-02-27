import { toggleDark } from './utils/dark'

function App() {
  return (
    <>
      <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <div>
          <p>🚀 React starter</p>
        </div>
        <nav className="mt-6 flex justify-center gap-2 text-xl">
          <button
            className="icon-btn i-carbon-sun dark:i-carbon-moon"
            title="切换深色模式"
            onClick={toggleDark}
          />

          <a
            className="icon-btn i-carbon-logo-github"
            href="https://github.com/tlyboy/react-starter"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          />
        </nav>
      </main>
    </>
  )
}

export default App
