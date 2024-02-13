function App() {
  return (
    <>
      <main
        px-4
        py-10
        text="center gray-700 dark:gray-200"
      >
        <div>
          <p>
            🚀 React starter
          </p>
        </div>
        <nav mt-6 flex justify-center gap-2 text-xl>
          <button icon-btn title="切换深色模式" onClick={toggleDark}>
            <div i-carbon-sun dark:i-carbon-moon />
          </button>

          <a icon-btn href="https://github.com/tlyboy/react-starter" target="_blank" rel="noopener noreferrer" title="GitHub">
            <div i-carbon-logo-github />
          </a>
        </nav>
      </main>
    </>
  )
}

export default App
